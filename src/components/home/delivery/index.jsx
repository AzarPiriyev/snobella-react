import React from 'react'
import MainContainer from '../../common/mainContainer'

const Delivery = () => {
  return (
    <div className='bg-[#F7F7F7]'>
    <MainContainer>
        <div className='py-[48px] flex justify-between'>
            <div className='flex gap-[8px]'>
                <img src="/src/assets/icons/transport.svg" alt="transport" />
                <p className='text-[16px] font-medium py-[13px]'>Guaranteed delivery</p>
            </div>

            <div className='flex gap-[8px]'>
                <img src="/src/assets/icons/back.svg" alt="transport" />
                <p className='text-[16px] font-medium py-[13px]'>Do not come back</p>
            </div>

            <div className='flex gap-[8px]'>
                <img src="/src/assets/icons/lock.svg" alt="transport" />
                <p className='text-[16px] font-medium py-[13px]'>Safe and secure shopping</p>
            </div>

            <div className='flex gap-[8px]'>
                <img src="/src/assets/icons/card.svg" alt="transport" />
                <p className='text-[16px] font-medium py-[13px]'>Payment at the door or online</p>
            </div>
        </div>
    </MainContainer>
    </div>
  )
}

export default Delivery