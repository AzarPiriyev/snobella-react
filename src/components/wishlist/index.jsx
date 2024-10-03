import React, { useEffect, useState } from 'react';
import { useStore } from '../../store';
import { getProductsById } from '../../../api/service';


const Wishlist = () => {
    const { customFav } = useStore();
    const [favProducts, setFavProducts] = useState([]);

    const fetchFavoriteProducts = async () => {
        const products = await Promise.all(
            customFav.map(async (id) => {
                const productData = await getProductsById(id);
                return productData;
            })
        );
        setFavProducts(products);
    };

    useEffect(() => {
        if (customFav.length > 0) {
            fetchFavoriteProducts();
        }
    }, [customFav]);

    return (
        <div className='flex flex-col items-center mb-[100px]'>
            {favProducts.length > 0 ? (
                favProducts.map(({ id, title, price, image }) => (
                    <div key={id} className='flex gap-[24px] w-[744px] py-[17px] px-[16px] border rounded-[8px] border-[#E4E4E4] mb-[24px]'>
                        <div className='pt-[23px] pr-[14] pb-[19px] bg-[#F9F9F9] border rounded-[8px]'>
                            <img src={image} alt={title} className='w-[124px] h-[137px]' />
                        </div>
                        <div>
                            <h3 className='text-[16px] font-medium text-[#212121] mb-[12px]'>{title}</h3>
                            <p className='text-[18px] font-medium text-[#212121]'>US ${price}</p>
                            <button className='border py-[10px] px-[24px] rounded-[8px] border-[#212121] text-[#212121]'>
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default Wishlist;
