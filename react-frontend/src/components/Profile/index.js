import { Link, Navigate, useNavigate } from "react-router-dom";
import { getDocs, collection, query, where, getDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
    const navigate = useNavigate();

    const {currentUser} = useContext(AuthContext);

    const handleSelect = async() => {
        // check whether room exists in firestore, if not create new one:
        const roomId = currentUser.uid
        try{
        const res = await getDoc(doc(db, "rooms", roomId));
        const data = res.data();

        if(!res.exists()){
            // create room in room collection
            await setDoc(doc(db, "rooms", roomId), {
                users: [currentUser.uid],
                messages: [],
                timer: 25,
                break: 5,
                subject: "General",
                host: currentUser.uid,
                active: true,
                desc: "This is a general room for all subjects",
                createdAt: serverTimestamp(),
            });
            navigate("/studyroom/" + roomId)
        } else {
            alert("You already have a room");
            navigate("/studyroom/" + roomId)
        }

        // get res data from firestore:
  
            console.log(data);
        } catch(err){
            console.log(err);
        }

        //create room in firestore

    }

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
        <div class="btn" onClick={handleSelect}>create your own</div>
        <a href="#">See more available rooms <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
</div>
    </> );
}
 
export default Profile;
