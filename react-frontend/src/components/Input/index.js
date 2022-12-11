import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import { arrayUnion, Timestamp, updateDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Input = () => {

    const {roomId} = useParams();
    const {currentUser} = useContext(AuthContext);

    const [text, setText] = useState('')
    const handleSend = async(e) => {
        e.preventDefault()
        if(text !== '') {
            await updateDoc(doc(db, "roomMessages", roomId), {
            messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                senderName: currentUser.displayName,
                date: Timestamp.now(),

            })
        })
        
            setText('')
    }
    }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type a message"
        aria-label={"Type a message"}
        aria-required="true"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        <IconButton onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Input;
