import React from 'react'
import NavItem from './NavItem';
import './Header.css';
import{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    CodeIcon,
    PhoneIcon,
    LoginIcon,
} from "@heroicons/react/outline"
function Nav() {
    return (

        <header
        className="text-white bg-header-image "
      >
          <div className="flex justify-center sticky top-0">
          <NavItem title="Home" Icon={HomeIcon}/>
          <NavItem title="About" Icon={UserIcon}/>
          <NavItem title="My Code" Icon={CodeIcon}/>
          <NavItem title="Contacts" Icon={PhoneIcon}/>
          <NavItem title="Login" Icon={LoginIcon}/>


          </div>

        {/* Background image */}
        <div className="ml-30 pt-140 h-auto  ">
          {/* title */}   
          <div className="grid justify-end mr-10 block">
            <h1 className="block mb-11 text-7xl border-b-8 text-grey-300">Lawe Sosah</h1>

            <p className="block text-6xl text-gray-400">Web Developer</p>
        
          </div>
<p className="flex justify-end ml-40 mt-10 text-gray-400 mr-10">"To Code, or not to code, that is...the question! </p>
<p className="flex justify-end ml-40 text-gray-400 mr-10 text-bold">-Lawe Sosah </p>

  
          {/* 2 buttons */}
          {/* <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List </button>
          </div>
   */}
          {/* description */}
          
        </div>
      </header>
    )
}



export default Nav