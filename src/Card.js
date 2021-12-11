import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Aos from "aos";
import { PlusIcon } from '@heroicons/react/outline';
import GitHubIcon from "@material-ui/icons/GitHub"
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone"



function Card({src, title, description, Key, code}) { //Props are properties that we can pass into the component that make ti look different. Rhey can be reused


    return (
        <div className="group p-2   cursor-pointer transition duration-200 transform ease-out ">
            <div className="">
                <div className="group-hover:border-l-8 border-blue-500 " >
                        <PlusIcon className="hidden relative top-52 h-32 z-"/>
                    <div className="group ">
                        <img className=" rounded-xl sm:hover:scale-105 transform duration-200 z-30"  src={src} alt=""/>   
                            
                    </div>
                    
                </div>
            </div>
           
            <div className="card__info rounded-full ">

            <div className="justify-between opacity-0 group-hover:opacity-90 transform transition ease-in-out duration-700 space-x-14 mx-40 mt-10">
                        <a href="https://github.com/CoderLawe?tab=repositories" target="_blank">
                            <GitHubIcon className="h-40 mx-auto cursor-pointer text-blue-500"/>
                        </a>
                        <a href={code}>
                            <VisibilityTwoToneIcon className="h-14 cursor-pointer text-green-500"/>
                        </a>
            </div>


                <div className="">
                     <h2 className="md:opacity-0 group-hover:opacity-90  border-b-2 border-white  p-5 transform duration-500 text-2xl font-serif  font-extrabold">{title}</h2>
                </div>

                <div>
                  
                </div>

                <div>
                     <h4 className="md:opacity-0 group-hover:opacity-100 group-hover:shadow-2xl transform duration-700 pt-3">{description}</h4>
                </div>
            </div>
            
            

        </div>
    )
}

export default Card
