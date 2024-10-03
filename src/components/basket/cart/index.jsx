import React, { useEffect, useState } from 'react';
import { useStore } from '../../../store';
import { getProductsById } from '../../../../api/service';
import Total from '../total'; // Ensure this is imported correctly

const Cart = () => {
  const { customCart } = useStore();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (customCart.length === 0) return; // Exit early if the cart is empty

      try {
        const fetchedProducts = await Promise.all(
          customCart.map(async (productId) => {
            const product = await getProductsById(productId);
            return { id: productId, ...product }; // Combine product ID with fetched details
          })
        );
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [customCart]);

  // Calculate total price
  const totalPrice = products.reduce((total, product) => total + product.price, 0).toFixed(2);

  return (
    <div className='mb-[100px] flex gap-[100px]'>
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
        <div>
          {products.map(({ id, title, price, size, color, image }) => (
            <div key={id} className='flex gap-[24px] w-[744px] py-[17px] px-[16px] border rounded-[8px] border-[#E4E4E4] mb-[24px]'>
              <div className='pt-[23px] pr-[14px] pb-[19px] bg-[#F9F9F9] border rounded-[8px]'>
                <img src={image} alt={title} className='w-[124px] h-[137px]' />
              </div>
              <div>
                <div className='flex gap-[105px] mb-[12px]'>
                  <h3 className='text-[16px] font-medium text-[#212121]'>{title}</h3>
                  <p className='text-[18px] font-medium text-[#212121]'>US ${price}</p>
                </div>
                <div className='flex gap-[23px] mb-[8px]'>
                  <p className='text-[14px] font-normal text-[#212121BF]'>Size: {size}</p>
                  <p className='text-[14px] font-normal text-[#212121BF]'>Color: {color}</p>
                </div>
                <p className='text-[14px] font-normal text-[#212121BF] mb-[8px]'>Delivery: 25-32 days</p>
                <div className='flex gap-[10px] border border-[#E4E4E4] w-[70px] py-[6px] px-[6px] rounded-[3px] justify-center mb-[8px]'>
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
          ))}
          </div>
          <div>
          <Total totalPrice={totalPrice} /> 
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
