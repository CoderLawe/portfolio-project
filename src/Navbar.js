import React, { useState } from 'react'
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
import { Link } from 'react-router-dom'
import { Menu } from '@material-ui/core'
import Collapsible from './Collapsible'

function Navbar({handleLogout}) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="flex justify-between cursor-pointer opacity-80 sticky top-0 h-15 p-5 md:hidden bg-black ">
                <div>
                    <Link to="/">
                         <h1 className="text-2xl font-serif font-extrabold cursor-pointer">Lawe Sosah</h1>
                    </Link>

                </div>
                <div className="w-10 ml-44">
                    <div className={open ? 'hidden' : 'visible'}>
                        <MenuIcon open={open} onClick={()=>setOpen(!open)}/>
                    </div>
                 

                </div>
                <div className="block ">
                    <div className="w-10 ">
                    <div className={open ? 'visible' : 'hidden'}>
                        <XIcon open={open} onClick={()=> setOpen(false)}/>
                    </div>
                    </div>
            
                    <div className={open ? 'visible' : 'hidden'}>
                        <div className="block mr-28 justify-between">
                            <Link to="/">
                                <Collapsible Icon={HomeIcon} Title="Home" />
                            </Link>
                        <Link to="/about">
                             <Collapsible Icon={UserIcon} Title="About" />
                        </Link>
                        <Link to="/code">
                        <Collapsible Icon={CodeIcon} Title="My code" />

                        </Link>
                        <Link to="/contact">
                        <Collapsible Icon={PhoneIcon} Title="Contact Me" />

                        </Link>
                        <Link to="/create">
                        <Collapsible Icon={PlusIcon} Title="Create" />

                        </Link>
                        <Link to="/signin">
                        <Collapsible Icon={LoginIcon} Title="Login" />

                        </Link>

                        </div>
                    </div>
                    
                    
               


                </div>
            </div>
                  
          <div className="sm:flex justify-center sticky top-0  sm:visible hidden " id="menu">

            <Link to="/">
              <NavItem title="Home" Icon={HomeIcon} />
            </Link>
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
