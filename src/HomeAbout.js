import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from "aos";


function HomeAbout() {
    return (
        <div className=" text-gray-700">
            <div className=" bg-white mx-5 grid sm:flex">
                <div className="md:w-1/2 p-5 justify-center sm:ml-12 sm:p-10 sm:border-r ">
                    <h1 className="sm:mr-10 mt-10 mb-10 sm:ml-20 text-2xl border-b-4 border-coolYellow">Who am I?</h1>
                <div >
                <p className="">
My name is Lawe Sosah, and I'm 19 years old. I started programming around 7 years ago, mostly with Java, usually just as a passtime. Around 2017, I improved my knowledge of Python, and soon learned Webscraping, and Web development with the Django web 
                        framework. 

                    </p>
                </div>
                <p>With this framework, I built apps all the way from a school management system, to a porfolio/blog, to an interactive webscraper for car buyers, to a full-stack e-commerce website. I am now currently getting more and more familiar with Javascript, and some of its Libraries, specifically ReactJS, which I bult this site with.</p>

                </div>
            

                <div className="sm:w-1/2 grid justify-between space-y-2 space-x-2 ">
                    <div className="flex justify-between mt-5 ">
                        <div className="px-2 bg-tradex-home  h-52 w-1/2 group bg-cover  mb-2 hover:opacity-60 ">
                            <div className="opacity-0  transform duration-200  cursor-pointer">
                                <div className="bg-gray-200 rounded-2xl">
                                <h1 className=" mt-20 ml-10 animate-fade-in-down text-black font-extrabold text-2xl ">Simple Designs</h1> 

                                </div>
                                    

                            </div>
                        </div>

                        <div className="px-2 bg-ecom-home ml-2 h-52 w-1/2 group bg-cover mb-2 hover:opacity-60">
                            <div className="opacity-0  transform duration-300 cursor-pointer">
                            <div className="bg-gray-200 rounded-2xl">
                                <h1 className=" mt-20 ml-10 animate-fade-in-down text-black font-extrabold text-2xl ">Simple Designs</h1> 

                                </div>
                                    

                            </div>
                        </div>

                        <div>

                        </div>

                    </div>

                    <div className="flex justify-between space-x-2 ">
                        <div className="px-2 bg-admin-image  h-52 w-1/2 group bg-cover  mb-2 hover:opacity-60">
                            <div className="opacity-0  transform duration-200  cursor-pointer">
                                <div className="bg-gray-200 rounded-2xl">
                                <h1 className=" mt-20 ml-10 animate-fade-in-down text-black font-extrabold text-2xl ">Simple Designs</h1> 

                                </div>
                                    

                            </div>
                        </div>

                        <div className="px-2 bg-netflix-home  h-52 w-1/2 group bg-cover mb-2 hover:opacity-60">
                            <div className="opacity-0  transform duration-300  cursor-pointer">
                            <div className="bg-gray-200 rounded-2xl">
                                <h1 className=" mt-20 ml-10 animate-fade-in-down text-black font-extrabold text-2xl ">Simple Designs</h1> 

                                </div>
                                    

                            </div>
                        </div>

                        <div>

                        </div>

                    </div>

                  


                        

        

                        
                       

                </div>


            </div>
        </div>
    )
}

export default HomeAbout
