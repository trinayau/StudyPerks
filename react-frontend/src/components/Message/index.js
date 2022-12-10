import {Avatar} from '@mui/material';
const Message = () => {
    return ( <div className="message owner">
        <div className="messageInfo">
            <Avatar alt="A" name="A" />
            <span>Just now</span>
        </div>
        <div className="messageContent">
            <p>Hey guys!</p>


        </div>
    </div> );
}
 
export default Message;
