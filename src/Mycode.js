import React from 'react'
import { Link } from 'react-router-dom'


function Mycode() {
    return (
        <div>
            <div className="flex justify-center mb-4">
                <h1 className="font-serif font-bold text-3xl border-b border-white">Here are some links to my code</h1>
            </div>
            <div class="flex justify-between m-5 overflow-scroll">
                <a href="https://github.com/CoderLawe">
                 <img src="img/github3.png"  className="mb-8 cursor-pointer transform hover:scale-105 transition "/>
                </a>
                <p className="font-serif grid"> My Github</p>
                <img src="img/github3.png" className="mb-8 cursor-pointer transform hover:scale-105 transition"/>
                <img src="img/github3.png" className="mb-8 cursor-pointer transform hover:scale-105 transition"/>

            </div>
        </div>
    )
}

export default Mycode
