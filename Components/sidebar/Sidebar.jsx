import React, { useContext } from 'react'
import { CeramicsContext } from '../../Context/CeramicsContext'
import { Link } from 'react-router-dom';
//mt-5 space-x-7 flex
const Sidebar = () => {
    const {Sidebar,setsidebar,menu,setMenu}=useContext(CeramicsContext);
  return (
    // <div className='bg-loginpopupbg size-full absolute z-10'>
    //     <div className='bg-red w-64 h-full ml-auto'>
    //     <ul className='pt-24 pl-8 font-mono text-xl space-y-3 text-white ' >
    //     <Link to='/'><li onClick={()=>setMenu("Home")} className={menu==="Home"?"underline":""}>Home</li></Link>
    //   <li>  <a href='#ceramics' onClick={()=>setMenu("Ceramics")} className={menu==="Ceramics"?"underline ":""}>Ceramics</a></li>
    //   <li> <a href='#Classes' onClick={()=>setMenu("Classes")} className={menu==="Classes"?"underline":""}>Classes</a></li>  
    //   <li>  <a href='#aboutus' onClick={()=>setMenu("About us")} className={menu==="About us"?"underline":""}>About</a></li> 
    //   <li>  <a  href='#footer'onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"underline":""}>Contact</a></li> 
    //   </ul>
    //     </div>
       
       
      
    // </div>
    <div>
        
    </div>
  )
}

export default Sidebar
