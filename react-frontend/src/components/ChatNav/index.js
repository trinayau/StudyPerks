import { Avatar, Button } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { useParams } from "react-router-dom";

const ChatNav = () => {
    const { roomId } = useParams();
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
          alt="Kei Chan"
          src="/static/images/avatar/1.jpg"
          sx={{ mr: 1, height: "30px", width: "30px", fontSize: "14px", backgroundColor: "#EA526F" }}
        />
        <span className="username">Kei</span>
      </div>
    </div>
  );
};

export default ChatNav;
