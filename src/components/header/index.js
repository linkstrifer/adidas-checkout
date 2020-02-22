import React, { useEffect } from 'react'

import styles from './styles.module.scss'

import { ReactComponent as Logo } from '../../static/images/logo.svg'

const navOptions = [
  {
    options: ['Men', 'Women', 'Kid'],
  },
  {
    options: ['Sports', 'Brands'],
  },
  {
    options: ['Release Dates'],
  },
]

function SubNav(subNav, index) {
  const { options } = subNav

  return (
    <ul className={styles.subNav} key={`subNav-${index}`}>
      {options.map(label => (
        <li key={label} className={styles.navOption}>
          {label}
        </li>
      ))}
    </ul>
  )
}

function Header() {
  useEffect(() => {
    document.body.classList.add('with-header')
  }, [])

  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href="/">
        <Logo className={styles.logo} />
      </a>
      <ul className={styles.nav}>{navOptions.map(SubNav)}</ul>
      <div className={styles.search}>Search</div>
    </header>
  )
}

export default Header
