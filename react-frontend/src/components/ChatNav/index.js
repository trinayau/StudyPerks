import { Avatar, Button } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {updateDoc, doc, getDoc} from 'firebase/firestore';
import {db} from '../../firebase';

const ChatNav = () => {
    const { roomId } = useParams();
    const {currentUser} = useContext(AuthContext);
    // const [topic, setTopic] = useState(''
    // )

    const navigate = useNavigate();

    const handleLeaveRoom = async (roomId) => {


      // get user array for roomid in rooms collection:
      const roomRef = doc(db, "rooms", roomId);
      const roomDoc = await getDoc(roomRef);
      const roomUsers = roomDoc.data().users;

      // remove current user from roomUsers array:
      const newRoomUsers = roomUsers.filter((user) => user.uid !== currentUser.uid);

      // update roomUsers array in rooms collection:
      await updateDoc(roomRef, {
        users: newRoomUsers
      });

      // navigate to account page:
      navigate("/account")

    }

        

  return (
    <div className="chatnav">
      {/* <span className="roomnum">Study Room</span> */}
      

      <div
        className="user"
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Avatar
          alt={currentUser && currentUser.displayName}
          src="/static/images/avatar/1.jpg"
          sx={{height: "30px", width: "30px", fontSize: "14px", backgroundColor: "#EA526F" }}
        />
        <span className="username">{ currentUser && currentUser.displayName }</span>

      </div>
      {/* set topic: */}
      {/* <div className="topic">
        <span className="topicTitle">Topic:</span>
       
        <form className="topicForm" onSubmit={handleTopic}>
          <input type="text" placeholder="Enter topic" />
        </form>
      </div> */}

      
      <Button
        variant="contained"
        className="leaveBtn"
        sx={{ backgroundColor: "#AA384A", color: "#fff", fontSize: "14px", borderRadius: "5px",
        "&:hover": {
          backgroundColor: "#EA526F",
          color: "#fff",
          transition: "all 0.2s ease-in",
        }
         }}
        onClick = {() => handleLeaveRoom(roomId)}
      >Leave</Button>
    </div>
  );
};

export default ChatNav;
