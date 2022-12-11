import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { IconButton } from '@mui/material';
import Messages from '../Messages';
import Input from '../Input';
import Pomodoro from '../Pomodoro';
import SimonGame from '../SimonGame';
import { useState } from 'react';

const Chat = () => {

    const [showPomodoro, setShowPomodoro] = useState(true);
    const [showChat, setShowChat] = useState(false);
    const [showGame, setShowGame] = useState(false);

    const handlePomodoro = () => {
        setShowPomodoro(true);
        setShowChat(false);
        setShowGame(false);
    }

    const handleChat = () => {
        setShowPomodoro(false);
        setShowChat(true);
        setShowGame(false);
    }

    const handleGame = () => {
        setShowPomodoro(false);
        setShowChat(false);
        setShowGame(true);
    }

    const handleMessage = () => {
        console.log("message")
    }
    return ( <div className="chat">
       <div className="chatInfo" style={{color: 'white'}}>
            Instant Study Group
        <div className="chatIcons">
            <IconButton onClick={()=>handlePomodoro()}>
                <AccessAlarmIcon />
            </IconButton>
            <IconButton onClick={()=>handleChat()}>
                <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton onClick={()=>handleGame()}>
                <SportsEsportsIcon />
            </IconButton>
        </div>
       </div>
         {showPomodoro && <Pomodoro/>}
            {showChat && (<> <Messages/> <Input/></>)}
            {showGame && <SimonGame/>}
    </div> );
}
 
export default Chat;
