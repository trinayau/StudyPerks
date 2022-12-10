import { useNavigate } from "react-router-dom";
import {Button} from '@mui/material';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return ( <div className="backbutton">

        <Button onClick={()=> handleBack() } sx={{
            backgroundColor: "#EA526F",
            color: "white",
            borderRadius: "5px",

           ' &:hover': {
                backgroundColor: "#07060A",
                color: "white",
                transition: "all 0.2s ease-in"
            }

        }}>Back</Button>

    </div> );
}
 
export default BackButton;
