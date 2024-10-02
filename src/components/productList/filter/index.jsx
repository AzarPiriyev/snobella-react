import React from 'react';

const Filter = ({ onFilterChange }) => {
    const handleCategoryChange = (category) => {
        onFilterChange('category', category);
    };

    const handleMaterialChange = (material) => {
        onFilterChange('material', material);
    };

    const handleSizeChange = (size) => {
        onFilterChange('size', size);
    };

    const handleColorChange = (color) => {
        onFilterChange('color', color);
    };

    return (
        <div>
            <div className='border border-[#D0D0D0] rounded-[8px] py-[16px] px-[40px] w-[324px] mb-[24px]'>
                <p className='text-[20px] font-medium text-[#212121] cursor-pointer mb-[24px]'>Categories</p>
                <ul className='text-[16px] font-normal text-[#212121E5] flex flex-col gap-[16px] mb-[24px]'>
                    <li className='cursor-pointer' onClick={() => handleCategoryChange('backpacks')}>Backpacks</li>
                    <li className='cursor-pointer' onClick={() => handleCategoryChange('handbags')}>Handbags</li>
                    <li className='cursor-pointer' onClick={() => handleCategoryChange('belt bags')}>Belt Bags</li>
                    <li className='cursor-pointer' onClick={() => handleCategoryChange('Shoulder bags')}>Shoulder Bags</li>
                    <li className='cursor-pointer' onClick={() => handleCategoryChange('Evening bags')}>Evening Bags</li>
                </ul>
            </div>
            <div className='border border-[#D0D0D0] rounded-[8px] py-[16px] px-[40px] w-[324px] mb-[24px]'>
                <p className='text-[20px] font-medium text-[#212121] cursor-pointer mb-[24px]'>Material</p>
                <ul className='text-[16px] font-normal text-[#212121E5] flex flex-col gap-[16px] mb-[24px]'>
                    <li className='cursor-pointer' onClick={() => handleMaterialChange('cloth')}>Cloth</li>
                    <li className='cursor-pointer' onClick={() => handleMaterialChange('cotton')}>Cotton</li>
                    <li className='cursor-pointer' onClick={() => handleMaterialChange('glitter')}>Glitter</li>
                </ul>
            </div>
            <div className='border border-[#D0D0D0] rounded-[8px] py-[16px] px-[40px] w-[324px] mb-[24px]'>
                <p className='text-[20px] font-medium text-[#212121] cursor-pointer mb-[24px]'>Size</p>
                <div className='flex gap-[14px] mb-[24px]'>
                    <button className='border border-[#C8C8C8] py-[7px] px-[22px] rounded-[8px]' onClick={() => handleSizeChange('XS')}>XS</button>
                    <button className='border border-[#C8C8C8] py-[7px] px-[27px] rounded-[8px]' onClick={() => handleSizeChange('S')}>S</button>
                    <button className='border border-[#C8C8C8] py-[7px] px-[25px] rounded-[8px]' onClick={() => handleSizeChange('M')}>M</button>
                </div>
            </div>
            <div className='border border-[#D0D0D0] rounded-[8px] py-[16px] px-[40px] w-[324px] mb-[24px]'>
                <p className='text-[20px] font-medium text-[#212121] cursor-pointer mb-[24px]'>Color</p>
                <div className='flex gap-[14px] mb-[24px]'>
                    <button className='border border-[#275240] h-[24px] w-[24px] rounded-[50%] bg-[#275240]' onClick={() => handleColorChange('green')}></button>
                    <button className='border border-[#000000] h-[24px] w-[24px] rounded-[50%] bg-[#000000]' onClick={() => handleColorChange('black')}></button>
                    <button className='border border-[#F75145] h-[24px] w-[24px] rounded-[50%] bg-[#F75145]' onClick={() => handleColorChange('red')}></button>
                    <button className='border border-[#D6B73B] h-[24px] w-[24px] rounded-[50%] bg-[#D6B73B]' onClick={() => handleColorChange('yellow')}></button>
                    <button className='border border-[#0085FF] h-[24px] w-[24px] rounded-[50%] bg-[#0085FF]' onClick={() => handleColorChange('blue')}></button>
                </div>
            </div>
            
        </div>
    );
};
export default Filter