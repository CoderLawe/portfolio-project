import React, { useContext, useState } from 'react'
import{
    HomeIcon,
    UserIcon,
    CodeIcon,
    PhoneIcon,
    LoginIcon,
    PlusIcon,
    MenuIcon,
    XIcon,
    UserAddIcon,
    UserRemoveIcon,
} from "@heroicons/react/outline"
import NavItem from './NavItem'
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu } from '@material-ui/core'
import Collapsible from './Collapsible'
import { ScrolledContext } from './context/PageContext';


function Navbar({handleLogout}) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useContext(ScrolledContext)
    return (
        <div>
            <div className={scrolled || open ? "flex justify-between cursor-pointer bg-black bg-opacity-50 h-15 p-5 md:hidden   transition-all duration-500 ease-in-out":"flex justify-between cursor-pointer bg-transparent h-15 p-5 md:hidden  transition-all duration-500 ease-in-out"}>
                <div>
                <h3 className={open ? "hidden transition-all duration-500 ease-in-out": "flex text-xl font-serif text-gray-200 italic transition-all duration-500 ease-in-out"}>Lawe Sosah</h3>
                </div>
                <div className="w-10 ml-52">
                    <div className={open ? 'hidden' : 'visible'}>
                        <MenuIcon open={open} onClick={()=>setOpen(!open)}/>
                    </div>
                 

                </div>
                <div className="block  ">
                    <div className="w-10 ">
                    <div className={open ? 'visible ml-32 ' : 'hidden'}>
                        <XIcon className="h-10" open={open} onClick={()=> setOpen(false)}/>
                    </div>
                    </div>
            
                    <div className={open ? 'visible' : 'hidden'}>
            <div className="flex flex-col mr-64">
                    <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="font-bold text-gray-300 mb-5">HOME</p>
            </Link>
            <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="font-bold text-gray-300 mb-5">ABOUT</p>
            </Link>                
            <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="font-bold text-gray-300 mb-5">CONTACT</p>
            </Link>

            <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="font-bold text-gray-300 mb-5">PROJECTS</p>
            
            </Link>
            </div>

                    </div>
                    
                    
               


        </div>
            </div>
                  
          <div className={scrolled ? "sm:flex justify-between sm:visible hidden bg-black bg-opacity-50" : "sm:flex justify-between sm:visible hidden bg-transparent"} id="menu">

            <div className="flex justify-start mr-5 px-12 space-x-8 py-5">
            <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="font-bold text-gray-300 mb-5">HOME</p>
            </Link>
            <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="font-bold text-gray-300 mb-5">ABOUT</p>
            </Link>                
            <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="font-bold text-gray-300 mb-5">CONTACT</p>
            </Link>

            <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                    <p className="font-bold text-gray-300 mb-5">PROJECTS</p>
            </Link>
            </div>
          


            {/* <Link to="/about">
              <NavItem title="About" Icon={UserIcon}/>
            </Link> */}
            {/* <Link to="/code">
              <NavItem title="My Code" Icon={CodeIcon}/>
            </Link> */}
            {/* <Link to="/create">
              <NavItem title="Add" Icon={PlusIcon}/>
            </Link>
            <Link to="/signin">
            <NavItem title="Login" Icon={LoginIcon}/>

            </Link>
            
            <NavItem onClick={handleLogout} title="Logout" Icon={UserRemoveIcon}/> */}
        



          </div>
        </div>
    )
}

export default Navbar
