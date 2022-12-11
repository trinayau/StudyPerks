import { Link, Navigate, useNavigate } from "react-router-dom";
import { getDocs, collection, query, where, getDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
    const navigate = useNavigate();

    const {currentUser} = useContext(AuthContext);

    const [rooms, setRooms] = useState([]);

    const handleSelect = async() => {
        // check whether room exists in firestore, if not create new one:
        const roomId = currentUser.uid
        try{
        const res = await getDoc(doc(db, "rooms", roomId));
        

        if(!res.exists()){
            // create room in room collection
            await setDoc(doc(db, "rooms", roomId), {
                // users is an array containing objects of uid and displayName:
                users: [{uid: currentUser.uid, displayName: currentUser.displayName}],
                messages: [],
                timer: 25,
                break: 5,
                subject: "General",
                host: currentUser.uid,
                active: true,
                desc: "This is a general room for all subjects",
                createdAt: serverTimestamp(),
            });
            // create roomMessages collection:
            await setDoc(doc(db, "roomMessages", roomId), {
                messages: [],
            });

            navigate("/studyroom/" + roomId)
        } else {
            alert("You already have a room");
            navigate("/studyroom/" + roomId)
        }
        } catch(err){
            console.log(err);
        }
    }

    // fetch rooms from firestore:


    useEffect(() => {
        const getRooms = async() => {
            const q = query(collection(db, "rooms"));
            const querySnapshot = await getDocs(q);
            setRooms(querySnapshot.docs.map((doc) => doc.data()));
        }
        getRooms();
        return () => {
            getRooms()
        };
    }, []);

    const handleJoin = async(roomId) => {
        // check whether room exists in firestore, if not create new one:
        try{
        const res = await getDoc(doc(db, "rooms", roomId));
        const data = res.data();

        // check if user is already in room users array in firestore:
        const userExists = data.users.some((user) => user.uid === currentUser.uid);
        
        if(res.exists() & !userExists){
            // add currentUser.uid to user array in room:
            const newUsers = data.users;
            newUsers.push({uid: currentUser.uid, displayName: currentUser.displayName, topic: currentUser.topic});
            await setDoc(doc(db, "rooms", roomId), {
                users: newUsers,
            }, {merge: true});
            navigate("/studyroom/" + roomId)
        } else if(res.exists() & userExists){
            navigate("/studyroom/" + roomId)

        } else {
            alert("Room does not exist");
        }
        } catch(err){
            console.log(err);
        }
    }

            

    return ( <>
    <hr/>

<div class="features">

    <h3>Join a room</h3>

    <div class="section">
        {rooms && rooms.map((room) => (
            <div onClick={()=>{handleJoin(room.host)}} className="col-4">
                Users: {room.users.length}/10<br/>
                Timer: {room.timer} | {room.break}<br/>
                Subject: {room.subject}
            </div>
        ))}

        
    </div>

    <div class="room-links prof">
        <div class="btn" onClick={handleSelect}>create your own</div>
        <a href="#">See more available rooms <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
</div>
    </> );
}
 
export default Profile;
