import { Avatar, Button } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ChatNav = () => {
    const { roomId } = useParams();
    const {currentUser} = useContext(AuthContext);
  return (
    <div className="chatnav">
      <span className="roomnum">Study Room #{roomId}</span>

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
          sx={{ mr: 1, height: "30px", width: "30px", fontSize: "14px", backgroundColor: "#EA526F" }}
        />
        <span className="username">{ currentUser && currentUser.displayName }</span>

      </div>
    </div>
  );
};

export default ChatNav;
