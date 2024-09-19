import React, { useContext, useState } from 'react'
import cross_icon from '../../assets/cross_icon.png'
import { CeramicsContext } from '../../Context/CeramicsContext';
//
//postion absolute makes that white bg disappear, it does not consume any layout space
const Loginpopup = () => {
  const {setshowlogin} =useContext(CeramicsContext);

  const [currstate,setcurrstate]= useState("Sign in");
  return (
    <div className='z-10 absolute text-xs bg-loginpopupbg size-full flex items-center justify-center'>
      <div className={currstate==="Sign up"?"bg-creamywhite w-80 h-4/6 rounded-xl":"h-80 bg-creamywhite w-80 rounded-xl"}>
      <div className='flex'>
      <h1 className='mt-6 pl-8 text-2xl font-bold font-mono'>{currstate==="Sign in"?"Log in":"Sign up"}</h1>
      <img className=' h-4 ml-auto mt-8 mr-12'onClick={()=>setshowlogin("not")} src={cross_icon} alt="" />
      </div>
      
      <form className='text-loginpopuptext pl-7 mt-5' >
        
        <div className={currstate==="Sign in"?"hidden":""}>
        <input type="text" className="border border-solid border-bordercolor rounded-md p-2 font-mono outline-none w-64 mb-5"placeholder=' Enter username' required/>
        <br />
       </div>
       
        <input type="text" className="border border-solid border-bordercolor font-mono rounded-md p-2 outline-none w-64 mb-5" placeholder=' Enter email' required />
        <br />
      
        <input type="text" className="border border-solid border-bordercolor font-mono rounded-md p-2 outline-none w-64 mb-5" placeholder=' Enter password' required/>
       
       
       <br />
       
        
        <button className='text-center border bg-red w-64  p-2 rounded-md text-white font-mono hover:border-pink hover:text-black'>{currstate==="Sign in"?"Log in":"Create Account"}</button>
        <div className='flex'>
        <input type="checkbox" required/>
        <p className='pl-2  p-3 w-60' >By continuing,I agree to the terms of use & privacy</p> 
        </div>
        <div className='font-mono text-13px mt-3 '>
        {
          currstate==="Sign in"? <p>Create an Account?<span className='text-red cursor-pointer' onClick={()=>setcurrstate("Sign up")}> Click here</span></p>:
          <p>Already have an Account? <span className='text-red cursor-pointer' onClick={()=>setcurrstate("Sign in")}>Login here</span></p>
        }
        </div>
        </form>
      </div>
    
       
       
    </div>
  )
}

export default Loginpopup
