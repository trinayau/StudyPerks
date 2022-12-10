import './index.css';
import {Sidebar, Chat} from '../../components';
import { useParams } from 'react-router-dom';

const StudyRoom = () => {

    return ( 
    <div className="studyroom">
        <div className="studyroom-container">
        <Sidebar/>
        <Chat/>
        

        </div>
    </div> );
}
 
export default StudyRoom;
