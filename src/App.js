import React from 'react'

import Store from './utils/store'

import { ReactComponent as Icons } from './assets/icons.svg'

import Router from './components/router'

Store.init()

function App() {
  return (
    <>
      <Router />
      <Icons />
    </>
  )
}

export default App
