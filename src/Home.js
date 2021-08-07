import React, { useEffect, useState } from 'react'
import Card from './Card'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { getFirebase } from "./firebase";

import PostUpload from './PostUpload';
import { Link } from 'react-router-dom';
import { CodeIcon, CogIcon, CursorClickIcon, DatabaseIcon, EyeIcon, PuzzleIcon } from '@heroicons/react/outline';
import Message from "./Message";
import Aos from 'aos';
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
  

    

    useEffect(() => {
      Aos.init({duration:2000})
         
      }, [])
  
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

      console.log('posts',posts)

    return (
     // MODAL



    //  MODAL
    
    <div>
      <div className="">

      </div>
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
      
      </div>
 <div className=" grid sm:grid-cols-2 md:grid-cols-2 ml-5 md:px-40 bg-nav-image bg-cover bg-fixed">
  
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


{posts.slice(4,5).map(blogPost => (
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
   <div className="bg-nav-image bg-cover bg-fixed">
   <div className="text-white py-32">
      <div className="md:flex justify-between px-2">
      <div className="md:w-1/2">
        <div className="flex space-x-10">
          <div className="h-36" data-aos="zoom-in">
              <img className=" h-36"src="https://www.djangoproject.com/m/img/logos/django-logo-negative.png"/>
          </div>

          <div className="h-36" data-aos="zoom-in">
              <img className=" h-36"src="data:image/png;base64,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"/>
          </div>
        </div>


        <div className="flex space-x-10 mt-16">
          <div className="h-36" data-aos="zoom-in">
              <img className=" h-36"src="https://fastnetmon.com/wp-content/uploads/2016/08/python-logo.png"/>
          </div>

          <div className="h-36" data-aos="zoom-in">
              <img className=" h-36"src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"/>
          </div>
        </div>

      </div>
       <div className="bg-gray-900 bg-opacity-50 p-28 md:w-1/2 text-4xl font-serif">
          <h1 className="flex justify-center"> "Lawe Sosah is.... definitely a programmer"</h1>
          <p className="text-sm font-bold flex justify-end"> - Lawe Sosah</p>

       </div>

    </div>

   </div>
    </div>
   
    </div>
  
       
    )
}

export default Home
