import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { db } from './firebase';

function ViewMessages() {
    const [messages,setMessages] = useState([]);



    useEffect(() =>{
        db.collection('messages')
        .onSnapshot(snapshot =>{
            setMessages(snapshot.docs.map(doc=>({
                id:doc.id,
                message:doc.data()
            })));
        })
    },[]);


    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="grid grid-cols-3">
            {messages.map(message => (
            <div>
            {/* Card start */}
            <div className="bg-gray-900 px-10 py-5 rounded-2xl mt-6 ml-6">
                <div>
                     <h1 className="font-bold font-serif border-b border-gray-700">Left by: {message.message.name}</h1>
                     <p >On: 24/07/21</p>
                     <p className="border-b border-gray-700" >Email - {message.message.email}</p>
                </div>

                <div>
                    <p> {message.message.message}</p>
                </div>
            </div>

            
            {/* Card end */}
        </div>
            
      ))}
            </div>
            
           
        </div>
    )
}

export default ViewMessages
