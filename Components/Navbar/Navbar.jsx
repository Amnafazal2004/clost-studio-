import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import searchicon from '../../assets/searchicon.png'
import cross_icon from '../../assets/cross_icon.png'
import { useContext } from 'react';
import { CeramicsContext } from '../../Context/CeramicsContext';
import threelines from '../../assets/threelines.png'
import signinicon from '../../assets/signinicon.png'
import carticon from '../../assets/carticon.png'
import darkmodeicon from '../../assets/darkmodeicon.png'

const Navbar = () => {
  
  const [input,setInput]= useState('');
  const {showlogin,setshowlogin} =useContext(CeramicsContext);
 const {setSearchquery,darkmode,setDarkmode,setMenu,menu,sidebar,setsidebar,showcart,setshowcart}=useContext(CeramicsContext);


 const navigate = useNavigate();

  const inputHandler =(event)=>{
    setInput(event.target.value);
  }
  const searchHandler =(event)=>{
    event.preventDefault();
    setSearchquery(input);
    setInput('');
    navigate('/viewall');
   
  }
 
  useEffect(()=>{
    console.log(showcart);
  },[showcart])
  return (
   
    <div className={sidebar==="show"?"bg-loginpopupbg size-full absolute z-10":'flex justify-between font-mono bg-red w-full  '}>
      <Link to='/'><img className={sidebar==="show"?"hidden":"h-16 mt-1 mr-52 ml-14 for1048:mr-32 "}  src={logo} alt="" /></Link>
   
     {/* <div className={sidebar==="show"?"w-64 h-screen bg-creamywhite":""}> */}
     <div className={sidebar==="show"?'bg-red w-64 h-full ml-auto ':""}>
      <div className='for968:pt-10'>
      <img className={sidebar==="show"?" h-4 ml-auto mr-12":"hidden"}onClick={()=>setsidebar("not")} src={cross_icon} alt="" />
      </div>
    
     <ul className={sidebar==="show"?" pt-10 pl-8 font-mono text-xl space-y-3  cursor-pointer":'mt-5 space-x-7 flex for968:hidden'}>
          <Link to='/'><li onClick={()=>setMenu("Home")} className={menu==="Home"?"underline ":""}>Home</li></Link>
      <li>  <a href='#ceramics' onClick={()=>setMenu("Ceramics")} className={menu==="Ceramics"?"underline ":""}>Ceramics</a></li>
     <li> <a href='#Classes' onClick={()=>setMenu("Classes")} className={menu==="Classes"?"underline":""}>Classes</a></li>  
      <li>  <a href='#aboutus' onClick={()=>setMenu("About us")} className={menu==="About us"?"underline":""}>About</a></li> 
       <li>  <a  href='#footer'onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"underline":""}>Contact</a></li> 
      </ul>
    
      </div>
    
      
       
     
      <form onSubmit={searchHandler} className='bg-red border-2 border-solid border-black rounded-full h-9 w-58 inline-flex ml-24 mt-4 for968:hidden'>
            <input onChange={inputHandler} value={input} id="search" type="search" placeholder=" search here" className='h-8 rounded-full bg-red outline-none flex-1  ' required/>
            
            <button type='submit' >   <img type="submit"  className="h-6 mt-1 pr-2 "src={searchicon}/> </button>
            </form>
      
            <img src={carticon}  onClick={()=>{showcart==="not"?setshowcart("show"):setshowcart("not")}}  className=' ml-auto h-7 mt-5 pl-3  cursor-pointer for968:pl-96 for700:pl-48 for500:pl-3'/>
      <img src={darkmodeicon} onClick={()=>{darkmode==="light"?setDarkmode("dark"):setDarkmode("light")}}    className=' ml-auto  h-8 mt-5 pr-2  font-bold cursor-pointer'/>
      <img src={signinicon} onClick={()=>{showlogin==="not"?setshowlogin("show"):setshowlogin("not")}}  className=' for969:mr-20  h-8 mt-5  text-xs cursor-pointer '/>
     
      <img src={threelines} className={sidebar==="show"?"hidden":'h-12 mt-3 for969:hidden mr-16'} onClick={()=>setsidebar("show")} alt="" />
          
      
    
    </div>
  
  )
}

export default Navbar

//  <button onClick={()=>{darkmode==="light"?setDarkmode("dark"):setDarkmode("light")}}    className={sidebar==="show"?"text-xl border-2 border-solid rounded-full ml-8 mt-10 size-10 bg-creamywhite hover:border-red hover:bg-red hover:text-white":'  ml-auto border-solid border-2 border-black rounded-full px-2 h-8  mt-5 mr-1  font-bold'}>+</button>
//<button onClick={()=>{showlogin==="not"?setshowlogin("show"):setshowlogin("not")}}  className={sidebar==="show"?"border-2 border-solid  font-mono text-xl rounded-full w-32 m-2 h-10 bg-creamywhite hover:border-red hover:bg-red hover:text-white":' mr-20 font-bold border-solid border-2 border-black rounded-3xl px-5 h-8 mt-5 text-xs  '} >Sign in</button>
     
// <div className='flex justify-center  mt-4 ml-28 mr-28 border-solid border-2 border-black rounded-full'>