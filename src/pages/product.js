import React from 'react'

import PageContainer from '../components/page-container/index'
import ProductDetail from '../components/product-detail/index'

function ProductPage({ editMode }) {
  return (
    <>
      <PageContainer type="full-bleed">
        <ProductDetail editMode={editMode} />
      </PageContainer>
    </>
  )
}

export default ProductPage
