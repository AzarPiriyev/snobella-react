import React from 'react'
import MainContainer from '../../common/mainContainer'
import { Link } from 'react-router-dom'



const Header = () => {

  const navElements =[
    {title: "Evening bags", href: "/"},
    {title: "Shoulder bag", href: "/"},
    {title: "Backpack", href: "/"},
    {title: "Handbag", href: "/"},
    {title: "Postman bag", href: "/"},
    {title: "Belt bags", href: "/"},
  ]

  return (
  
   <div>
      
    <div className='bg-[#007878] py-[12px]  '>
    <MainContainer>
      <div className='flex justify-between'>
        <div className='flex gap-[12px] '>
            <img src='/src/assets/icons/phone.svg'/>
            <p className='text-white'>+748 383 23 14</p>
        </div>
        <div className='flex gap-[18px] text-white text-[14px] font-medium'>
          <p className='cursor-pointer'>Terms of Use</p>
          <p>|</p>
          <p className='cursor-pointer'>FAQ</p>
          <p>|</p>
          <p className='cursor-pointer'>Customer service</p>
        </div>
        </div>
        </MainContainer>
        </div>
        <MainContainer>
        <div className='flex justify-between pt-[28px]'>
          <Link to={'/'}><p className='text-[40px] font-bold relative'>Snobella</p></Link>
          <div className='flex'>
                    <input type="text" placeholder='Search all product' className='py-[14px] text-[16px] font-normal border border-[#9E9E9E59] text-[#AAAAAA] pl-[16px] pr-[341px] rounded-[8px]' />
                    <img src="/src/assets/icons/search2.svg" alt="search" className='w-[24px] h-[24px] absolute ml-[500px] mt-[17px] cursor-pointer ' />
                </div>
          <div className='flex gap-[26px] mt-[12px]'>
          <Link to={'/SigupPage'}> <div className='flex gap-[10px] cursor-pointer'>
              <img src="/src/assets/icons/sign.svg" alt="sign" className='w-[24px] h-[24px] '/>
              <p className='text-[14px] font-medium text-[#2E2E2E]'>Sign up</p>
            </div></Link>

            <Link to={'/WishlistPage'}><div className='flex gap-[10px] cursor-pointer'>
            <img src="/src/assets/icons/wishlist.svg" alt="wish" className='w-[24px] h-[24px] '/>
            <p className='text-[14px] font-medium text-[#2E2E2E]'>Wishlist</p>
            </div></Link>

            <Link to={'/Basket'}><div className='flex gap-[10px] cursor-pointer'>
            <img src="/src/assets/icons/basket.svg" alt="basket" className='w-[24px] h-[24px] '/>
            <p className='text-[14px] font-medium text-[#2E2E2E]'>Basket</p>
            </div></Link>
          </div>

        </div>

        <div className='pt-[31px] pb-[24px]'>
            <ul className='flex gap-[54px] text-[16px] font-normal text-[#273142]'>
            {navElements.map((link, index) => (
            <li key={index} className=''>
                <a href={link.href}>{link.title}</a>
            </li>
        ))}
            </ul>
          </div>
        </MainContainer>
    
    
    
   </div>
   
  )
}

export default Header