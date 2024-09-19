import React from 'react'

const Brand = () => {
  return (
    <div className='flex justify-between py-4 bg-red rounded-full for801:mr-40 for801:ml-40 mt-10 mb-10  for800:ml-5 for800:mr-5 shadow bg-[url("./assets/classesbg4.jpeg")] bg-no-repeat bg-cover ' >
        <div className='for801:ml-20 ml-10 '>
        <h1 className='font-bold text-3xl'>47+</h1>
        <p className='font-semibold  text-xs font-mono'>Brand partners</p>
        </div>
     
      <div>
      <h1 className='font-bold text-3xl'>9+</h1>
      <p className='font-semibold  text-xs font-mono'>Years of experience</p>
      </div>
      
        <div>
        <h1 className='font-bold text-3xl'>50+</h1>
        <p className='font-semibold  text-xs font-mono'>Creative designs</p>
        </div>
      
        <div className='mr-20 for800:hidden'>
        <h1 className='font-bold text-3xl'>12k+</h1>
      <p className='font-semibold  text-xs font-mono'>Students</p>
        </div>
      
    </div>
  )
}

export default Brand
