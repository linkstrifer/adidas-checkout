import React from 'react'

import styles from './summary-styles.module.scss'

function Summary({ totalItems }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Order Summary</h2>
      <span className={styles.item}>
        {totalItems} ITEM{totalItems > 1 ? 'S' : ''} <span>$0</span>
      </span>
      <span className={styles.item}>
        DELIVERY <span>Free</span>
      </span>
      <span className={styles.item}>
        Sales tax <span>-</span>
      </span>
      <strong className={styles.item}>
        TOTAL <span>$0</span>
      </strong>
    </div>
  )
}

export default Summary
