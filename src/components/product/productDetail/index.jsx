"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../../../api/service';
import { useStore } from '../../../store';

const ProductDetail = () => {
  const {productCount, customCart, setFields} = useStore();

  const addToCart = (id) => {
    console.log(id);

    const newCount = productCount +1;
    const newCart = [...customCart, id];
    setFields({
      customCart: newCart,
      productCount: newCount});
  };

 

  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProductDetails = async () => {
    try {
      const productDetails = await getProductsById(id); 
      setProduct(productDetails);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails(); 
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className=''>
     

     
        <div className='flex gap-[10px] mb-[32px] mt-[24px]'>
                <p className='text-[14px] font-normal text-[#1D1D1D]'>Home</p>
                <img src="/src/assets/icons/right.svg" alt="right" className='mt-[2px]' />
                <p className='text-[14px] font-normal text-[#1D1D1D] '>Shoulder Bags</p>
        </div>
       
        <div className='flex justify-between mb-[100px] '>
            <div className='flex gap-[8px] pt-[24px] pl-[56px] pb-[56px] pr-[24px] h-[473px] w-[456px]'>
            <img src={product.image} alt="bag" />
            <img src="/src/assets/icons/heart.svg" alt="heart" className=' h-[28px] w-[28px]' />
            </div>

            <div>
              <h1 className='text-[24px] font-medium text-[#212121] mb-[8px]'>{product.title}</h1>

              <div className='flex gap-[10px] mb-[24px]'>
                <img src="/src/assets/icons/stars.svg" alt="stars" />
                <p className='text-[14px] font-normal text-[#212121]'>5.0</p>
                <p className='text-[14px] font-normal text-[#212121]'>|</p>
                <p className='text-[14px] font-normal text-[#212121]'>2 reviews</p>
              </div>

              <div className=' mb-[32px]'>
               <p className='text-[30px] font-medium'>${product.price}</p>
              </div>

              <div className='flex gap-[10px] border border-black w-[70px] py-[6px] px-[6px] rounded-[3px] justify-center mb-[32px]'>
            <button className=''>-</button>
            <p className='text-[14px] font-normal mt-[2px] text-[#212121E5]'>1</p>
            <button>+</button>
            </div>

              <div className='flex justify-between mb-[40px]'>
                <div>
                  <p className='text-[16px] font-medium text-[#212121] mb-[16px]'>Size</p>
                  <div className='flex gap-[14px]'>
                    <button className='border border-[#212121] py-[7px] px-[23px] rounded-[8px] text-[16px] font-normal text-[#212121E5]'>{product.size}</button>                   
                  </div>
                </div>

                <div>
                <p className='text-[16px] font-medium text-[#212121] mb-[16px]'>Color</p>
                <div className='flex gap-[15px]'>
                <button className='border border-[#275240] h-[24px] w-[24px] rounded-[50%] bg-[#275240]'></button>
                <button className='border border-[#000000] h-[24px] w-[24px] rounded-[50%] bg-[#000000]'></button>
                <button className='border border-[#F75145] h-[24px] w-[24px] rounded-[50%] bg-[#F75145]'></button>
                <button className='border border-[#D6B73B] h-[24px] w-[24px] rounded-[50%] bg-[#D6B73B]'></button>
                <button className='border border-[#0085FF] h-[24px] w-[24px] rounded-[50%] bg-[#0085FF]'></button>
                </div>
                </div>
              </div>

              <div className='flex justify-between'>
                <button className='py-[12px] px-[74px] border border-[#DF4244] bg-[#DF4244] text-white text-[16px] font-medium rounded-[8px]' onClick={()=>{addToCart(product.id);}}>Add to card</button>
                <button className='py-[12px] px-[63px] border border-[#212121]  text-[#212121] text-[16px] font-medium rounded-[8px]'>Cash payment</button>
              </div>
            </div>
        </div>

        <div className='mb-[100px]'>
          <h3 className='text-[20px] font-medium text-[#212121] mb-[16px]'>Product Description</h3>
          <hr className='w-[96px] h-[3px] border-none bg-[#DF4244] mb-[40px]'/>
          <p className='text-[16px] font-normal text-[#212121BF]'>{product.description}</p>
        </div>
        
    </div>
  )
}

export default ProductDetail