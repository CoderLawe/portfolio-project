import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from "aos";
import { DownloadIcon } from '@heroicons/react/outline';


function HomeAbout() {
    return (
        <section className=" text-gray-200 bg-nav-image bg-fixed" id="about">
            <div className=" bg-black bg-opacity-80  mx-1 md:mx-5 grid sm:flex">
                <div className="md:w-1/2 p-5 justify-center sm:ml-12 sm:p-10 sm:border-r ">
                    <h1 className="sm:mr-10 mt-10 mb-10 sm:ml-20 text-2xl border-b-4 border-coolYellow">Who am I?</h1>
                <div >
                <p data-aos="fade-in" data-aos-duration="3000" className="">
My name is Lawe Sosah, and I'm 19 years old. I started programming around 7 years ago, mostly with Java, usually just as a passtime. Around 2017, I improved my knowledge of Python, and soon learned Webscraping, and Web development with the Django web 
                        framework. 
                    </p>
                </div>
                <p data-aos="fade-in" data-aos-duration="4000">With this framework, I built apps all the way from a school management system, to a porfolio/blog, to an interactive webscraper for car buyers, to a full-stack e-commerce website. I am now currently getting more and more familiar with Javascript, and some of its Libraries, specifically ReactJS, which I bult this site with.</p>

            <div className="mt-5  font-serif text-sm">
                <p className="border-b border-coolYellow flex justify-center mb-5">Contact Details</p>
                <p><span className="font-bold pr-3">Email:</span>sosahlawe@gmail.com</p>
                <p><span className="font-bold pr-3">Github:</span>CoderLawe</p>
                <p><span className="font-bold pr-3">Instagram:</span>@the_lawe_way</p>


                    
            </div>

            <div className="flex justify-center py-10">
                <a href="https://drive.google.com/file/d/1LB07TYxV7RImPEJJKyR3e0kwO6B42Bik/view?usp=sharing" target="_blank">
                    <div className="flex bg-gray-900 cursor-pointer justify-between rounded-lg hover:shadow-2xl tranform transition ease-out duration-200 active:scale-90">
                        <DownloadIcon className="text-white h-16"/>
                        <span className="text-white p-5 ">Download my resume</span>
                    </div>
                </a>
               
            </div>
                </div>
            

                <div className="sm:w-1/2 ">
                    <div className="flex justify-center">
                        <h5 data-aos="fade-in" className="font-serif text-gray-200 font-bold pt-5">Current Project: <span className="text-coolYellow font-normal font-serif ">  NextJS TailwindCSS restaurant app with admin CMS</span></h5>
                    </div>
                    <div className="grid  gap-x-2 gap-y-2 grid-cols-2 mt-8 mr-5">
                        <img data-aos="fade-in" data-aos-duration="2000"className ="h-48 hover:bg-opacity-75 transform transition duration-300 object-contain"src="https://cdn.discordapp.com/attachments/817048198022430761/912216484665782282/Screen_Shot_2021-11-22_at_7.31.14_AM.png" alt="restaurant photo" />
                        <img data-aos="fade-in" data-aos-duration="3000"className ="h-48 hover:bg-opacity-75 transform transition duration-300 object-contain "src="https://cdn.discordapp.com/attachments/817048198022430761/912216981946638376/Screen_Shot_2021-11-22_at_7.40.04_AM.png" alt="restaurant photo" />
                        <img data-aos="fade-in" data-aos-duration="4000"className ="h-48 hover:bg-opacity-75 transform transition duration-300 object-contain"src="https://cdn.discordapp.com/attachments/817048198022430761/912216484963549234/Screen_Shot_2021-11-22_at_7.30.40_AM.png" alt="restaurant photo" />
                        <img data-aos="fade-in" data-aos-duration="4000"className ="h-48 hover:bg-opacity-75 transform transition duration-300 object-contain "src="https://cdn.discordapp.com/attachments/817048198022430761/912238721758298142/Screen_Shot_2021-11-22_at_9.09.35_AM.png" alt="restaurant photo" />

                    </div>
              

            
                       

                </div>


            </div>
        </section>
    )
}

export default HomeAbout
