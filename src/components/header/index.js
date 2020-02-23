import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import HeaderCart from './cart'

const navOptions = [
  {
    options: ['Shoes', 'Clothing'],
  },
]

function SubNav(subNav, index) {
  const { options } = subNav

  return (
    <ul className={styles.subNav} key={`subNav-${index}`}>
      {options.map(label => (
        <li key={label} className={styles.navOption}>
          <Link to={`/${label.toLowerCase()}`}>{label}</Link>
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
      <Link to="/" className={styles.logoLink}>
        <Logo className={styles.logo} />
      </Link>
      <ul className={styles.nav}>{navOptions.map(SubNav)}</ul>
      <HeaderCart />
    </header>
  )
}

export default Header
