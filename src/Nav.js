import React, { useState } from 'react'
import NavItem from './NavItem';
import './Header.css';
import './utils.js';
import ScrollAnimation from 'react-animate-on-scroll';



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
        className="text-white bg-header-image bg-cover h-80"
      >
        
      {/* <video className="video" src="img/video-2.mp4" autoplay loop mute/> */}
        <div className="sticky top-0">
          <Navbar handleLogout={handleLogout}/>
        </div>

        {/* Background image */}
        <div className="ml-30 pt-140 h-auto  ">
          {/* title */}   
          <div className="grid justify-center mr-10 ">
          <div className="block mb-11 sm:text-7xl justify-center  font-serif text-grey-300 text-5xl">
          <Typewriter 
              onInit ={(typewriter) =>{
                typewriter.typeString("Hi! I'm Lawe")
                .pauseFor(5000)
                .deleteAll()
                .typeString("Welcome!")
                .start()
              }}
            />
          </div>
     

        
        </div>
        <div  className="grid text-3xl  justify-center sm:text-gray-400 sm:text-7xl ">
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
           </div>
        <div>
           <p className="flex justify-end ml-40 mt-10 text-gray-200 mr-10">"To Code, or not to code, that is...the question! </p>
             <p className="flex justify-end ml-40 text-gray-400 mr-10 text-bold">-Lawe Sosah </p>

             <div data-aos = "zoom-in"className="flex justify-center">
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
