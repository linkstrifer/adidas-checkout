import React from 'react'
import { Link } from 'react-router-dom'

import styles from './cart-styles.module.scss'

import Icon from '../icon'

function HeaderCart() {
  return (
    <div className={styles.container}>
      <Link to="/cart">
        <Icon name="bag-inactive" />
      </Link>
    </div>
  )
}

export default HeaderCart
