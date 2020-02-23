import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './styles.module.scss'

import { useStore } from '../../utils/store'

function Product(
  { productId, image, division, displayName, colorVariations },
  index
) {
  return (
    <li key={`product-${index}`} className={styles.product}>
      <Link to={`/product/${productId}`}>
        <div className={styles.container}>
          <picture className={styles.image}>
            <img src={image.src} alt="" />
          </picture>
          <div className={styles.data}>
            <span className={styles.category}>{division}</span>
            <span className={styles.name}>{displayName}</span>
            {colorVariations.length > 0 && (
              <span className={styles.colors}>
                {`${colorVariations.length} Colors`}
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  )
}

function Products() {
  const { category = 'shoes' } = useParams()
  const [store, dispatch] = useStore('productList')

  const products = store.products.filter(
    product => product.category === category
  )

  useEffect(() => {
    if (products.length === 0) {
      dispatch('FETCH', { category })
    }
  }, [dispatch, category, products, store])

  return (
    <div>
      <ul className={styles.list}>{[...products].map(Product)}</ul>
    </div>
  )
}

export default Products
