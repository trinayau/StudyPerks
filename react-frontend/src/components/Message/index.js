import { Avatar } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { currentuser } = useContext(AuthContext);

  return (
    <div className="message owner">
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
