import React from 'react'

function Card({src, title, description,price}) { //Props are properties that we can pass into the component that make ti look different. Rhey can be reused

    return (
        <div className="group p-2 mt-8 cursor-pointer transition duration-200 transform hover:scale-110 rounded">
            <img src={src} alt=""/>

            <div className="card__info">
                <h2 className="md:opacity-0 group-hover:opacity-100 ">{title}</h2>
                <h4 className="md:opacity-0 group-hover:opacity-100">{description}</h4>
                <h3>{price}</h3>

            </div>
            

        </div>
    )
}

export default Card
