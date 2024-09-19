import React from 'react'
import { Link } from 'react-router-dom'
import { designlist } from '../../assets/assets'
import Item from '../../Components/Items/Item'

const Order = () => {
  return (
    <>
 
    <div className='pb-8 pt-5' id='ceramics'>
    <h1 className=' text-3xl font-bold text-center'>Top picks</h1>
    <div className='flex justify-center for801:space-x-9 mt-10 for800:flex-col for800:items-center for800:space-y-5'>
      {
      designlist.map((item,index)=>{
          if(item.name==="Heart mug" || item.name==="Bow plate" || item.name==="Heart box")
            return  <Item key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
      })
    }
    
    </div>
    <div className='flex justify-center mt-4'>
    
    <Link to='/viewall'  className='font-bold border-solid border-2 rounded-3xl px-12 py-2 mt-4 bg-red border-pink hover:text-white hover:bg-morepink hover:border-pink '>View All</Link>
   
    
    </div>
    
    </div>

   
    </>
  
  )
}

export default Order
