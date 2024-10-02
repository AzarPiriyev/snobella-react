import React from 'react'

const Cart = () => {
  return (
    <div className='mb-[100px]'>
    <div className='flex gap-[24px] w-[744px] py-[17px] px-[16px] border rounded-[8px] border-[#E4E4E4] mb-[24px]'>
      
        <div className='pt-[23px] pr-[14]  pb-[19px] bg-[#F9F9F9] border rounded-[8px]'>
            <img src="/src/assets/images/bag.svg" alt="bag" className='w-[124px] h-[137px]'/>
        </div>
      

      <div>
        <div className='flex gap-[115px]'>
        <h3 className='text-[16px] font-medium text-[#212121] mb-[12px]'>Hotel Magique  Love and Magique Tote Bag</h3>
        <p className='text-[18px] font-medium text-[#212121]'>US $20.00</p>
        </div>
        <div className='flex gap-[23px] mb-[8px]'>
            <p className='text-[14px] font-normal text-[#212121BF]'>Size: XS</p>
            <p className='text-[14px] font-normal text-[#212121BF]'>Color: Grey</p>
        </div>
        <p className='text-[14px] font-normal text-[#212121BF] mb-[8px]'>Delivery: 25-32 days</p>
        <p className='text-[14px] font-normal text-[#212121BF] mb-[8px]'>Quality</p>
        <div className='flex gap-[10px] border border-[#E4E4E4] w-[70px] py-[6px] px-[6px] rounded-[3px] justify-center'>
            <button className=''>-</button>
            <p className='text-[14px] font-normal text-[#212121E5]'>1</p>
            <button>+</button>
        </div>
        <div className='flex gap-[40px] justify-end'>
            <div className='flex gap-[8px] cursor-pointer'>
                <img src="/src/assets/icons/favorite.svg" alt="favorite" />
                <p className='text-[14px] font-medium text-[#212121BF]'>Favorite</p>
            </div>
            <div className='flex gap-[8px] cursor-pointer'>
            <img src="/src/assets/icons/remove.svg" alt="remove" />
            <p className='text-[14px] font-medium text-[#212121BF]'>Remove</p>
            </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Cart
