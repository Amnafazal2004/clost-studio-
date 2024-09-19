import React, { useContext } from 'react'
import facebook_icon from '../../assets/facebook_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
 
  return (
    <>
   
    <div className='text-footer bg-grey1 flex-col items-center gap-5 p-5 pt-20  ' id='footer'>
       <div className="flex justify-between for968:flex-col for968:space-y-10">
        <div className="footercontentleft">
           <h1 className='font-bold text-4xl text-pink mb-5'>CLOST STUDIOS</h1>
           <p className='w-96 for968:w-full'>Thank you for visiting our site. We are committed to providing you with the best experience possible. If you have any questions or feedback, please don't hesitate to contact us. Stay connected by following us on social media, and be the first to know about our latest updates and offers. Your privacy is important to us, and we ensure your information is kept secure. All rights reserved</p>
           <div className="flex space-x-3 mt-6 mb-6">
            <img src={facebook_icon} alt="" />
            <img src={twitter_icon} alt="" />
            <img src={linkedin_icon} alt="" />
           </div>
        </div>
        <div className="">
            <h2 className='font-bold text-3xl mb-4'>COMPANY</h2>
            <ul className=''>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="mr-32 ">
            <h2 className='text-3xl font-bold mb-4'>GET IN TOUCH</h2>
            <ul>
              <li>+1-233-2333-2233</li>
              <li>contact@cloststudios.com</li>
            </ul>
        </div>
       </div>
       <hr className='for968:mt-14'/>
       <p className="text-center">
        Copyright 2024 © ClostStudios.com. All rights reserved
       </p>
    </div>
    </>
  )
}

export default Footer