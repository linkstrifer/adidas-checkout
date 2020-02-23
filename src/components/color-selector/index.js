import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import styles from './styles.module.scss'

function ColorSwatch({ color, selected, onSelect }) {
  return (
    <Link
      to={`/product/${color.id}`}
      type="button"
      className={classnames(styles.swatch, { [styles.selected]: selected })}
    >
      <img src={color.image} alt={color.name} />
    </Link>
  )
}

function ColorSelector({ current, colors, name, onChange }) {
  const orderedColors =
    colors &&
    colors.sort(
      (a, b) => a.id.replace(/[a-zA-Z]/g, '') - b.id.replace(/[a-zA-Z]/g, '')
    )

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Available Colors</h5>
      <span className={styles.selected}>{`${name}`}</span>
      <ul className={styles.list}>
        {colors &&
          orderedColors.map(color => (
            <ColorSwatch
              onSelect={onChange}
              key={color.id}
              color={color}
              selected={color.id === current}
            />
          ))}
      </ul>
    </div>
  )
}

export default ColorSelector
