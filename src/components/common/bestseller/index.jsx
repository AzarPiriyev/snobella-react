import React, { useEffect, useState } from 'react'
import MainContainer from '../mainContainer'
import { getBestseller } from '../../../../api/service'

const Bestseller = () => {
    const [data, setData] = useState([]);

  const fetchData = async () => {
    const bestseller = await getBestseller();
    setData(bestseller)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <MainContainer>
        <div className='mb-[96px]'>
            <div className='flex justify-between mb-[43px]'>
                <p className='text-[32px] font-medium'>Bestseller</p>
                <div className='flex gap-[15px] mt-[10px]'>
                    <p className='text-[16px] font-normal'>View all products</p>
                    <img src="/src/assets/icons/right.svg" alt="right" className='h-[10px] w-[10px] mt-[8px]'/>
                </div>
            </div>
        <div className='flex justify-between'>
        {data.map((item) => (
            <div key={item.id} className='pt-[11px] pb-[28px] px-[24px] bg-[#F9F9F9]'>
                <div className='flex gap-[23px] pl-[47px]'>
                    <img src={item.image} alt={item.name} className='h-[234px] w-[234px]'/>
                    <img src="/src/assets/icons/heart.svg" alt="heart" className='mt-[-200px]'/>
                </div>
                <div>
                    <img src="/src/assets/icons/stars.svg" alt="stars" className='mb-[16px]' />
                    <p className='text-[16px] font-normal mb-[16px] w-[302px]'>{item.description} </p>
                    <p className='text-[#F75145] text-[20px] font-bold mb-[28px]'>{item.price}</p>
                    <button className='border py-[10px] px-[108px] rounded-[8px] border-[#212121] text-[#212121]'>Add to card</button>
                </div>
            </div>
 ))}
        </div>
        </div>
    </MainContainer>
  )
}

export default Bestseller