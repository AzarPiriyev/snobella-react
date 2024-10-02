import React from 'react'
import MainContainer from '../../components/common/mainContainer'
import Shopping from '../../components/basket/shoppingBag'
import Cart from '../../components/basket/cart'
import Total from '../../components/basket/total'


const BasketPage = () => {
  return (
    <MainContainer>
        <Shopping/>
        <div className='flex justify-between'>
        <Cart/>
        <Total/>
        </div>
    </MainContainer>
  )
}

export default BasketPage