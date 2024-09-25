import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setsetshowFilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);

  const toggleCategory =( e)=>{
     if(category.includes(e.target.value)){
      setsubcategory(prev => prev.filter(item => item !== e.target.value))
     }else{
      setcategory(prev => [...prev, e.target.value]);
     }
  }

  const toggleSubCategory = (e)=>{
    if(subcategory.includes(e.target.value)){
      setsubcategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setsubcategory(prev  => [e.target.value])
    }
  }
  
  const applyFilter = ()=>{
    let productsCopy = products.slice();
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    setfilterProducts(productsCopy);
  }



  useEffect(()=>{
     setfilterProducts(products);
  },[])

  useEffect(()=>{
applyFilter();
  },[category, subcategory])

  useEffect(()=>{
    console.log(subcategory)
  },[])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
         {/*  filter option */}
         <div className='min-w-60 '>
           <p onClick={()=>setsetshowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ""}`} src={assets.dropdown_icon} alt="" /></p>

           {/* category filter */}
           <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '': "hidden" } sm:block`}>
           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
           <div className="felx felx-col gap-2 text-sm font-light text-gray-700">
           <p className="flex gap-2">
              <input className='w-3 ' type="checkbox" value={"Men"} onChange={toggleCategory} /> Men
            </p>
            <p className="flex gap-2">
              <input className='w-3 ' type="checkbox" value={"Women"} onChange={toggleCategory} /> Women
            </p>
            <p className="flex gap-2">
              <input className='w-3 ' type="checkbox" value={"Kids"} onChange={toggleCategory} />Kids
            </p>
           </div>
           </div>

           {/* Subcategory filter */}
           <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '': "hidden" } sm:block`}>
           <p className='mb-3 text-sm font-medium'>Type</p>
           <div className="felx felx-col gap-2 text-sm font-light text-gray-700">
           <p className="flex gap-2">
              <input className='w-3 ' type="checkbox" value={"Topwear"} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className="flex gap-2">
              <input className='w-3 ' type="checkbox" value={"Bottomwear"}onChange={toggleSubCategory}  />Bottomwear
            </p>
            <p className="flex gap-2">
              <input className='w-3 ' type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} />Winterwear
            </p>
           </div>
           </div>
         </div>
         {/* ui for right side */}
           <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4">

              <Title text1={"ALL"} text2={"COLLECTION"} />
              {/* product sort */}
              <select className="border-2 border-gray-300 text-sm  px-2">
                <option value="relavent" className="">Sort by: Relavent</option>
                <option value="low-high" className="">Sort by: low-hig</option>
                <option value="hight-low" className="">Sort by: hight-low</option>
              </select>
            </div>
            {/* Map product */}
           <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {
              filterProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
              ))
            }
           </div>
           </div>
           
    </div>
  )
}

export default Collection
