import React, { useContext, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Viewall from './pages/Viewall/Viewall'
import { CeramicsContext } from './Context/CeramicsContext'
import Loginpopup from './Components/loginpopup/Loginpopup'
import Sidebar from './Components/sidebar/Sidebar'
import Cartitems from './Components/CartItems/Cartitems'
import Orderdetails from './pages/Orderdetails/Orderdetails'


const App = () => {
  const {showlogin,setshowlogin,sidebar,showcart,showemptycart}= useContext(CeramicsContext);
  return (
    <>
   <div >
   {showlogin==="show"?<Loginpopup/>:""}
   {sidebar==="show"?<Sidebar/>:""}
   {showcart==="show" ?<Cartitems/>:""}
     <Navbar />
     <div >
     <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path='/viewall' element={<Viewall/>}/>
      <Route path='/orderdetails' element={<Orderdetails/>}/>

      
            
          </Routes>
        </div>

   </div>
    <Footer/>
   
 </>
    
  )
}

export default App

