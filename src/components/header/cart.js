import React from 'react'
import { Link } from 'react-router-dom'

import styles from './cart-styles.module.scss'

import Icon from '../icon'

function HeaderCart() {
  return (
    <Link to="/cart" className={styles.container}>
      <Icon name="bag-inactive" />
    </Link>
  )
}

export default HeaderCart
