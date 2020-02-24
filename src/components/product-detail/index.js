import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import { useStore } from '../../utils/store'

import styles from './styles.module.scss'

import Select from '../select'
import Button from '../button'
import ColorSelector from '../color-selector'
import { useParams } from 'react-router-dom'

function ProductDetail({ editMode }) {
  const [redirect, setRedirect] = useState(false)
  const [store, dispatch] = useStore('productDetail')
  const [productsStore] = useStore('productList')
  const [cartStore, cartDispatch] = useStore('cart')
  const { id } = useParams()

  let product = productsStore.products.find(product => id === product.id)
  let size
  let quantity

  if (editMode) {
    const productInCart = cartStore.products.find(product => id === product.id)

    if (productInCart) {
      size = productInCart.size
      quantity = productInCart.quantity
    }
  } else {
    size = store.size
    quantity = store.quantity
  }

  useEffect(() => {
    dispatch('FETCH', {
      id,
    })
  }, [dispatch, id, product])

  if (!product) {
    return false
  }

  if (redirect) {
    return <Redirect to="/cart" />
  }

  return (
    <div className={styles.container}>
      <figure className={styles.image}>
        <img src={product.image.src} alt={product.displayName} />
      </figure>
      <div className={styles.data}>
        <div className={styles.info}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.name}>{product.displayName}</h1>
        </div>
        <div className={styles.chooser}>
          <div className={styles.colors}>
            <ColorSelector
              onChange={color =>
                dispatch('SET', {
                  color,
                })
              }
              colors={product.colors}
              name={product.color}
              current={product.id}
            />
          </div>
          <div className={styles.sizes}>
            <Select
              label="Select Size"
              value={size && size.displaySize}
              list={{
                label: 'US men sizes',
                options: product.sizes,
              }}
              onChange={({ id, value }) =>
                dispatch('SET', {
                  size: {
                    id,
                    displaySize: value,
                  },
                })
              }
            />
          </div>
          <div className={styles.quantity}>
            <Select
              type="small"
              value={quantity}
              range={[1, 15]}
              onChange={({ value: quantity }) => dispatch('SET', { quantity })}
            />
          </div>
          <Button
            label={editMode ? 'Update Cart' : 'Add to bag'}
            disabled={!size}
            onClick={() => {
              cartDispatch(editMode ? 'UPDATE' : 'ADD', {
                id: product.id,
                quantity,
                size,
              })

              setRedirect(true)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
