import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { IconButton } from '@mui/material';
import Messages from '../Messages';
import Input from '../Input';

const Chat = () => {
    return ( <div className="chat">
       <div className="chatInfo">
            7-8pm Study Group
        <div className="chatIcons">
            <IconButton>
                <AccessAlarmIcon />
            </IconButton>
            <IconButton>
                <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton>
                <SportsEsportsIcon />
            </IconButton>
        </div>
       </div>
       <Messages/>
         <Input/>
    </div> );
}
 
export default Chat;
