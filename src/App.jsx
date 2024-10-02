import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/home';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import ProductList from './pages/productList';
import ProductPage from './pages/productPage';
import BasketPage from './pages/basketPage';



function App() {
 

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/productlist" element={<ProductList />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/basket" element={<BasketPage />} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
