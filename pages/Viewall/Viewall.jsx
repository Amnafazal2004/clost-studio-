import React, { useContext, useEffect, useState } from 'react'
import { designlist } from '../../assets/assets'
import Item from '../../Components/Items/Item'
import { CeramicsContext } from '../../Context/CeramicsContext'


//we made designlist like this because there are alot of items and to display them all we needed to write alot of things
//so we used this method
const Viewall = () => {
  const [category,setCategory]= useState("All");
  const {searchquery}=useContext(CeramicsContext);
  
 
  const categoryHandler=(event)=>{
    switch(event.target.value){
      case  "Mugs":{
        setCategory("Mugs");
        break;
      }
      case  "jewellery box":{
        setCategory("jewellery box");
        break;
      }
      case  "Plates":{
        setCategory("Plates");
        break;
      }
      default :{
        setCategory("All");
        break;
      }

    }

  }
  const filteredItems = designlist.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearchQuery = searchquery === '' || item.name.toLowerCase().includes(searchquery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
});


  
  return (
    <div className='bg-creamywhite pb-24'>
      <h1 className='text-center font-bold text-4xl mb-4 pt-8'>Our Collection</h1>
        <select className='border-solid border-2 rounded-full px-5 py-1 ml-14 border-red bg-red for700:mt-5' onChange={categoryHandler}>
        <option value="All">All</option>
        <option value="Mugs">Mugs</option>
        <option value="jewellery box">jewellery box</option>
        <option value="Plates">Plates</option>
        
      </select>
     
      <div className="grid gap-4 grid-cols-3 mt-7 ml-14 for1048:grid-cols-2 for700:grid-cols-1 for700:items-center  for700:ml-10 for700:mr-10 "> 
    
      

       
     {   
        // we cant display all the items right here because map only lets you return one item
        filteredItems.map((item,index)=>{
            return  <Item key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
        })
        
}

      
      </div>
     
    </div>
  )
}

export default Viewall
