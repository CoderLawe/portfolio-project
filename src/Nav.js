import React, { useState } from 'react'
import NavItem from './NavItem';
import './Header.css';
import './utils.js';
import ScrollAnimation from 'react-animate-on-scroll';
import Typewriter from "typewriter-effect"


import{
    HomeIcon,
    UserIcon,
    CodeIcon,
    PhoneIcon,
    LoginIcon,
    PlusIcon,
    MenuIcon,
} from "@heroicons/react/outline"
import { Link, useHistory } from 'react-router-dom';
import Navbar from './Navbar';

function Nav({ handleLogout }) {
    const history = useHistory();
    const[open,setOpen] = useState(false);


    return (

        <div
        className="text-white bg-nav-image bg-cover bg-fixed"
      >
        
      {/* <video className="video" src="img/video-2.mp4" autoplay loop mute/> */}
        <div className="sticky top-0">
          <Navbar handleLogout={handleLogout}/>
        </div>

        {/* Background image */}
        <div className="ml-30 pt-140 h-auto  ">
          {/* title */}   
          <div className="grid justify-center mr-10 ">
          <div className="block mb-11 sm:text-7xl justify-center  font-serif text-grey-300 text-4xl">
          <Typewriter 
              onInit ={(typewriter) =>{
                typewriter.typeString("Hi! I'm Lawe")
                .pauseFor(5000)
                .deleteAll()
                .pauseFor(2000)
                .typeString("I'm a web developer")
                .pauseFor(5000)
                .deleteAll()
                .pauseFor(1000)
                .typeString("Hi! I'm Lawe")
                .start()
              }}
            />
          </div>
     
    {/* Socials */}
          <div className="flex justify-center ">
            <div className="flex space-x-4">
              {/* Insta */}
              <div className="rounded-3xl w-10  cursor-pointer hover:opacity-75">
                  <img src="https://toppng.com/uploads/preview/circle-black-instagram-logo-11609357623eoy0bfkahk.png" alt="Insta logo"/>

              </div>

    {/* Facebook */}
              <div className="rounded-3xl w-10  cursor-pointer hover:opacity-75">
                  <img src="data:image/png;base64,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" alt="Insta logo"/>

              </div>


              <div className="rounded-3xl w-10 cursor-pointer hover:opacity-75">
                  <img src="data:image/png;base64,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" alt="Insta logo"/>

              </div>

              <div className="rounded-3xl w-10 cursor-pointer hover:opacity-75">
                  <img src="data:image/jpeg;base64,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" alt="Insta logo"/>

              </div>
        </div>
        </div>
       
        </div>
       
        {/* <div  className="grid text-3xl  justify-center sm:text-gray-400 sm:text-7xl ">
           <Typewriter 
           className="border-b-4 font-serif text-gray-300"
              onInit ={(typewriter) =>{
                typewriter
                .pauseFor(4000)
                .typeString("I'm a web developer")
                .pauseFor(2000)
                .deleteAll()
                .pauseFor(3000)

                .typeString("Feel free to have a look around")

                .start()
              }}
            />
           </div> */}
        <div>
           <p className="flex justify-end ml-40 mt-10 text-gray-200 mr-10">"Java, is to Javascript, what car is to carpet" </p>
             <p className="flex justify-end ml-40 text-white mr-10 font-bold">-Chris Heilman </p>

             <div data-aos = "zoom-in"className="flex justify-center shadow-lg">
               <img  className="rounded-full mb-5" src="https://avatars.githubusercontent.com/u/52962217?v=4"/>
             </div>
        </div>

       

  
          {/* 2 buttons */}
          {/* <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List </button>
          </div>
   */}
          {/* description */}
          
        </div>

      </div>

      
    )
  
}



export default Nav
