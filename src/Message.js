import { Button } from '@material-ui/core';
import { useState } from 'react';
import { db } from './firebase';


function Message() {
    const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [done,setDone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const clearInputs =() =>{
    setName('');
    setEmail('');
    setMessage('');
}

const postMessage = (event) =>{
    event.preventDefault();
    db.collection("messages").add({
      name:name,
      email:email,
      message:message

    });

    clearInputs();
    setDone(true)

  }
    return (
        <div>
        <div className="flex justify-center items-center">
        <div className="text-gray-200  rounded-2xl sm:ml-5 pb-5 bg-transparent">
          {/* <p className="font-serif font-extrabold flex justify-center  border-b border-gray-200 py-5">Let's get in touch! </p> */}
         

        <div className="p-3 items-center flex-col">

        <div className="block space-y-1 py-2">
            <label className="sm:mr-4 mr-2 font-serif flex justify-center">Name</label>
            <input className="text-black rounded-md p-2"type="text" value={name} onChange={(e) => setName(e.target.value)}placeholder="Enter your first name"/>
          </div>

        <div className="block space-y-1 py-2">
            <label className="sm:mr-4 mr-2 font-serif flex justify-center">Email:</label>
            <input className="text-black rounded-md p-2"type="text" value={email}
             onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter your email address"/>
          </div>

          <div className="block space-y-1  py-2">
            <label className="sm:mr-2 mr-2 font-serif flex justify-center">Message:</label>
            <textarea className="text-black rounded-md h-56 pt-24 pl-5" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message"/>
          </div>


        </div>


         
         
        <div className="flex justify-center">
          <Button color="primary" className=" " variant="outlined" onClick={postMessage}>Submit</Button>
        </div>
        <div className={done ? 'visible bg-green-500 p-3 mt-5' : 'hidden' }>
            <p className="flex justify-center">Your message has been sent</p>
        </div>
        </div>
          {/* <div className="w-1/2 flex justify-between ml-4 mr-4 w-110">
               <ExtraCard title="Click the image below to be redirected to my Github" />
          </div> */}
           
      

    
    </div>
        </div>
    )
}

export default Message
