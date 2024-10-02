import React from 'react'
import MainContainer from '../../common/mainContainer'

const Shoulder = () => {
  return (

        <div className='mb-[30px]'>
            <div className='flex gap-[10px] mb-[6px]'>
                <p className='text-[14px] font-normal text-[#1D1D1D]'>Home</p>
                <img src="/src/assets/icons/right.svg" alt="right" className='mt-[2px]' />
                <p className='text-[14px] font-normal text-[#1D1D1D] '>Shoulder Bags</p>
            </div>
            <div className=''>
                <h3 className='text-[40px] font-medium text-[#212121]'>Shoulder bags</h3>               
            </div>
            <div className='flex justify-end'>
            <button className='flex gap-[10px] px-[19px] py-[6px] border border-[#D0D0D0] rounded-[8px] h-[40px]'>
                    <p className='text-[16px] font-normal text-[#212121E5]'>Featured</p>
                    <img src="/src/assets/icons/up.svg" alt="up" className='mt-[8px]' />
                </button>
                </div>
        </div>
 
  )
}

export default Shoulder