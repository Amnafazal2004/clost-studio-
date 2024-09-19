import React, { useContext, useState } from 'react'
import cash from '../../assets/cash.png'
import card from '../../assets/card.png'
import logo from '../../assets/logo.png'
import flower from '../../assets/flower.png'
import flowerpink from '../../assets/flowerpink.png'
import { CeramicsContext } from '../../Context/CeramicsContext'
const Orderdetails = () => {
  const [name,setname]=useState("Customer");
  const [Paymentoption,setpaymentoption] =useState("Cash");
  const {getTotalCartItems,getTotalCartAmount}= useContext(CeramicsContext);
  const inputHandler =(event)=>{
    setname(event.target.value);
  }
  return (
    <>
      <div className='h-full bg-creamywhite'>
        <div className='px-32 for1048:px-10 flex justify-between for1048:flex-col' >
        
          <div className='w-3/5'>
            <h1 className='font-bold text-3xl pt-16'>
              Delivery Information
            </h1>
            <div className='flex mt-10 font-mono for1048:flex-col'>
            
              <div className='mr-6'>
                <label className='text-loginpopuptext ' >First Name</label> <br />
                <input required type="text" placeholder='' onChange={inputHandler} value={name} className='hover:border-red rounded-md border-gray-500  border border-solid  mt-2 p-1 pl-4 w-60  outline-none' />
              </div>
              <div>
                <label className='text-loginpopuptext' >Last Name</label> <br />
                <input required type="text" placeholder='' className='hover:border-red rounded-md border-gray-500  border border-solid rounded-xs mt-2 p-1 pl-2 w-60  outline-none' />
              </div>
            </div>
            <div className=' mt-1 font-mono '>
              <label className='text-loginpopuptext' >Phone Number</label> <br />
              <input required type="text" placeholder='' className='hover:border-red rounded-md border-gray-500  border border-solid rounded-xs mt-2 p-1 pl-2  outline-none w-5/6 for1048:w-60' />
            </div>
            <div className='flex font-mono  for1048:flex-col'>
              <div className='mr-6'>
                <label className='text-loginpopuptext'>City </label> <br />
                <input required type="text" placeholder='' className='hover:border-red rounded-md border-gray-500  border border-solid rounded-xs mt-2 p-1 pl-2  w-60 outline-none' />
              </div>
              <div>
                <label className='text-loginpopuptext' >Country</label> <br />
                <input required type="text" placeholder='' className='hover:border-red rounded-md border-gray-500  border border-solid rounded-xs mt-2 p-1 pl-2  w-60  outline-none' />
              </div>
            </div>
            <div className=' font-mono'>
              <label className='text-loginpopuptext' >Email Address</label> <br />
              <input  required type="text" placeholder='' className='hover:border-red rounded-md border-gray-500  border border-solid rounded-xs mt-2 p-1 pl-2 for1048:w-60 outline-none  w-5/6' />
            </div>
            <div className='font-mono'>
              <label className='text-loginpopuptext' >Delivery Address</label> <br />
              <input required type="text" placeholder='' className='hover:border-red rounded-md border-gray-500  border border-solid rounded-xs mt-2 p-1 pl-2 for1048:w-60  outline-none  w-5/6' />
            </div>
            <div className={Paymentoption==="Cash"?"font-mono mt-4 for1049:mb-32":"font-mono mt-4"}>
              <label className='text-black font-semibold ' >Payment Information </label> <br />
              <div className='flex mt-3 space-x-2 mb-4  for1048:flex-col for1048:space-y-2'>
                <div  onClick={()=>setpaymentoption("Cash")}className='border border-solid border-loginpopuptext rounded-xl pl-10 hover:border-red hover:bg-lightpink for1048:w-36'>
                  <img  className="h-20 pr-10" src={cash} alt="" />
                  <p> Cash</p>
                </div>
                <div  onClick={()=>setpaymentoption("Card")} className='border border-solid border-loginpopuptext rounded-xl pl-10 hover:border-red hover:bg-lightpink for1048:w-36'>
                  <img className="h-20 pr-10" src={card} alt="" />
                  <p>Card</p>
                </div>
                
              </div>
              <div className={Paymentoption==="Card"?"for1049:mb-32 ":"hidden"}>
              <label className='text-loginpopuptext ' >Card Number</label> <br />
              <input required type="text" placeholder='' className='hover:border-red rounded-md border-gray-500  border border-solid rounded-xs mt-2 p-1 pl-2 w-60  outline-none' />
              </div>
              
            </div>
            <div>
          
            </div>
          </div>

          <div className='pt-24  w-2/5 h-svh rounded-2xl'>
          <div className='bg-red mt-[-32px] h-40 for1049:ml-14 w-72 ml-1 rounded-md'>
            <div className='flex justify-between'>
            <img  className="h-14 ml-4"src={logo} alt="" />
            </div>
            <div className='mt-[-10px]'>
              <p className='text-6xl text-center font-semibold'>{getTotalCartItems()}</p>
              <p className='text-center text-xs mt-2'>Items in Total</p>
            </div>
          </div>
          <div className='h-72 bg-creamywhite border border-solid w-72 rounded-md ml-14  for1048:ml-1  border-red'>
            <p className='text-xl font-mono text-center mt-4'>{name},</p>
            <hr  className=' border border-red w-64 ml-3  mt-4'/>
          </div>
          <div>
          <div className='flex justify-between font-mono -mt-48 text-xs '>
                            <p className='ml-20 for1048:ml-16 for1048:mr-20'>SubTotal</p>
                            <p className='mr-20'>${getTotalCartAmount()}.00</p>
          </div>
          <div className='flex justify-between font-mono pt-3 text-xs '>
                            <p className='ml-20 for1048:ml-16 for1048:mr-28'>Tax</p>
                            <p className='mr-20'>$0.00</p>
          </div>
          <div className='flex justify-between font-mono pt-3 text-xs '>
                            <p className='ml-20 for1048:ml-16 for1048:mr-20'>Delivery Charges</p>
                            <p className='mr-20'>$0.00</p>
          </div>
          <div className='flex justify-between font-bold font-mono pt-9 '>
                            <p className='ml-20 for1048:ml-16 for1048:mr-20'>Total</p>
                            <p  className='mr-20'>${getTotalCartAmount()}.00</p>
                        </div>
                        <button  onClick={()=>setshowcart("not")} className='mt-5 border border-solid bg-red ml-14 p-2 w-72  for1048:ml-1  rounded-md font-mono hover:bg-lightpink hover:text-white'>Place Order</button>  
          </div>
         

           
               
          </div>

        </div>

      </div>

    </>

  )
}

export default Orderdetails
