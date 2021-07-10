import { Button } from '@material-ui/core'
import React from 'react'

function ExtraCard({title, description, second_description }) {
    return (
        <div>
            <div className="flex justify-between text-black">
                <div className="w-110">
                <div className="ml-10 mt-10 shadow-2xl p-20 rounded-3xl bg-darkergray bg-no-repeat bg-cover ">
                     <h1 className="font-serif font-bold font-4xl border-b-4 border-blue-400">{title} </h1>
                     <h1>{description}</h1>
                    <div className="p-10">
                        <img className="rounded-2xl opacity-80 cursor-pointer" src="img/github3.png" alt="github image"/>    
                    </div>                
                <div className="flex justify-center">
                    <Button variant="outlined" color="primary" >Check it out</Button>
                </div>

                </div>
                </div>
             

            </div>
        </div>
    )
}

export default ExtraCard
