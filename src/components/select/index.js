import React, { useState } from 'react'

import classnames from 'classnames'

import styles from './styles.module.scss'
import Icon from '../icon'

function Results({ range, list, onClick }) {
  const type = range ? 'range' : 'list'
  let options = []

  switch (type) {
    case 'range': {
      const [min, max] = range
      options = [...new Array(max - min + 1)].map((current, index) => ({
        value: min + index,
      }))
      break
    }
    case 'list': {
      options = list.options
      break
    }
    default:
      break
  }

  return (
    <div className={styles.results}>
      {options.map(option => (
        <button
          onClick={() => onClick(option)}
          key={`option-${type === 'range' ? option.value : option.id}`}
          className={styles.result}
        >
          {option.value}
        </button>
      ))}
    </div>
  )
}

function Select({ type, label, value, range, list, onChange = () => {} }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={classnames(styles.container, {
        [styles[type]]: type !== undefined,
        [styles.open]: open,
      })}
    >
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className={styles.select}
      >
        <span className={styles.label}>{value || label}</span>
        <Icon className={styles.icon} name="dropdown" />
      </button>
      {open && (
        <Results
          onClick={value => {
            setOpen(false)
            onChange(value)
          }}
          range={range}
          list={list}
        />
      )}
    </div>
  )
}

export default Select
