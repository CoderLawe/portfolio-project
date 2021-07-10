import React from 'react'

function Collapsible({Icon, Title}) {
    return (
        <div>
            <div className="flex justify-betweenhover:animate-bounce items-center group">
            <Icon  className="h-8 mb-1 ml-1 "/>
           <h1 className=" p-2 tracking-widest group-hover:text-white ">{ Title }</h1>

           </div>
        </div>
    )
}

export default Collapsible
