import React, { useEffect, useState } from 'react'
import Card from './Card'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { getFirebase } from "./firebase";

import PostUpload from './PostUpload';
import { Link } from 'react-router-dom';
import { CodeIcon, CogIcon, CursorClickIcon, DatabaseIcon, EyeIcon, PuzzleIcon } from '@heroicons/react/outline';
import Message from "./Message";
function getModalStyle() {
    const top = 50 
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper:{
      position: 'absolute',
      width:400,
      backgroundColor: theme.palette.background.paper,
      border:'2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2,4,3),
    },
  }));

function Home() {
    const classes = useStyles();
    const [modalStyle] =useState(getModalStyle); //Checks if the modal style is open or not
    const [posts,setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);
    

    useEffect(() =>{
        //Where the code runs   
        // const snapshotVal = snapshot.val();
        //Snapshot, basically takes a snap every single time a document gets added. It will update and refire this bit of code
        
         
        if (loading && !blogPosts.length) {
          getFirebase()
            .database()
            .ref("/posts")
            .orderByChild("dateFormatted")
            .once("value")
            .then(snapshot => {
              let posts = [];
              const snapshotVal = snapshot.val();
              for (let slug in snapshotVal) {
                posts.push(snapshotVal[slug]);
              }
         
              const newestFirst = posts.reverse();
              setPosts(newestFirst);
              setLoading(false);
            });
        }
         
        if (loading) {
          return <h1>Loading...</h1>;
        } // This is the posts collection that was setup in firebase

      },[]);


    return (
     // MODAL



    //  MODAL
    
    <div>

      <div className="flex  justify-between sm:ml-20 sm:mr-20 p-10">
        
        <div className="w-28 cursor-pointer mr-5 hover:animate-fade-in-down  transform duration-200">
         <CursorClickIcon />
         <p className="font-serif sm:text-2xl font-extrabold">FRONTEND</p>

        </div>

    
        <div className="w-28">
         <CogIcon />
         <p className="font-serif sm:text-2xl font-extrabold">BACKEND</p>


        </div>
        
        <div className="w-28">
         <DatabaseIcon />
         <p className="font-serif sm:text-2xl font-extrabold">DATABASE</p>


        </div>

        <div className=" w-28">
            <PuzzleIcon />
            <p className="font-serif sm:text-2xl font-extrabold">FULLSTACK</p>


          
          

        </div>

      </div>

      <div className="border-b-7 divide-y divide-light-blue-400 mt-10">
         <h1 className="italic flex justify-center font-serif text-xl divide-y divide-light-blue-400">Some of My projects </h1>
         <p></p>
      </div>
 <div className=" grid sm:grid-cols-2 md:grid-cols-2 ml-5 md:px-40">
 {posts.slice(0,1).map(blogPost => (
    <div data-aos="fade-up-left">
            <Link to={`/${blogPost.slug}`}>
              <Card key={blogPost.slug} src={blogPost.coverImage} title={blogPost.title} description = {blogPost.shortDescription} content = {blogPost.description}/>
              {/* <Link to={`/${blogPost.slug}`}>Continue reading...</Link> */}
            </Link>
            
          {/* </div> */}
          </div>
      ))}


{posts.slice(1,2).map(blogPost => (
    <div data-aos="fade-up-right">
            <Link to={`/${blogPost.slug}`}>
              <Card key={blogPost.slug} src={blogPost.coverImage} title={blogPost.title} description = {blogPost.shortDescription} content = {blogPost.description}/>
              {/* <Link to={`/${blogPost.slug}`}>Continue reading...</Link> */}
            </Link>
            
          {/* </div> */}
          </div>
      ))}

{posts.slice(2,3).map(blogPost => (
    <div data-aos="fade-down-right">
            <Link to={`/${blogPost.slug}`}>
              <Card key={blogPost.slug} src={blogPost.coverImage} title={blogPost.title} description = {blogPost.shortDescription} content = {blogPost.description}/>
              {/* <Link to={`/${blogPost.slug}`}>Continue reading...</Link> */}
            </Link>
            
          {/* </div> */}
          </div>
      ))}

{posts.slice(3,4).map(blogPost => (
    <div data-aos="fade-down-left">
            <Link to={`/${blogPost.slug}`}>
              <Card key={blogPost.slug} src={blogPost.coverImage} title={blogPost.title} description = {blogPost.shortDescription} content = {blogPost.description}/>
              {/* <Link to={`/${blogPost.slug}`}>Continue reading...</Link> */}
            </Link>
            
          {/* </div> */}
          </div>
      ))}

{posts.slice(5,).map(blogPost => (
    <div data-aos="fade-down-left">
            <Link to={`/${blogPost.slug}`}>
              <Card key={blogPost.slug} src={blogPost.coverImage} title={blogPost.title} description = {blogPost.shortDescription} content = {blogPost.description}/>
              {/* <Link to={`/${blogPost.slug}`}>Continue reading...</Link> */}
            </Link>
            
          {/* </div> */}
          </div>
      ))}


    </div>
    <Message />
   
   <div>
   </div>
    </div>
       
    )
}

export default Home
