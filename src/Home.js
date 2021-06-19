import React, { useEffect, useState } from 'react'
import Card from './Card'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


import { db, auth } from './firebase';
import PostUpload from './PostUpload';

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

    useEffect(() =>{
        //Where the code runs                 //Snapshot, basically takes a snap every single time a document gets added. It will update and refire this bit of code
        db.collection('posts')
    .onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data()
            
            })));
        }) // This is the posts collection that was setup in firebase

      },[]);


    return (
     // MODAL



    //  MODAL
    <div>
 <div className="flex p-30 grid md:grid-cols-3 ml-5">
 {
            posts.map(({id, post}) => (
              <Card key={id} title={post.title} src={post.img} description={post.description}/>
            )) //.map works kinda like a for loop in python django
          }
<Card
        src="/img/header-image.jpg"
        title="Django ecommerce site"
        description="Unique activities we can do together, led by a world of hosts."
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
       <PostUpload />
   </div>
    </div>
       
    )
}

export default Home
