import React, { useContext, useState } from 'react'
import { CeramicsContext } from '../../Context/CeramicsContext'
import { designlist } from '../../assets/assets';
import cross_icon from '../../assets/cross_icon.png'
import left from '../../assets/left.png'   
import { Link } from 'react-router-dom';
import emptycart from '../../assets/emptycart.png'
import close from '../../assets/close.png'

const Cartitems = () => {
    const { cartItems, getTotalCartAmount, removeFromCart, addToCart, setshowcart } = useContext(CeramicsContext);
    const total =getTotalCartAmount();
    
   
    //by using [cartItems[item._id] we get the quantity at that id
    //like if 003:1 so if id 003 has 1 then it will return 1]
    return (
        <div className='z-10 absolute text-xs bg-loginpopupbg size-full '>
            <div className={total===0 ?"bg-creamywhite mx-auto mt-16 rounded-2xl w-1/4 h-4/5 for1048:w-1/3  for1048:h-3/4 for900:h-3/4 for700:w-3/6 for600:w-3/5 for500:h-3/4 for500:w-4/5 for900:w-2/5  ":"hidden"}> 
                <img onClick={()=>setshowcart("not")}  className='cursor-pointer h-4 ml-auto mr-10 relative top-8' src={close} alt="" />
                <img className='h-20 ml-28 relative top-28' src={emptycart} alt="" />
                <h1 className='text-center font-bold font-mono text-xl relative top-32 mb-3'>Your Cart is Empty</h1>
                <p className='text-center font-mono relative top-32 mb-5'>Looks like you haven't made your  <br />  choice yet</p>
            <Link to={'/viewall'}>    <button onClick={()=>setshowcart("not")} className='ml-16  bg-red px-10 py-2 font-mono relative top-32 rounded-md hover:text-white'>Back to Shopping</button></Link>
            </div>
            <div className={total>0?"bg-creamywhite w-10/12 h-5/6 mx-auto mt-14 rounded-2xl for968:w-11/12 ":"hidden"}>
                <div className='flex pt-12 ml-9 cursor-pointer'>
                    <img className="h-4 " src={left} onClick={() => setshowcart("not")} />
                    <p className=' mb-3 font-bold ' onClick={() => setshowcart("not")}> Back</p>
                </div>

                <h1 className='font-bold text-3xl  ml-10 mb-5 '>Your Cart</h1>
                <div className='flex justify-between for800:flex-col '>
                    <div className='ml-10 w-8/12 h-72 overflow-y-auto for800:w-full for800:h-48 '>
                        {
                            designlist.map((item, index) => {
                                if (cartItems[item._id] > 0) {
                                    return (
                                        <div className=''>
                                            <div className='grid grid-cols-5  font-mono font-semibold '>
                                                <img className="h-14" src={item.image} />
                                                
                                                <p className='pt-5  ' >{item.name}</p>
                                                <p className='pl-5 pt-5   '>${item.price}.00</p>   
                                                
                                              
                                               <div className='flex mb-8 ml-4 for500:w-16  w-32  mt-5   justify-between font-bold border-2 border-solid rounded-full bg-red border-red'>
                                                    <p className='ml-5 pr-5 for500:pr-2 for500:ml-2  hover:text-white cursor-pointer' onClick={() => removeFromCart(item._id)}>-</p>
                                                    <p>{cartItems[item._id]}</p>
                                                    <p className='mr-5 pl-5 for500:pl-2 for500:mr-2  hover:text-white cursor-pointer' onClick={() => addToCart(item._id)}>+</p>
                                                </div>
                                        
                                               
                                                <img className=" h-4 pl-16 mt-5 cursor-pointer for800:hidden" src={cross_icon} onClick={() => removeFromCart(item._id)} alt="" />
                                            </div>

                                        </div>

                                    )
                                }
                            })}
                    </div>
                    <div class="border border-loginpopuptext h-72 absolute left-2/3 for800:hidden "></div>
                   
                        
                    
                    <div className='w-4/12 pl-14 pr-10 for801:mt-7 for800:w-full mt-20 '>
                        <p className=' text-2xl mb-5 font-semibold for800:hidden'>Cart Totals </p>
                        <hr className="border-t border-black my-3 w-60  for800:hidden for1048:w-48 " />
                        <div className='flex justify-between for801:mb-3  for801:mt-6 font-mono '>
                            <p>SubTotal</p>
                            <p className='pr-8'>${getTotalCartAmount()}.00</p>
                        </div>
                        <hr className='text-black for1048:w-48' />
                        <div className='flex justify-between for801:mb-3 font-mono '>
                            <p>Tax</p>
                            <p className='pr-8'>$0.00</p>
                        </div>
                        <hr className="border-t border-black my-3 w-60 for1048:w-48 for800:hidden " />
                        <div className='flex justify-between font-bold font-mono'>
                            <p className=''>Total</p>
                            <p className='pr-8'>${getTotalCartAmount()}.00</p>
                        </div>
                        <div  className='items-center flex-col'>
                         <Link to={"/orderdetails"}>   <button  onClick={()=>setshowcart("not")}  className='mt-6 border border-solid bg-red p-2 w-full  rounded-md font-mono hover:bg-lightpink hover:text-white'>Proceed to Checkout</button></Link>  <br />
                         <Link to={"/viewall"}>  <button onClick={()=>setshowcart("not")} className='mt-2 border border-solid bg-creamywhite p-2 for800:w-full text-center w-full   rounded-md font-mono hover:bg-lightpink border-red hover:text-white'>Continue Shopping</button></Link> 
                        </div>
                    </div>
                    
                   


                </div>

            </div>

        </div>
    )
}

export default Cartitems
