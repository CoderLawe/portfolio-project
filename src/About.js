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
                <img className="rounded-2xl w-40 mr-5 hover:opacity-60 cursor-pointer" src="" alt="insta icon"/>
                <p className="font-extrabold font-serif opacity-0 group-hover:opacity-100">@the_lawe_way</p>

            </div>

        </div>
        </div>
    )
}

export default About
