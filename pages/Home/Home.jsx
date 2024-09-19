import React, { useContext } from 'react'
import Header from '../../Components/Header/Header'
import Brand from '../../Components/Brand/Brand'
import Order from '../../Components/Order/Order'
import Classes from '../../Components/Classes/Classes'
import Aboutus from '../../Components/Aboutus/Aboutus'
import { CeramicsContext } from '../../Context/CeramicsContext'


const Home = () => {
  const {darkmode,setDarkmode}=useContext(CeramicsContext);
  return (
    <div>
      
        <Header/>
      <div  className={darkmode==="light"?"bg-creamywhite":"bg-black text-white"}>
    
      <Order/>
      <Classes/>
      <Aboutus/>
      </div>
      
      
      
    </div>
  )
}

export default Home
