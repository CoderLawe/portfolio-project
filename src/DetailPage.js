import React, { useState } from 'react'
import { Redirect } from 'react-router';
import { getFirebase } from './firebase';

const DetailPage = ({ match }) => {
    
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState()
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
        <div className="mb-30">
            <div className="flex border-b border-white overflow-scroll mb-4 ">
                <img src={currentPost.secondaryImage} className="justify-center m-2 shadow-2xl w-1/3 h-auto object-contain transform hover:scale-105 transition" alt={currentPost.coverImageAlt}/>
                <img src={currentPost.coverImage} className="m-2 w-1/2 object-contain transform hover:scale-105 transition " alt={currentPost.coverImageAlt}/>
                <img src={currentPost.thirdImage} className="m-2 w-1/3 object-contain transform hover:scale-105 transition" alt={currentPost.coverImageAlt}/>

            </div>
      <h1 className="text-3xl font-bold flex justify-center font-serif  mb-5 ">{currentPost.title}</h1>
      <em className="flex justify-center mb-4">Written on {currentPost.datePretty}</em>

      <div className="flex justify-center ml-30 mr-30">
         <p className="w-1/2"dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
      </div>
      <a className="cursor-pointer" href={currentPost.link}>Here's the link to a live demo site</a>

    
    </div>
    )
}


export default DetailPage;
