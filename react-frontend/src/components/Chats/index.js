import { Avatar } from '@mui/material';
const Chats = () => {
    return ( <div className="chats">
                <div className="userChat">
            <Avatar alt="Bella" className="userAvatar" src="/static/images/avatar/1.jpg" sx={{ mr: 1, height: "30px", width: "30px", fontSize: "14px", backgroundColor: "#EA526F" }}/>
            <div className="userChatInfo">
                <span className="username">Bella</span>
                <p>Studying: Biology 101</p>
            </div>
        </div>

        <div className="userChat">
            <Avatar className="userAvatar" alt="Cn" src="/static/images/avatar/1.jpg" sx={{ mr: 1, height: "30px", width: "30px", fontSize: "14px", backgroundColor: "#EA526F" }}/>
            <div className="userChatInfo">
                <span className="username">Charlie</span>
                <p>Studying: Chemistry</p>
            </div>
        </div>
        <div className="userChat">
            <Avatar className="userAvatar" alt="Dn" src="/static/images/avatar/1.jpg" sx={{ mr: 1, height: "30px", width: "30px", fontSize: "14px", backgroundColor: "#EA526F" }}/>
            <div className="userChatInfo">
                <span className="username">Danielle</span>
                <p>Studying: Data Science</p>
            </div>
        </div>

    </div> );
}
 
export default Chats;
