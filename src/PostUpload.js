import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import { storage, db } from './firebase';
import firebase from 'firebase';

const PostUpload = ({username}) => {
// Fields are empty by default
    const [description, setDescription] = useState(''); 
    const [image, setImage] = useState(null);
    // const [url, setUrl] = useState('');
    const [progress, setProgress] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]){ //Get the first file
            setImage(e.target.files[0]); //Set the image in state to that
        }

    };


    const handleUpload = () => {   //UPLOAD
        const uploadTask = storage.ref(`images/${image.name}`).put(image); //Get a reference from storage, makes a new folder called images

        uploadTask.on(
            "state_changed",
            (snapshot) => {          // This is where we wwrite the progress function...

            const progress = Math.round( //This equation qorks out a number between 0-100 and gives you a progress value from zero to 100 based on how much inof has been sent out, and how much is left
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress); //We then set the progress number from 0-100
            },
            (error) =>{
                // Error funcition
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                .ref("images")              //DOWNLOAD
                .child(image.name)
                .getDownloadURL()// Needs to get the download URL so that whatever it is is usable
                .then(url  =>{ //Gets the URL
                  db.collection("posts").add({
                    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    //   title: title,
                       img: url, //This was uploaded to firebase storage, then we got a download link. This code now gets that download link, and pushes it as part of a post.
                      description:description

                  });                  //This is where you post the image into the database
                  setProgress(0);
                  setDescription("");
                  setImage(null);
                });
                                    //Getting a download link. Itis already uploaded, so it just needs to fetch the data
                // The complete function... 
            })                                            //in firebase, gets the name then literally puts the grabbed image in
                                                                        
    }
    return (
        <div className="imageupload">
    

      <progress className="imageupload__progress" value={progress} max="100"/>

      <input type="text" placeholder="Enter a caption..." onChange = {event => setDescription(event.target.value)} /> 
      <input type="file" onChange={handleChange}/>

      <Button onClick={handleUpload}>
        Upload
      </Button>
        </div>
    )
}

export default PostUpload
