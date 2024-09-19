import React from 'react'
import rating_starts from '../../assets/rating_starts.png'
import { useContext } from 'react'
import { CeramicsContext } from '../../Context/CeramicsContext'

const Item = ({id,name,price,image}) => {
  const { cartItems,setCartItems,addToCart,removeFromCart}=useContext(CeramicsContext);

  return (
   
       
          <div className='border-solid border-2 border-grey rounded-lg p-8 w-80'>
            <div className='items-center'>
            <img className='h-72 pb-3  rounded-lg' src={image} alt="" />
        <div className='flex justify-between'>
        <p className='font-mono font-bold '>{name}</p>
        <img src={rating_starts} alt="" />
        </div>
         <p className='font-bold font-mono text-xl'>${price}.00</p>
         <div className='flex mt-5 justify-between font-bold border-2 border-solid rounded-full bg-red border-red'>
         <p className='ml-5  hover:text-white cursor-pointer' onClick={()=>removeFromCart(id)}>-</p>
         <p>{!cartItems[id]?"0":cartItems[id]}</p>
         <p className='mr-5 hover:text-white cursor-pointer' onClick={()=>addToCart(id)}>+</p>
         </div>
         
            </div>
        
          </div>
     
       
    
  )
}

export default Item
