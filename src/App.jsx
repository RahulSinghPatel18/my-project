import React from 'react'
import Home from "./pages/Home"
import { Routes,Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Contact from "./pages/Contact"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/collection' element={<Collection/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/product/:productID ' element={<Product />} />
                 <Route path='/cart ' element={< Cart/>} />
                 <Route path='/login ' element={< Login/>} />
                 <Route path='/placeorder ' element={<PlaceOrder />} />
                 <Route path='/orders ' element={< Orders/>} />
                
            </Routes>
            <Footer/>
      </div>
    </>
  )
}

export default App
