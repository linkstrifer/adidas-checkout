import React from 'react'

import styles from './styles.module.scss'

function Product(product, index) {
  return (
    <li key={`product-${index}`} className={styles.product}>
      <div className={styles.container}>
        <picture className={styles.image}>
          <img
            src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/75916ebef5434e608d87a9af0013fdec_9366/five-ten-freerider-pro-mountain-bike-shoes.jpg"
            alt=""
          />
        </picture>
        <div className={styles.data}>
          <span className={styles.category}>Category</span>
          <span className={styles.name}>Product Name</span>
          <span className={styles.price}>
            $0 <span className={styles.discount}>$0</span>{' '}
            <span className={styles.discounted}>$0</span>
          </span>
          <span className={styles.colors}>Colors</span>
        </div>
      </div>
    </li>
  )
}

function Products() {
  const products = new Array(10)

  return <ul className={styles.list}>{[...products].map(Product)}</ul>
}

export default Products
