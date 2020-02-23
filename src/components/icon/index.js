import React from 'react'

import classnames from 'classnames'

import styles from './styles.module.scss'

function Icon({ name, className }) {
  return (
    <svg className={classnames(styles.icon, className)}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

export default Icon
