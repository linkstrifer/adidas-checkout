import React from 'react'

import styles from './styles.module.scss'

import Header from '../header'

function PageContainer({ children, type }) {
  return (
    <>
      <Header />
      <div className={styles[type || 'container']}>{children}</div>
    </>
  )
}

export default PageContainer
