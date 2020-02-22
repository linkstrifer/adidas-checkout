import React, { useState } from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

const colors = ['black', 'marine', 'red']

function ColorSwatch({ selected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      type="button"
      className={classnames(styles.swatch, { [styles.selected]: selected })}
    >
      <img src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/75916ebef5434e608d87a9af0013fdec_9366/five-ten-freerider-pro-mountain-bike-shoes.jpg" />
    </button>
  )
}

function ColorSelector() {
  const [selected, setSelected] = useState(1)

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Available Colors</h5>
      <span className={styles.selected}>{`${selected}`}</span>
      <ul className={styles.list}>
        {colors.map((value, index) => (
          <ColorSwatch
            onSelect={() => setSelected(index)}
            key={value}
            value={value}
            selected={index === selected}
          />
        ))}
      </ul>
    </div>
  )
}

export default ColorSelector
