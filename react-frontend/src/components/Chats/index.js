import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Chats = () => {
  const { roomId } = useParams();
  const [roomUsers, setRoomUsers] = useState([]);

  const { currentUser } = useContext(AuthContext);

  // realtime get users in room
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "rooms", roomId), (doc) => {
        setRoomUsers(doc.data().users);
      });
      return () => unsub();
    };
    roomId && getChats();
  }, [roomId]);

  console.log(roomUsers.forEach((user) => console.log(user)));

  return (
    <div className="chats">
        {roomUsers?.map((user) => ( 
        <div className="userChat">
        <Avatar
          alt="Bella"
          className="userAvatar"
          src="/static/images/avatar/1.jpg"
          key={user.uid}
          sx={{
            mr: 1,
            height: "30px",
            width: "30px",
            fontSize: "14px",
            backgroundColor: "#EA526F",
          }}
        />
        <div className="userChatInfo">
          <span className="username">{user.displayName}</span>
          <p>Studying: Biology 101</p>
        </div>
      </div>

        ))
        }
     
      {/* <div className="userChat">
        <Avatar
          className="userAvatar"
          alt="Cn"
          src="/static/images/avatar/1.jpg"
          sx={{
            mr: 1,
            height: "30px",
            width: "30px",
            fontSize: "14px",
            backgroundColor: "#EA526F",
          }}
        />
        <div className="userChatInfo">
          <span className="username">Charlie</span>
          <p>Studying: Chemistry</p>
        </div>
      </div>
      <div className="userChat">
        <Avatar
          className="userAvatar"
          alt="Dn"
          src="/static/images/avatar/1.jpg"
          sx={{
            mr: 1,
            height: "30px",
            width: "30px",
            fontSize: "14px",
            backgroundColor: "#EA526F",
          }}
        />
        <div className="userChatInfo">
          <span className="username">Danielle</span>
          <p>Studying: Data Science</p>
        </div>
      </div> */}
    </div>
  );
};

export default Chats;
