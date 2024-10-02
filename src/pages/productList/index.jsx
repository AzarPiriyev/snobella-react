import React from 'react'
import Shoulder from '../../components/productList/shoulder'
import Filter from '../../components/productList/filter'
import MainContainer from '../../components/common/mainContainer'
import Products from '../../components/productList/products'

const ProductList = () => {
  return (
    <>
   <MainContainer>
    <Shoulder/>
    <div className='flex justify-between'>
    
    <Products/>
    </div>
    </MainContainer>
    </>
  )
}

export default ProductList