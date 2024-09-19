import React from 'react'
import classesbg3 from '../../assets/classesbg3.jpeg'

const Classes = () => {
  return (
    
        <div id='Classes' className='bg-pink h-full text-black flex '>
             
             <img src={classesbg3} className='h-96 for1163:w-96  for700:hidden ' alt="" />
        <div  className=' mt-16 ml-10 bg-pink w-full for700:mt-8' >
             <h1 className='font-bold text-4xl'>Get Hands-On Experience</h1>  
             <hr className='mt-7 mb-7' />
             <p className=' mt-4 text-xs w-full'>Ceramics classes offer a hands-on, creative experience for  individuals interested  in working with clay. These classes typically  cover a variety of techniques, including wheel throwing, hand-building, and glazing. Participants learn to shape, fire, and  finish their own pottery creativity, develop fine motor skills </p>
             <br />
             <p className='text-xs w-full for1163:hidden '>Whether you're a beginner or looking to refine your skills, ceramics classes are a <br />great way to express yourself artistically while learning the rich traditions of pottery.</p>
             <button className='mt-7 font-bold border-solid border-2 rounded-3xl px-12 py-2 for700:my-2 bg-creamywhite border-creamywhite hover:bg-morepink hover:border-pink hover:text-white '>Join Now</button>
        </div>
     
    </div>
  )
}

export default Classes

