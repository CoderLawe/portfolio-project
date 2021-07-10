import React, { useState } from 'react'
import NavItem from './NavItem';
import './Header.css';
import './utils.js';


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
import Typewriter from 'typewriter-effect';

function Nav({ handleLogout }) {
    const history = useHistory();
    const[open,setOpen] = useState(false);


    return (

        <div
        className="text-white bg-black bg-header-image bg-fixed bg-no-repeat bg-cover"
      >
      {/* <video className="w-fixed z-0" src="https://www.youtube.com/watch?v=qXfd2kK3hgQ" autoplay loop mute/> */}
        <div className="sticky top-0">
          <Navbar handleLogout={handleLogout}/>
        </div>

        {/* Background image */}
        <div className="ml-30 pt-140 h-auto  ">
          {/* title */}   
          <div className="grid justify-end mr-10 ">
          <div className="block mb-11 sm:text-7xl sm:border-b-8  border-b-4 text-grey-300 text-5xl">
          <Typewriter 
              onInit ={(typewriter) =>{
                typewriter.typeString("Lawe Sosah")
                .pauseFor(10000)
                .deleteAll()
                .typeString("Lawe Sosah")
                .start()
              }}
            />
          </div>
           <div  className="block text-5xl text-gray-300 sm:text-gray-400">
           <Typewriter 
              onInit ={(typewriter) =>{
                typewriter
                .pauseFor(4000)
                .typeString("Web developer")
                .pauseFor(6000)
                .deleteAll()
                .pauseFor(3000)

                .typeString("Web developer")

                .start()
              }}
            />
           </div>

        
        </div>
        <div>
           <p className="flex justify-end ml-40 mt-10 text-gray-200 mr-10">"To Code, or not to code, that is...the question! </p>
             <p className="flex justify-end ml-40 text-gray-400 mr-10 text-bold">-Lawe Sosah </p>

             <div className="flex justify-center">
          <img  className="rounded-full" src="https://avatars.githubusercontent.com/u/52962217?v=4"/>
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
