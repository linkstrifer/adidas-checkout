import React, { useState } from 'react'

import styles from './styles.module.scss'

function Results({ range, list }) {
  let options = []

  if (range) {
    const [min, max] = range
    options = [...new Array(max - min + 1)].map((current, index) => min + index)
  }

  if (list) {
    options = list.options
  }

  return (
    <div className={styles.results}>
      {options.map(value => (
        <button key={`option-${value}`} className={styles.result}>
          {value}
        </button>
      ))}
    </div>
  )
}

function Select({ label, defaultValue, range, list }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className={styles.container}
      >
        <span className={styles.label}>{label || defaultValue}</span>
        <span className={styles.icon}>icon</span>
      </button>
      {open && <Results range={range} list={list} />}
    </>
  )
}

export default Select
