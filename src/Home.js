import React, { useEffect, useState } from 'react'
import Card from './Card'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { getFirebase } from "./firebase";

import PostUpload from './PostUpload';
import { Link } from 'react-router-dom';

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
 <div className="flex p-30 grid sm:grid-cols-2 md:grid-cols-3 ml-5">
 {posts.map(blogPost => (
    <div>
            <Link to={`/${blogPost.slug}`}>
              <Card key={blogPost.slug} src={blogPost.coverImage} title={blogPost.title} description = {blogPost.description}/>
              {/* <Link to={`/${blogPost.slug}`}>Continue reading...</Link> */}
            </Link>
            
          {/* </div> */}
          </div>
      ))}
<Card
        src="/img/header-image.jpg"
        title="Django ecommerce site"
        description="Unique activities we can do together, led by a world of hosts."
        slug="my-first-blog-post"

    />
    <Card
        src="img/ecom_django.png"
        title="Django Blog/portfolio "
        description="Spaces that are more than just a place to sleep."
    />
    <Card
        src="img/covid-tracker-large.png"
        title="React Covid tracker"
        description="Comfortable privatse places, with room for friends or family."
    />
    <Card
        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
        title="Django Blog/portfolio "
        description="Spaces that are more than just a place to sleep."
    />
    <Card
        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
        title="Django Blog/portfolio "
        description="Spaces that are more than just a place to sleep."
    />
    <Card
        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
        title="Django Blog/portfolio "
        description="Spaces that are more than just a place to sleep."
    />
    </div>
   
   <div>
   </div>
    </div>
       
    )
}

export default Home
