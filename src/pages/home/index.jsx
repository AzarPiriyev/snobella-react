import React from 'react'
import { Route, Routes } from "react-router-dom";
import Hero from '../../components/home/hero';
import Delivery from '../../components/home/delivery';
import Category from '../../components/home/category';
import Featured from '../../components/common/featured';
import Bestseller from '../../components/common/bestseller';
import Discount from '../../components/common/discount';
import { getCategory } from '../../../api/service';


const HomePage = () => {
  
  return (
    <>
   <Hero/>
   <Delivery/>
   <Category />
   <Featured/>
   <Bestseller/>
   <Discount/>
   </>
  )
}

export default HomePage