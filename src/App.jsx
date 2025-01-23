import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import Cart from './components/Cart'
import { Routes,Route } from 'react-router-dom'
import ProductNotFound from './pages/ProductNotFound'
import Footer from './components/Footer'
import Payment from './pages/Payment'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };


  return (
    <>
      <Navbar onSearch={handleSearch}/>
      
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop searchQuery={searchQuery}/>}/>
          <Route path='/shop/:id' element={<ProductDetails/>}/>
          
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='payment' element={<Payment/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='*' element={<ProductNotFound/>}/>
        </Routes>

      </div>
      <Footer/>
    </>
  )
}

export default App
