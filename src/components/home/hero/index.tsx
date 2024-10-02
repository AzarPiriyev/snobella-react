import React from 'react'
import MainContainer from '../../common/mainContainer'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='bg-[#FFE2E0] py-[24px]'>
        <MainContainer>
            <div className='flex justify-between'>
                <div className='mt-[75px]'>
                    <p className='text-[24px] font-medium text-[#DF4244]'>30% off</p>
                    <h1 className='text-[40px] font-bold text-[#212121] mb-[8px]'>Handbag products</h1>
                    <p className='text-[16px] font-normal text-[#212121BF] w-[403px] mb-[48px]'>It is a long established fact that a reader will be distracted by the readable content expound the actual teachings of the great explorer  </p>
                    <Link to={'/productlist'}><button className='py-[12px] px-[56px] border rounded-[8px] bg-[#206363] text-white text-[16px] font-medium'>Shop now</button></Link>
                </div>
                <div>
                    <img src="/src/assets/images/bags.svg" alt="bags" />
                </div>
            </div>
        </MainContainer>
    </div>
  )
}

export default Hero