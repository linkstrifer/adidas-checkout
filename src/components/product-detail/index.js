import React from 'react'

import styles from './styles.module.scss'
import Select from '../select'
import Button from '../button'
import ColorSelector from '../color-selector'

function ProductDetail() {
  return (
    <div className={styles.container}>
      <figure className={styles.image}>
        <img src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/75916ebef5434e608d87a9af0013fdec_9366/five-ten-freerider-pro-mountain-bike-shoes.jpg" />
      </figure>
      <div className={styles.data}>
        <div className={styles.info}>
          <span className={styles.category}>Category</span>
          <h1 className={styles.name}>Name</h1>
          <span className={styles.price}>
            $0 <span className={styles.discount}>$0</span>{' '}
            <span className={styles.discounted}>$0</span>
          </span>
        </div>
        <div className={styles.chooser}>
          <div className={styles.colors}>
            <ColorSelector />
          </div>
          <div className={styles.sizes}>
            <Select
              label="Select Size"
              list={{
                label: 'US men sizes',
                options: [
                  7,
                  7.5,
                  8,
                  8.5,
                  9,
                  9.5,
                  10,
                  10.5,
                  11,
                  11.5,
                  12,
                  12.5,
                  13,
                  14,
                  15,
                ],
              }}
            />
          </div>
          <div className={styles.quantity}>
            <Select defaultValue={1} range={[1, 15]} />
          </div>
          <Button label="Add to bag" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
