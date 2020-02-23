import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ProductsPage from '../../pages/products'
import ProductPage from '../../pages/product'
import CartPage from '../../pages/cart'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/product/:id/edit">
          <ProductPage editMode={true} />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Route path="/:category?">
          <ProductsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
