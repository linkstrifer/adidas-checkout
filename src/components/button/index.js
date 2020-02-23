import React from 'react'

import styles from './styles.module.scss'

import Icon from '../icon'

function Button({ label, disabled, onClick }) {
  return (
    <button
      onClick={() => onClick()}
      className={styles.button}
      type="button"
      disabled={disabled}
    >
      <span className={styles.label}>{label}</span>
      <Icon name="arrow-right-long" />
    </button>
  )
}

export default Button
