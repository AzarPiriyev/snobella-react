import React from 'react'
import MainContainer from '../../common/mainContainer'
import { Link } from 'react-router-dom'

const Footer = () => {
    const shopElements =[
        {title: "Shoulder Bag", href: "/"},
        {title: "Backpack", href: "/"},
        {title: "Tote Bag", href: "/"},
        {title: "Hand Bag", href: "/"},
        {title: "Evening bags", href: "/"},
        {title: "Purse", href: "/"},
      ]

      const compElements =[
        {title: "About us", href: "/"},
        {title: "Contact", href: "/"},
        {title: "Terms of Use", href: "/"},
        {title: "Customer service", href: "/"},
      ]

      const helpElements =[
        {title: "FAQ", href: "/"},
        {title: "Delivery", href: "/"},
        {title: "Cancellation ofthe order", href: "/"},
        {title: "Don't go back", href: "/"},
      ]


  return (
    <div className=''>
    
        <div className='py-[35px] pb-[80px] bg-[#F7F7F9]'>
        <MainContainer>
            <div className='flex justify-between mb-[32px]'>
                <p className='text-[40px] font-bold relative'>Snobella</p>
                <div className='flex'>
                    <input type="text" placeholder='Search all product' className='py-[14px] text-[16px] font-normal border border-[#9E9E9E59] text-[#AAAAAA] pl-[16px] pr-[341px] rounded-[8px]' />
                    <img src="/src/assets/icons/search2.svg" alt="search" className='w-[24px] h-[24px] absolute ml-[500px] mt-[18px]' />
                </div>
            </div>
            </MainContainer>
            <hr className='border-1' />
            <MainContainer>
            <div className='pt-[56px] flex justify-between'>
                <div>
                    <p className='text-[16px] font-normal text-[#212121BF] mb-[40px] w-[326px]'>The wise man therefore always holds selectionThe wise man therefore always rejects pleasures to secure other greater</p>
                    <div className='flex gap-[10px] mb-[24px]'>
                        <img src="/src/assets/icons/mail.svg" alt="mail" />
                        <p className='text-[16px] font-normal text-[#212121BF]'>Snobella@gmail.com</p>
                    </div>
                    <div className='flex gap-[10px] mb-[48px]'>
                        <img src="/src/assets/icons/phone2.svg" alt="phone" />
                        <p className='text-[16px] font-normal text-[#212121BF]'>+748 383 23 14</p>
                    </div>
                        
                     <button className='flex gap-[8px] py-[10px] px-[16px] border border-[#171717] rounded-[8px]'>
                    <img src="/src/assets/icons/send.svg" alt="send"  className='mt-[2px]'/>
                    <p className='text-[16px] font-normal text-[#212121BF]' >Send message</p>
                     </button>
                </div>
            

            <div className='flex gap-[105px]'>
                <ul className='flex flex-col gap-y-5'>
                    <p className='text-[18px] font-medium text-[#212121] cursor-pointer'>Shop</p>
                    {shopElements.map((link, index) => (
            <li key={index} className=''>
                <a href={link.href}>{link.title}</a>
            </li>
        ))}
                </ul>

                <ul className='flex flex-col gap-y-5'>
                    <p className='text-[18px] font-medium text-[#212121] cursor-pointer'>Company</p>
                    {compElements.map((link, index) => (
            <li key={index}>
                <a href={link.href}>{link.title}</a>
            </li>
        ))}
                </ul>

                <ul className='flex flex-col gap-y-5'>
                    <p className='text-[18px] font-medium text-[#212121] cursor-pointer'>Help</p>
                    {helpElements.map((link, index) => (
            <li key={index}>
                <a href={link.href}>{link.title}</a>
            </li>
        ))}
                </ul>
            </div>
            </div>
            </MainContainer>
        </div>
       <MainContainer>
        <div className='py-[22px] flex justify-between'>
            <p className='text-[16px] font-normal text-[#212121BF]'>© 2020. All rights reserved.</p>
            <div className='flex gap-[32px]'>
                <img src="/src/assets/icons/instagram.svg" alt="instagram" className='cursor-pointer'/>
                <img src="/src/assets/icons/facebook.svg" alt="facebook" className='cursor-pointer'/>
                <img src="/src/assets/icons/whatsapp.svg" alt="whatsapp" className='cursor-pointer'/>
            </div>
        </div>
       </MainContainer>
    </div>
  )
}

export default Footer