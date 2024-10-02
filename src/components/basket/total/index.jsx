import React from 'react'

const Total = () => {
  return (
    <div className='mb-[100px]'>
      <div className='py-[32px] px-[24px] w-[360px] border rounded-[8px] border-[#F9F9F9] bg-[#F9F9F9] mb-[23px]'>
        <div className='flex justify-between mb-[12px]'>
            <p className='text-[16px] font-normal text-[#212121]'>Your subtotal</p>
            <p className='text-[16px] font-normal text-[#212121]'>US $20.00</p>
        </div>

        <div className='flex justify-between mb-[20px]'>
            <p className='text-[16px] font-normal text-[#212121]'>Shipping changes</p>
            <p className='text-[16px] font-normal text-[#212121]'>Free</p>
        </div>

        <div className='flex justify-between mb-[24px]'>
            <p className='text-[18px] font-medium text-[#212121]'>Total</p>
            <p className='text-[18px] font-medium text-[#212121]'>US $20.00</p>
        </div>

        <hr className='mb-[22px]' />

        <div className='flex'>
            <input type="text" placeholder='Discount prome code' className='py-[16px] pl-[15px] pr-[43px] border border-[#DBDBDB] text-[14px] font-normal text-[#888888] rounded-l-[8px]'/>
            <button className='text-[16px] font-medium py-[10px] px-[28px] border rounded-r-[8px] border-[#FF695E] bg-[#FF695E] text-white'>Apply</button>
        </div>
      </div>
      
      <div className='grid grif-cols-1'>
      <button className='text-[16px] font-medium py-[13px] px-[134px] border rounded-[8px] border-[#DF4244] bg-[#DF4244] text-white mb-[16px]'>Confirm cart</button>
      <button className='text-[16px] font-medium py-[13px] px-[129px] border rounded-[8px] border-[#212121]  text-[#212121]'>Cash payment</button>
      </div>
    </div>
  )
}

export default Total
