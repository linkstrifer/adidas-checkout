import React from 'react'

import styles from './styles.module.scss'

function Button({ label }) {
  return (
    <button className={styles.button} type="button">
      <span className={styles.label}>{label}</span>
      <span>icon</span>
    </button>
  )
}

export default Button
