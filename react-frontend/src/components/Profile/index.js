import { Link } from "react-router-dom";
const Profile = () => {

    return ( <>
    <hr/>

<div class="features">

    <h3>Join a room</h3>

    <div class="section">

        <Link to="/studyroom/1" className="col-4">
            Users: 3/10<br/>
            Timer: 25 | 5<br/>
            Subject: General<br/>
            {/* <span><Link to="/studyroom/1">Join</Link></span> */}

        </Link>
        <Link to="/studyroom/2" class="col-4">
            Users: 7/10<br/>
            Timer: 50 | 10<br/>
            Subject: Maths
        </Link>
        <Link to="/studyroom/3" class="col-4">
            Users: 5/10<br/>
            Timer: 45 | 15<br/>
            Subject: Chemistry
        </Link>
        <Link to="/studyroom/4" class="col-4">
            Users: 1/10<br/>
            Timer: 30 | 5<br/>
            Subject: History
        </Link>
    </div>

    <div class="room-links prof">
        <div class="btn">create your own</div>
        <a href="#">See more available rooms <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
</div>
    </> );
}
 
export default Profile;
