import React, { useContext, useState } from 'react'
import {assets} from "../assets/assets"
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
const [visible, setvisible] = useState(false);
const { setshowsearch, getCartCount} = useContext(ShopContext);




  return (
 
<div className=' h-[4.5rem] sticky top-0 z-20 bg-white border-b-[1px] border-gray-400' >
<div id='logo' className='flex  items-center  justify-between py-5 font-medium '>
    <img  src={assets.logo}  className='w-36' alt="" />
    <ul className='hidden   sm:flex gap-5 text-sm text-gray-700 '>

    <NavLink to='/' className="flex flex-col items-center gap-1">
         <p>Home</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NavLink>
      <NavLink to='/collection' className="flex flex-col items-center gap-1">
         <p>COLLECTION</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NavLink>
      <NavLink to='/about' className="flex flex-col items-center gap-1">
         <p>ABOUT</p>
         <hr className='w-2/4 border-none h-[1.5px]  bg-gray-700 hidden' />
      </NavLink>
      <NavLink to='/contact' className="flex flex-col items-center gap-1">
         <p>CONTACT</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NavLink>
    </ul>
    

    <div className='flex items-center gap-6'>
<img onClick={()=>setshowsearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
  
  <div className='group relative'>
     <Link to='/login'><img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /></Link>

    <div  className='group-hover:block hidden  absolute dropdown-menu right-0 p-4'>
           <div className='flex flex-col gap-2 w-36  py-3 px-5 bg-slate-100 text-gray-500 rounded '  >
                 <p className='cursor-pointer hover:text-black'>My Profile</p>
                 <p className='cursor-pointer hover:text-black'>Orders</p>
                 <p className='cursor-pointer hover:text-black'>Logout</p>
           </div>
    </div>
  </div>
  <Link to='/cart' className='relative' >
     <img src={assets.cart_icon} className='w-5 min-5' alt="" />
     <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-lg text-[8px] ' > {getCartCount()}</p>
     </Link> 
     <img onClick={()=>setvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden md:' alt="" />
</div>
{/* Sidebar menu for small screens */}
<div className={`absolute top-0 right-0 h-[50rem] overflow-hidden bg-white transition-all  ${visible ? 'w-full' :'w-0' }`}>
    <div className='flex flex-col text-gray-600 '>
         <div onClick={()=>setvisible(false)} className='flex  items-center gap-4 p-5'>
             <img className='hd-4 cursor-pointer rotate-180' src={assets.dropdown_icon} alt="" />
             <p>Back</p>
         </div>
         <NavLink onClick={()=>setvisible(false)} className='py-4 pl-6 border text-center ' to="/">Home</NavLink>
         <NavLink onClick={()=>setvisible(false)} className='py-4 pl-6 border text-center' to="/Collection">COLLECTION</NavLink>
         <NavLink onClick={()=>setvisible(false)} className='py-4 pl-6 border text-center' to="/about">ABOUT</NavLink>
         <NavLink onClick={()=>setvisible(false)} className='py-4 pl-6 border text-center'  to="/login">LOGIN</NavLink>
    </div>
</div>
</div>
</div>
 
  )
}

export default Navbar
