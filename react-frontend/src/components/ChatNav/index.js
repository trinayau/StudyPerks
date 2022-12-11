import { Avatar, Button } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {updateDoc, doc} from 'firebase/firestore';
import {db} from '../../firebase';

const ChatNav = () => {
    const { roomId } = useParams();
    const {currentUser} = useContext(AuthContext);

    const handleLeaveRoom = (roomId) => {

      // update the user's room id to null
      updateDoc(doc(db, "users", currentUser.uid), {
        roomId: null,
      });

      // update the room's user list to remove the user
      updateDoc(doc(db, "rooms", roomId), {
        users: currentUser.uid,
      });

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
          alt={currentUser && currentUser.displayName.toUpperCase()}
          src="/static/images/avatar/1.jpg"
          sx={{height: "30px", width: "30px", fontSize: "14px", backgroundColor: "#EA526F" }}
        />
        <span className="username">{ currentUser && currentUser.displayName }</span>

      </div>
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
