import './index.css';
import {Sidebar, Chat, BackButton} from '../../components';


const StudyRoom = () => {

    return ( 
        <>
    <div className="studyroom">
        <div className="studyroom-container">
        <Sidebar/>
        <Chat/>
        </div>
        <BackButton/>
    </div>
    </> );
}
 
export default StudyRoom;
