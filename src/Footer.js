import React from 'react'
import Message from './Message';
function Footer() {
    return (
        <div className="bg-black  py-20">
            
           <div className="flex justify-center">
                <img className="h-52 w-52 object-contain"src="https://cdn.discordapp.com/attachments/839784544798638090/889140379251802122/download.png" alt=""/>
           </div>

           <div className="flex justify-center">
                <p className="text-xs text-gray-400 font-serif">© Lawe Sosah 2021. All Rights Reserved</p>
           </div>
   
        </div>
    )
}

export default Footer
