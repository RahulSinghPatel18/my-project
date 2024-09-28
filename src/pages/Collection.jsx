import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {

  const { products, search , showsearch } = useContext(ShopContext);
  const [showFilter, setsetshowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortType, setsortType] = useState('relavent');

  
  const toggleCategory =( e)=>{
    if(category.includes(e.target.value)){
     setCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
     setCategory(prev => [...prev, e.target.value]);
    }
 }

 const toggleSubCategory =( e)=>{
  if(subCategory.includes(e.target.value)){
   setSubCategory(prev => prev.filter(item => item !== e.target.value))
  }else{
   setSubCategory(prev => [...prev, e.target.value]);
  }
}


const applyFilter = ()=>{
  let productsCopy = products.slice();
if(showsearch && search){
  productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
}

  if(category.length > 0){
    productsCopy = productsCopy.filter(item => category.includes(item.category));
  }
  if(subCategory.length > 0){
    productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
  }
  setFilteredProducts(productsCopy);
}

// sort product low-high 
const sortProduct =()=>{
 let fpCopy = filteredProducts.slice();

 switch(sortType){
  case 'low-high':
  setFilteredProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
  break;

  case 'high-low':
  setFilteredProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
  break;

default:
  applyFilter();
  break;

 }
}


useEffect(()=>{
applyFilter();
},[category, subCategory, search,showsearch]);

useEffect(()=>{
   sortProduct();
},[sortType]);

useEffect(()=>{
  console.log(subCategory)
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
              <select onChange={(e)=>setsortType(e.target.value)} className="border-2 border-gray-300 text-sm  px-2">
                <option value="relavent" className="">Sort by: Relavent</option>
                <option value="low-high" className="">Sort by: low-high</option>
                <option value="high-low" className="">Sort by: high-low</option>
              </select>
            </div>
            {/* Map product */}
           <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
           {
              filteredProducts.map((item,index)=>(
           <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
           }

           </div>
           </div>
           
    </div>
  )
}

export default Collection

