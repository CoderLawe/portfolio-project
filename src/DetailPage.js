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
      <div>
        <div className="sticky top-0">
          <Navbar />
        </div>
        <div>
        <h1 className="sm:text-3xl text-xl py-5 font-bold flex justify-center font-serif  mb-5 ">{currentPost.title}</h1>
                  <em className="flex justify-center">Written on {currentPost.datePretty}</em>
        </div>
        <div className="bg-gray-800 p-10 md:p-20 md:mr-32 ml-10 mr-10 md:ml-32 rounded-2xl">

            <div>
              <p>{currentPost.content}</p>
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
        <div className="sm:flex justify-between  p-10 overflow-x-scroll">
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
          
        <Message />
      </div>
       
    )
}


export default DetailPage;