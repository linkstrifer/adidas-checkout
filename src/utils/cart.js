import API from './api'

const cache = window.localStorage
let products = []
let basketId = cache.getItem('basketId')

async function add({ id, size, quantity }) {
  const product = {
    quantity,
    productId: size.id,
    masterProductId: id,
    displaySize: size.displaySize,
  }

  const inCart = products.find(
    cartProduct => cartProduct.productId === product.productId
  )

  if (!basketId) {
    const { id } = await API.createBasket()

    basketId = id

    cache.setItem('basketId', basketId)
  }

  if (!inCart) {
    products.push(product)

    API.addToBasket(basketId, products).catch(() => {
      API.createBasket().then(({ id }) => {
        basketId = id

        cache.setItem('basketId', basketId)

        API.addToBasket(basketId, products)
      })
    })
  } else {
    inCart.quantity += product.quantity
  }
}

async function getProducts() {
  if (!basketId) {
    API.createBasket().then(({ id }) => {
      basketId = id
    })
  } else if (products.length === 0) {
    await API.getBasket(basketId).then(data => {
      if (data.error) {
        return
      }

      products = data.products
    })
  }

  return products
}

export default {
  add,
  getProducts,
}
