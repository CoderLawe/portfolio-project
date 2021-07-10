import React from 'react'
import { Link } from "react-router-dom";


function Card({src, title, description, Key}) { //Props are properties that we can pass into the component that make ti look different. Rhey can be reused

    return (
        <div className="group p-2 mt-8  cursor-pointer transition duration-200 transform  ">
            <div className="group-hover:border-l-8 border-blue-500">
                <img className="rounded-xl sm:hover:scale-105 transform duration-200"  src={src} alt=""/>   
            </div>
       
            <div className="card__info rounded-full">
                <div className="mt-5">
                     <h2 className="md:opacity-0 group-hover:opacity-100 border-b border-gray-400  p-5 transform duration-500 text-2xl font-serif  font-extrabold">{title}</h2>

                </div>
                <div>
                     <h4 className="md:opacity-0 group-hover:opacity-100 group-hover:shadow-2xl transform duration-700 py-5">{description}</h4>
                </div>
            </div>
            
            

        </div>
    )
}

export default Card
