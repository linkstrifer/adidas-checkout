import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import { useStore } from '../../utils/store'

import styles from './cart-styles.module.scss'

import Icon from '../icon'

function HeaderCart() {
  const [cartStore] = useStore('cart')

  const { products } = cartStore

  return (
    <Link
      to="/cart"
      className={classnames(styles.container, {
        [styles.isFull]: products.length > 0,
      })}
    >
      <Icon name="bag-inactive" />
    </Link>
  )
}

export default HeaderCart
