import React, { useEffect } from 'react'

import styles from './styles.module.scss'

import Summary from './summary'
import Button from '../button'
import CartProduct from './cart-product'
import { useStore } from '../../utils/store'

function Cart() {
  const [store, dispatch] = useStore('cart')
  const { products, id } = store

  const totalItems = products.reduce(
    (total, product) => total + product.quantity,
    0
  )

  useEffect(() => {
    if (!id) {
      dispatch('CREATE')
    }
  }, [id, dispatch])

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Your Bag</h1>
      <h2 className={styles.subtitle}>
        Total: ({totalItems} item{totalItems > 1 ? 's' : ''}){' '}
      </h2>
      <ul className={styles.list}>
        {products.map(product => (
          <li key={product.id} className={styles.item}>
            <CartProduct
              onDelete={product => {
                dispatch('DELETE', product)
              }}
              product={product}
            />
          </li>
        ))}
      </ul>

      <aside className={styles.aside}>
        <Button label="Go to checkout" />

        <Summary totalItems={totalItems} />
      </aside>
    </section>
  )
}

export default Cart
