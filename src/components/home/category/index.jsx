import React, { useEffect, useState } from 'react'
import MainContainer from '../../common/mainContainer'
import { getCategory } from '../../../../api/service'


const Category = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const category = await getCategory();
    setData(category)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <MainContainer>
      <div className='flex justify-between'>
      {data.map((item) => (
        <div key={item.id} className='mb-[146px] mt-[80px] flex '>
        <div className='bg-[#F5F5F5] pt-[24px] pl-[24px] w-[264px] h-[162px]'>
            <p className='text-[18px] font-medium relative'>{item.name}</p>
            <img src={item.image} alt={item.name} className='w=[163px] h-[157px]' />
        </div>
       </div>
      ))}
      </div>
    </MainContainer>
  )
}

export default Category