import React, { useEffect, useState } from 'react';
import MainContainer from '../mainContainer';
import { getFeatured } from '../../../../api/service';
import { useStore } from '../../../store';

const Featured = () => {
    const { customFav, setFields } = useStore();
    const [data, setData] = useState([]);

    const handleAddToFav = (id) => {
        const foundProd = customFav.includes(id);
        
        if (foundProd) {
            // Remove from favorites
            const newFav = customFav.filter((elem) => elem !== id);
            setFields({ customFav: newFav });
        } else {
            // Add to favorites
            setFields({ customFav: [...customFav, id] });
        }
    };

    const fetchData = async () => {
        try {
            const featured = await getFeatured();
            setData(featured);
        } catch (error) {
            console.error("Error fetching featured products:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <MainContainer>
            <div className='mb-[96px]'>
                <div className='flex justify-between mb-[43px]'>
                    <p className='text-[32px] font-medium'>Featured Products</p>
                    <div className='flex gap-[15px] mt-[10px]'>
                        <p className='text-[16px] font-normal'>View all products</p>
                        <img src="/src/assets/icons/right.svg" alt="right" className='h-[10px] w-[10px] mt-[8px]' />
                    </div>
                </div>
                <div className='flex justify-between'>
                    {data.map((item) => (
                        <div key={item.id} className='pt-[11px] pb-[28px] px-[24px] bg-[#F9F9F9]'>
                            <div className='flex gap-[23px] pl-[47px]'>
                                <img src={item.image} alt={item.name} className='h-[234px] w-[234px]' />
                                <img 
                                    src="/src/assets/icons/heart.svg" 
                                    alt="heart" 
                                    className={`mt-[-200px] cursor-pointer ${customFav.includes(item.id) ? 'text-red-500' : 'text-gray-500'}`} 
                                    onClick={() => handleAddToFav(item.id)} 
                                />
                            </div>
                            <div>
                                <img src="/src/assets/icons/stars.svg" alt="stars" className='mb-[16px]' />
                                <p className='text-[16px] font-normal mb-[16px] w-[302px]'>{item.description}</p>
                                <p className='text-[#F75145] text-[20px] font-bold mb-[28px]'>{item.price}</p>
                                <button className='border py-[10px] px-[108px] rounded-[8px] border-[#212121] text-[#212121]'>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainContainer>
    );
};

export default Featured;
