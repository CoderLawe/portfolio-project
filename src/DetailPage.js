import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { Redirect } from 'react-router';
import ExtraCard from './ExtraCard';
import { db, getFirebase } from './firebase';
import Navbar from './Navbar';
import Message from "./Message";

const DetailPage = ({ match }) => {
    
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();
  


  const postDoesNotExist = !currentPost;
  if (loading && !currentPost) {
    getFirebase()
      .database()
      .ref()
      .child(`/posts/${slug}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        setLoading(false);

      });
  }
  
  if (loading) {
    return <h1>Loading...</h1>;
  }
  
  if (postDoesNotExist) {
    return <Redirect to="/" />;
  }

    return (
      <div className="bg-nav-image bg-fixed">
    

        <div>
        <h1 className="sm:text-3xl text-xl py-5 font-bold flex justify-center font-serif  mb-5 border-b border-coolYellow">{currentPost.title}</h1>
                  <em className="flex justify-center">Written on {currentPost.datePretty}</em>
        </div>
        <div>


        <div className="md:flex justify-center">
            <div className="bg-gray-800 bg-opacity-70  rounded-2xl flex justify-center md:w-1/2">
              <div className=" text-gray-200 p-20">
                <p>{currentPost.content}</p>
              </div>
            </div>
    {/* <div>
      <p className="font-serif font-bold text-3xl">Live Demo</p>
       <iframe width="500" height="500" src="https://amazon-clone-psi-nine.vercel.app/"/>

    </div> */}
          </div>
        </div>
      
        


        {/* ds */}
        {/* for later */}
        {/* <div className="flex justify-between ">
        <div className="flex border-b border-white overflow-x-scroll overflow-y-hidden mt-0">
                <img src={currentPost.secondaryImage} className="justify-center m-2 w-1/3 object-contain transform hover:scale-105 transition" alt={currentPost.coverImageAlt}/>
                <img src={currentPost.coverImage} className="m-2 w-1/2 object-contain transform hover:scale-105 transition " alt={currentPost.coverImageAlt}/>
                <img src={currentPost.thirdImage} className=" w-1/3 object-contain transform hover:scale-105 transition" alt={currentPost.coverImageAlt}/>

            </div>
        </div> */}
         
        <div className="sm:flex justify-between   p-10 overflow-x-scroll">
               <div className="mr-2">
               <img src={currentPost.secondaryImage} className="justify-center m-2   object-contain transform hover:scale-105 transition" alt={currentPost.coverImageAlt}/>
                </div>

                <div className="mr-2">
                <img src={currentPost.coverImage} className="justify-center m-2  object-contain transform hover:scale-105 transition" alt={currentPost.coverImageAlt}/>


                </div>

                <div className="mr-2">
                    <img src={currentPost.thirdImage} className="justify-center m-2  object-contain transform hover:scale-105 transition" alt={currentPost.coverImageAlt}/>

                </div>

     
     
        </div>
          <div className="rounded-2xl py-5 bg-white text-black">
            <p className="p-5 text-coolYellow cursor-pointer"><strong className="text-black">Link to live demo</strong> - <a target="_blank" href={currentPost.link}>{currentPost.link}</a></p>
          </div>
        {/* <Message /> */}
        </div>
       
       
    )
}


export default DetailPage;