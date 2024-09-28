import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} =  useParams();
  const {products , currency, addToCart}  = useContext(ShopContext);
  const [productData, setproductData] = useState(false);
  const [image, setimage] = useState('');
  const [size, setsize] = useState('')
  

const fetchProductData = async () =>{

   products.map((item) => {
    if(item._id === productId){
      setproductData(item)
      setimage(item.image[0])
      return null;
    }
   })
}

useEffect(()=>{
fetchProductData();
},[productId]);

  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* --------Product data -------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
           {/*------------- Product images ------- */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:justify-normal sm:w-[18.7%] w-[full]">
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setimage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
            </div>
            <div className="w-full sm:w-[81%]">
              <img className='w-full h-auto' src={image} alt="" />
            </div>
          </div>
          {/* ------Product info  ------- */}
          <div className="flex-1">
            <h1 className='font-medium mt-1 text-xl'>{productData.name}</h1>
            <div className="flex w-5 items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="" />
              <img src={assets.star_icon} alt="" className="" />
              <img src={assets.star_icon} alt="" className="" />
              <img src={assets.star_icon} alt="" className="" />
              <img src={assets.star_dull_icon} alt="" className="" />
              <p className='pl-2 '>{122}</p>
            </div>
            <p className='mt-2 text-2xl font-medium'>{currency}{productData.price}</p>
            <p className="mt-2 text-gray-500 md:w-4/5">{productData.description}</p>
            <div className="flex flex-col gap-4 my-4">
              <p>Select Size:</p>
              <div className="flex gap-2">
                {productData.sizes.map((item,index)=>(
                  <button onClick={() => setsize(item)} className={`border py-2 px-4 rounded border-[1.5px] bg-gray-100
                   ${item == size ? "bg-gray-800 text-white border-blue-400 " : ""}`} key={index}>{item}
                   </button> ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
           <hr className='mt-8 sm:w-4/5' />
           <div className='text-sm text-gray-500 mt-5 flex-col gap-1'>
                     <p>100% Original product.</p>
                     <p>Cash on delivery is available the product</p>
                     <p>Easy return and exchange policy within 7 days.</p>
           </div>
          </div>
      </div>
      {/* --------------Description and review section------------- */}
      <div className="mt-20">
        <div className="flex gap-4">
          <p className="border px-5 py-3 text-sm"> Description</p>
          <p className="border px-5 py-3 text-sm"> Reviews{122}</p>
        </div>
        <div className="flex flex-col gap-4 border pc-6 py-6 text-sm text-gray-500">
         <p> An e-commerce platform offers a seamless shopping experience with a wide selection of products across multiple categories, including fashion, electronics, home essentials, and more. Designed for both convenience and quality, we provide fast shipping, secure payment options, and excellent customer service to ensure customer satisfaction. </p>
         <p> E-commerce platform is optimized for both mobile and desktop, giving you the flexibility to shop from anywhere. Whether you're looking for daily necessities or luxury items, we strive to meet all your shopping needs in one place.</p>
        </div>
      </div>
      {/* --------  display related products ------ */}
      <RelatedProducts category={productData.category}  subcategory={productData.subcategory} />
    </div>
  ): <div className="opacity-0">

  </div>
}

export default Product
