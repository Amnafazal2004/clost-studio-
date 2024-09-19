
import React,{ createContext,useEffect,useState } from 'react';
import { designlist } from '../assets/assets';
export const CeramicsContext=createContext(null);

const CeramicsContextProvider = (props) => {

    const [searchquery,setSearchquery]= useState('');
    const [darkmode,setDarkmode]=useState('light');
    const [cartItems, setCartItems] = useState(0);
    const [showlogin,setshowlogin]=useState("not");
    const [showcart,setshowcart]=useState("not");
    const [sidebar,setsidebar]=useState("not");
    const [menu,setMenu] =useState('Home');
   
    const addToCart = (itemId) => {
      if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }
        ))
}
else {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  
}
}
const removeFromCart = (itemId) => {
setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
}
const getTotalCartAmount = () => {
let totalamount = 0;
for (const item in cartItems) {
  if (cartItems[item] > 0) {
      let iteminfo = designlist.find((product) => product._id === item);
      totalamount += iteminfo.price * cartItems[item];
  }

}
return totalamount;
}
const getTotalCartItems =()=>{
  let itemsnum= 0;
   for(const items in cartItems){
    if(cartItems[items]>0){
       itemsnum  = itemsnum +   cartItems[items] ;
    }
   }
  return itemsnum;
}

  
    const contextValue={
        setSearchquery,
        searchquery,
        darkmode,setDarkmode,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        showlogin,setshowlogin,sidebar,setsidebar,menu,setMenu,showcart,setshowcart,getTotalCartItems,
       

    }

  return (
   <CeramicsContext.Provider value={contextValue}>
   {props.children}
   </CeramicsContext.Provider>
  )
}

export default CeramicsContextProvider
