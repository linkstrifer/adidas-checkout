import { useCallback, useState, useEffect } from 'react'

import API from './api'

const { localStorage } = window

let initialState = {
  productList: {
    products: [],
  },
  productDetail: {
    size: null,
    quantity: 1,
    color: null,
  },
  cart: {
    products: [],
    id: null,
  },
}

class StoreClass {
  constructor() {
    this.state = {}

    this.init = this.init.bind(this)
  }

  init() {
    const cache = localStorage.getItem('store')

    if (cache) {
      this.state = JSON.parse(cache)
    } else {
      this.state = initialState
    }
  }

  set = callback => {
    const newState = callback(this.state)

    this.state = newState

    localStorage.setItem('store', JSON.stringify(this.state))
  }
}

const Store = new StoreClass()

export default Store

const actions = {
  productList: {
    FETCH: loadProducts,
  },
  productDetail: {
    FETCH: loadProduct,
    SET: setProductValue,
    EXIT: (data, setStore) =>
      setProductValue(initialState.productDetail, setStore),
  },
  cart: {
    ADD: addToCart,
    DELETE: deleteFromCart,
    UPDATE: updateFromCart,
    CREATE: createCart,
  },
}

function createCart(data, setStore) {
  API.createBasket().then(({ id }) => {
    setStore(current => {
      const newState = { ...current }

      newState.cart.id = id

      return newState
    })
  })
}

function updateFromCart({ id, quantity }, setStore) {
  setStore(current => {
    const newState = { ...current }

    const productInCart = newState.cart.products.find(
      product => product.id === id
    )

    productInCart.quantity = quantity

    API.updateBasketProduct(current.cart.id, { id, quantity })

    return newState
  })
}

function deleteFromCart({ id }, setStore) {
  setStore(current => {
    const newState = { ...current }

    newState.cart.products = newState.cart.products.filter(
      product => product.id !== id
    )

    API.deleteFromBasket(current.cart.id, id)

    return newState
  })
}

function addToCart(product, setStore) {
  setStore(current => {
    const newState = { ...current }

    const productInCart = newState.cart.products.find(
      ({ id }) => id === product.id
    )

    if (productInCart) {
      productInCart.quantity += product.quantity
    } else {
      newState.cart.products = [...newState.cart.products, product]
    }

    if (!current.cart.id) {
      API.createBasket().then(({ id }) => {
        setStore(current => {
          const newState = { ...current }

          newState.cart.id = id

          return newState
        })
        API.addToBasket(id, [product])
      })
    } else {
      API.addToBasket(current.cart.id, [product])
    }

    return newState
  })
}

function setProductValue(data, setStore) {
  setStore(current => {
    const newState = { ...current }

    newState.productDetail = {
      ...newState.productDetail,
      ...data,
    }

    return newState
  })
}

function loadProduct({ id }, setStore) {
  API.getProduct(id).then(product => {
    setStore(current => {
      const newState = { ...current }

      let productInList = newState.productList.products.find(
        ({ id }) => id === product.id
      )

      if (!productInList) {
        productInList = { ...product }
        newState.productList.products = [
          ...newState.productList.products,
          productInList,
        ]
      } else {
        productInList.colors = product.colors
      }

      newState.productDetail.id = id
      newState.productDetail.size = null
      newState.productDetail.quantity = 1

      return newState
    })

    API.getAvailability(id).then(({ availability, sizes }) => {
      setStore(current => {
        const newState = { ...current }

        const productInList = newState.productList.products.find(
          ({ id }) => id === product.id
        )

        productInList.sizes = sizes
        productInList.availability = availability

        return newState
      })
    })
  })
}

function loadProducts({ category }, setStore) {
  API.getProducts(category).then(({ products }) => {
    setStore(current => {
      const newState = { ...current }

      newState.productList.products = products

      return newState
    })
  })
}

function executeAction({ node, type, data, forceUpdate }) {
  if (actions[node] && actions[node][type]) {
    actions[node][type](data, payload => {
      Store.set(payload)
      forceUpdate({})
    })
  }
}

export const useStore = node => {
  const [, forceUpdate] = useState(0)
  const store = Store.state[node]

  useEffect(() => {
    return () => {
      executeAction({ node, type: 'EXIT', forceUpdate })
    }
  }, [node])

  const dispatch = useCallback(
    (type, data) => {
      executeAction({ node, type, data, forceUpdate })
    },
    [node]
  )

  return [store, dispatch]
}
