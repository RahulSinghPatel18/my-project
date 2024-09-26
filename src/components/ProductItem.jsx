import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, name ,image, price}) => {

    const {currency} = useContext(ShopContext);

  return (
   <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
    <div className='overflow-hidden  '>
        <img className='hover:scale-110 duration-300 transition ease-in-out' src={image[0]} alt="" />
    </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p className='text-sm font-medium'><span className='text-green-600'>{currency}</span>{price}</p>
   </Link>
  )
}

export default ProductItem
