import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
const Input = () => {
    return ( <div className="input">
        <input type="text" placeholder="Type a message" aria-label={ "Type a message"}
  aria-required="true"/>
        <div className="send">
            <IconButton>
                <SendIcon />
            </IconButton>

        </div>
    </div> );
}
 
export default Input;
