import React from 'react'
import donutmug from '../../assets/donutmug.png'
import Brand from '../Brand/Brand'
import cupicon from '../../assets/cupicon.png'
import boxicon from '../../assets/boxicon.png'
import plateicon from '../../assets/plateicon.png'



const Aboutus = () => {
  return (
   
    <div className='pb-10' id='aboutus'>
        <h1 className='font-bold text-center pt-8 text-3xl '>About Us</h1>
        <Brand/>
        <div className='flex flex-col'>
        <div className='flex '>
        <div>
          <img className='h-24  for801:ml-36 for800:ml-3 ' src={cupicon} alt="" />
        </div>
        <p className='mt-9 mr-14 for1048:w-96 '>We are passionate artisans dedicated to creating unique, handcrafted ceramic pieces that bring beauty <br /> and functionality into your home.</p>
        
      </div>
      <div className='flex'>
        <div>
          <img className='h-24 for801:ml-36 for800:ml-3 ' src={plateicon} alt="" />
        </div>
        <p className='mt-9 mr-14 for1048:w-96'>Our team combines traditional techniques with contemporary designs, resulting in a stunning collection of <br />pottery, tableware, and decorative items. </p>
        
      </div>
      <div className='flex'>
        <div>
          <img className='h-24 for801:ml-36 for800:ml-3 ' src={boxicon} alt="" />
        </div>
        <p className='mt-9 mr-14 for1048:w-96'>Whether you're looking for a special gift or a beautiful addition to your own space, we invite you to explore our <br /> diverse range of ceramics.</p>
        
      </div>
       
    </div>
        </div>
      
    
  )
}

export default Aboutus
