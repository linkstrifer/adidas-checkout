const host = 'http://localhost:5465/api/checkout/'
const headers = {
  'Content-Type': 'application/json',
}

async function getProducts(category) {
  const url = `/data/${category}.json`

  const data = await fetch(url, {})
    .then(response => response.json())
    .then(({ title, itemList }) => {
      return {
        category: title,
        products: itemList.items.map(product => ({
          ...product,
          id: product.productId,
        })),
      }
    })
    .catch(error => {
      throw new Error(error)
    })

  return data
}

async function getProduct(id) {
  const url = `/data/product-${id}.json`

  const product = await fetch(url)
    .then(response => response.json())
    .then(data => {
      const image = data.view_list[0].image_url

      let colors = [...data.product_link_list]
        .filter(({ type }) => type === 'color-variation')
        .map(color => ({
          ...color,
          id: color.productId,
        }))

      colors = [
        ...colors,
        {
          id: data.id,
          image,
          default_color: data.attribute_list.color,
        },
      ]

      return {
        ...data,
        category: data.attribute_list.brand,
        image: {
          src: data.view_list[0].image_url,
        },
        colors,
      }
    })
    .catch(error => {
      throw new Error(error)
    })

  return product
}

async function getAvailability() {
  const url = '/data/availability.json'

  let availability = await fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw new Error(error)
    })

  const sizes = availability.variation_list
    .filter(({ availability_status: status }) => status === 'IN_STOCK')
    .map(variation => {
      return {
        id: variation.sku,
        value: variation.size,
      }
    })

  return { availability, sizes }
}

async function createBasket() {
  const url = `${host}baskets`

  const result = await fetch(url, {
    method: 'POST',
    headers,
  }).then(response => response.json())

  return { id: result.basketId }
}

async function getBasket(id) {
  const url = `${host}baskets/${id}`

  const result = await fetch(url, {
    method: 'GET',
    headers,
  }).then(response => response.json())

  return result
}

async function deleteBasket(id) {
  const url = `${host}/baskets/${id}`

  await fetch(url, {
    method: 'DELETE',
  }).then(response => response.json())
}

async function addToBasket(id, products) {
  const url = `${host}baskets/${id}/items`

  const productsToAdd = products.map(({ id, quantity }) => ({
    productId: id,
    quantity,
  }))

  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(productsToAdd),
  })
    .then(response => response.json())
    .catch(error => {})
}

async function deleteFromBasket(id, productId) {
  const url = `${host}baskets/${id}/items/${productId}`

  return fetch(url, {
    method: 'DELETE',
    headers,
  })
    .then(response => response.json())
    .catch(error => {})
}

async function updateBasketProduct(id, product) {
  const url = `${host}baskets/${id}/items/${product.id}`

  return fetch(url, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(product),
  })
    .then(response => response.json())
    .catch(error => {})
}

const API = {
  getProduct,
  getProducts,
  getAvailability,
  createBasket,
  getBasket,
  deleteBasket,
  deleteFromBasket,
  addToBasket,
  updateBasketProduct,
}

export default API
