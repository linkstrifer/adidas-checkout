import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './product-styles.module.scss'

import Icon from '../icon'
import { useStore } from '../../utils/store'

function CartProduct({ product, onDelete }) {
  const [store] = useStore('productList')
  const [, productDispatch] = useStore('productDetail')
  const productData = store.products.find(({ id }) => id === product.id)

  useEffect(() => {
    if (!product.name) {
      const productInCache = store.products.find(({ id }) => id === product.id)

      if (!productInCache) {
        productDispatch('FETCH', product)
      }
    }
  }, [product, store, productDispatch])

  return (
    <div className={styles.container}>
      <figure className={styles.image}>
        <img src={productData.image.src} alt={productData.displayName} />
      </figure>
      <div className={styles.data}>
        <h3 className={styles.name}>
          <Link to={`/product/${product.id}`}>{productData.color}</Link>
        </h3>
        <span className={styles.category}>{productData.division}</span>
        <div className={styles.attributes}>
          <span className={styles.size}>SIZE: {product.size.displaySize}</span>
          <span className={styles.quantity}>QTY: {product.quantity}</span>
        </div>
        <div className={styles.actions}>
          <button
            className={styles.action}
            onClick={() => {
              onDelete(product)
            }}
          >
            <Icon name="cross-small" />
          </button>
          <Link to={`/product/${product.id}/edit`} className={styles.action}>
            <Icon name="edit" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
