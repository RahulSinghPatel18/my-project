import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CratTotel from '../components/CratTotel'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setmethod] = useState('cod');
  const {navigate} = useContext(ShopContext);


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* ---------- -left side ------------ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className="text-xl sm:text-2xl my-3 ">
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Zipcode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Phone' />
          
        </div>
      </div>
      
      {/* ----------- right side --------- */}
      <div className="mt-8 ">
          <div className="mt-12 min-w-80">
            <CratTotel/>
          </div>
          <div className="mt-12">
            <Title text1={"Payment"} text2={"Method"} />
            {/* ----------- payment method selection-------- */}
            <div className="flex gap-3 flex-col lg:flex-row">
              <div onClick={()=>setmethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500':''}`}></p>
                  <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                
              </div>
              <div onClick={()=>setmethod('razorpay')}  className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500':''}`}></p>
                  <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
             </div>

               <div onClick={()=>setmethod('cod')}   className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500':''}`}></p>
                <p className='tet-gra-500 text-sm mx-4 font-medium '>CASH ON DELIVERY</p>
              </div>
              </div>
            </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate("/orders")} className="bg-black text-white py-2 px-14 tet-sm">PLACE ORDER</button>
          </div>
          </div>
        </div>
    
  )
}

export default PlaceOrder
