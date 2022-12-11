import { Avatar } from "@mui/material";
import { useContext, useRef, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);

  const ref = useRef()

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    }, [message]);


  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <Avatar src="#"alt={message.senderName.toUpperCase()} name={message.senderId} />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
