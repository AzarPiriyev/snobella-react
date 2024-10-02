import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../api/service';
import Filter from '../filter';
import { Link } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        category: [],
        material: [],
        size: [],
        color: [],
    });

    const fetchData = async () => {
        try {
            const products = await getProducts();
            setData(products);
            setFilteredData(products);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (type, value) => {
        const newFilters = { ...filters };
        if (newFilters[type].includes(value)) {
            newFilters[type] = newFilters[type].filter(item => item !== value);
        } else {
            newFilters[type].push(value);
        }
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    const applyFilters = (currentFilters) => {
        let tempData = [...data];

        if (currentFilters.category.length > 0) {
            tempData = tempData.filter(item => currentFilters.category.includes(item.categories));
        }

        if (currentFilters.material.length > 0) {
            tempData = tempData.filter(item => currentFilters.material.includes(item.material));
        }

        if (currentFilters.size.length > 0) {
            tempData = tempData.filter(item => currentFilters.size.includes(item.size));
        }

        if (currentFilters.color.length > 0) {
            tempData = tempData.filter(item => currentFilters.color.includes(item.color));
        }

        setFilteredData(tempData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex">
            <Filter onFilterChange={handleFilterChange} />
            <div className='grid grid-cols-2 gap-[20px]'>
                {filteredData.map((item) => (
                   <Link to={`/product/${item.id}`} key={item.id}><div key={item.id} className='pt-[11px] pb-[28px] px-[24px] bg-[#F9F9F9]'>
                        <div className='flex gap-[23px] pl-[47px]'>
                            <img src={item.image} alt={item.title} className='h-[234px] w-[234px] mb-[15px]' />
                            <img src="/src/assets/icons/heart.svg" alt="heart" className='mt-[-200px]' />
                        </div>
                        <div>
                            <img src="/src/assets/icons/stars.svg" alt="stars" className='mb-[16px]' />
                            <p className='text-[16px] font-normal mb-[16px] w-[302px] h-[48px]'>{item.title}</p>
                            <p className='text-[#F75145] text-[20px] font-bold mb-[28px]'>${item.price}</p>
                            <button className='border py-[10px] px-[108px] rounded-[8px] border-[#212121] text-[#212121]'>Add to cart</button>
                        </div>
                    </div></Link>
                ))}
            </div>
        </div>
    );
};

export default Products;
