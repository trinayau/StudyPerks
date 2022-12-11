
import Message from '../Message';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { onSnapshot, doc } from "firebase/firestore";
import { useParams } from 'react-router-dom';


const Messages = () => {
    const [messages, setMessages] = useState([]);
    const {roomId} = useParams();

    useEffect(() => {
        const getMessages = async() => {
            const unSub = onSnapshot(doc(db, "roomMessages", roomId), (doc) => {
                doc.exists() && setMessages(doc.data().messages);
            });
            
            return unSub;

        } 
        getMessages();
        console.log(messages)
        return () => {
            getMessages()
        };
    }, []);

    

    return ( <div className="messages">
        {messages.length > 1 && messages.map((message) => (
            <Message key={message.id} message={message}/>
        ))}



    </div> );
}
 
export default Messages;
