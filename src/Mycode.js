import React from 'react'
import { Link } from 'react-router-dom'
import ExtraCard from './ExtraCard'
import Navbar from './Navbar'


function Mycode() {
    return (
        <div>
            <div className="sticky top-0">
                <Navbar />
            </div>
         <div className="px-10 rounded-2xl bg-gray-800">
            <h1 className="text-white font-serif font-bold flex justify-center text-xl py-3">Click any of the links below for my Github, or contact me to access my code</h1>
                <div>
                    <div className="flex mt-10 p-2">
                         <p className="mr-5">Github -> </p>
                         <img className="rounded-2xl opacity-80 cursor-pointer" src="img/github3.png" alt="github image"/>    
                    </div>
                </div>
         </div>


                
                
        </div>
    )
}

export default Mycode
