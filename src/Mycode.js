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
            <div className="flex justify-center">
                <ExtraCard title="Checkout My Github repos" />
            </div>


                
                
        </div>
    )
}

export default Mycode
