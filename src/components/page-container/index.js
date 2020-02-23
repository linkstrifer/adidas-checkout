import React from 'react'

import styles from './styles.module.scss'

import Header from '../header'

function PageContainer({ children, type }) {
  return (
    <>
      <Header />
      <main className={styles[type || 'container']}>{children}</main>
    </>
  )
}

export default PageContainer
