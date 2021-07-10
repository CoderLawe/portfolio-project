import React from 'react'
import Navbar from './Navbar'

function About() {
    return (
        <div>
            <div className="sticky top-0">
                <Navbar />
            </div>
            <div>
                <h1 className="text-4xl font-bold font-serif flex justify-center">About me</h1>
            </div>
        <div className="text-gray-300 ml-10 mr-10 sm:ml-20 sm:mr-20 mt-10 mb-20 bg-gray-800 p-10 rounded-2xl">
    <h1>
    Hi. My name is Lawe Sosah, and I'm 19 years old. I started programming around 7 years ago, mostly with Java, usually just as a passtime. Around 2017, I improved my knowledge of Python, and soon learned Webscraping, and Web development with the Django web 
                        framework. With this framework, I built apps all the way from a school management system, to a porfolio/blog, to an interactive webscraper for car buyers, to a full-stack e-commerce website. I am now currently getting more and more familiar with Javascript, and some of its Libraries, specifically ReactJS, which I bult this site with.
                    
    </h1>
    <p className="mt-5">Sed aliquet, odio eget cursus efficitur, nisi turpis pharetra velit, a posuere libero leo nec leo. Nunc at nibh justo. Nulla pharetra sapien sit amet justo auctor vehicula. Nullam sapien nibh, vestibulum sed sagittis quis, dictum ac nisl. Aliquam quis feugiat ex. Aliquam erat volutpat. Proin varius sodales eleifend. Nullam commodo venenatis ipsum et consectetur. Sed pellentesque velit mattis nisi venenatis, suscipit porta augue posuere. Curabitur urna est, varius eget velit ut, maximus gravida tellus. Duis nec sem id sem faucibus porttitor. Pellentesque elementum vehicula sapien quis hendrerit.
    </p>
    
        </div>

        <div className="flex justify-center h-32">
            <div className="group">
                <img className="rounded-2xl w-40 mr-5 hover:opacity-60 cursor-pointer" src="data:image/jpeg;base64,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" alt="insta icon"/>
                <p className="font-extrabold font-serif opacity-0 group-hover:opacity-100">sosahlawe@gmail.com </p>
            </div>
            <div className="group">
                <img className="rounded-full w-32 hover:opacity-60 cursor-pointer ml-5" src="data:image/jpeg;base64,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" alt="insta icon"/>
                <p className="font-extrabold font-serif opacity-0 group-hover:opacity-100">@the_lawe_way</p>

            </div>

        </div>
        </div>
    )
}

export default About
