import React from 'react'
import header2 from '../../assets/header2.jpg'
import { Link } from 'react-router-dom'
//bg-[url("./assets/bg.jpeg")]
const Header = () => {
  return (
    <>
   
      <div className=' bg-red  flex justify-between for900:flex-col for900:justify-center  '>
      <img className='rounded-xl  h-80  mx-10 animate-[fadein_3s] mt-14 for901:hidden forbtw:mx-20 for800:h-56 ' src={header2} alt="" />
      <div className='ml-14  pb-14 '>
      <h1 className='text-5xl animate-[fadein_3s]  font-bold pt-16 '>One Ceramic at a Time: <br /> Discover the Art of <br />Ceramics </h1>
      <p className='font-semibold animate-[fadein_3s] font-mono pt-2'>Handmade ceramics to elevate your space with timeless elegance. <br /> Discover unique pieces that blend artistry and bringing charm <br /> to every corner of your home.</p>
      <Link to='/viewall'><button className='font-bold animate-[fadein_3s] border-solid border-2 rounded-3xl px-12 py-2 mt-4 bg-creamywhite border-creamywhite hover:bg-morepink hover:border-pink hover:text-white '>Shop Now</button></Link>
    
      </div>
     
      <img className='rounded-xl ml-auto h-80 mr-16 animate-[fadein_3s] mt-14 for900:hidden  ' src={header2} alt="" />
     
       
     
      
    </div>
    </>
  
  )
}

export default Header
