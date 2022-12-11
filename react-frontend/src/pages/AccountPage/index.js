import CatProfile from './images/icons8-cat-profile-80.png'
import Timer from './images/icons8-timer-64.png'
import Fire from './images/icons8-fire-94.png'
import Rank from './images/icons8-ranking-64.png'
import { useContext, useState, useParams } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { db } from '../../firebase'
import {Button, Snackbar, Alert} from '@mui/material'
import { doc, setDoc, getDoc } from "firebase/firestore";
import {getAuth} from 'firebase/auth'


const AccountPage = () => {
    const {currentUser} = useContext(AuthContext)
    const [topic, setTopic] = useState(''
    )
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;

    const handleClick = (newState) => {
        setState({ open: true, ...newState });
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setState({ ...state, open: false });
    };

    const handleTopic = async (e) => {
        e.preventDefault()
        const topic = e.target[0].value
    //    update topic in users array in rooms collection:
        const userRef = doc(db, "rooms", currentUser.uid);
        const userDoc = await getDoc(userRef);
        const user = userDoc.data();
        await setDoc(userRef, {
            ...user,
            topic: topic
        });

    }

    const showForm = () => {
        document.querySelector('form').style.display = 'block'
    }

    const handleClaim = async (e, id) => {
        e.preventDefault()

        // hide the perk with id:
        document.getElementById(id).style.display = 'none';
        handleClick({
            vertical: 'top',
            horizontal: 'right',
          });


    }


    return ( <div className="accountPage">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Congrats! Your StudyPerk will be sent via email!
        </Alert>
      </Snackbar>

            <div class="user">
        <div class="avatar">
            <img src={CatProfile} alt="profile icon with cat on it"/>
        </div>
        <div class="userinfo">
            <h3>{currentUser && currentUser.displayName}</h3>
            <p>{currentUser && currentUser.email}</p>
            {/* {currentUser && <><p>Studying: {currentUser.email}</p><br/><Button onClick={showForm}>Change</Button></> 
            } */}
            {/* <form onSubmit={handleTopic} style={{display:'none'}}>
                <label for="topic">What are you studying?</label><br/>
                <input type="text" id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form> */}

        </div>
    </div>

<div class="features">
    <div class="section">
        <div class="col-4 data">
            <div class="icon"><img src={Timer} alt="timer icon"/></div>
            <div class="stats">
                <p>Today</p>
                <p class="stat">3.7hrs</p>
            </div>
        </div>
        <div class="col-4 data">
            <div class="icon"><img src={Timer} alt="timer icon"/></div>
            <div class="stats">
                <p>This Week</p>
                <p class="stat">10.3hrs</p>
            </div>
        </div>
        <div class="col-4 data">
            <div class="icon"><img src={Fire} alt="fire icon"/></div>
            <div class="stats">
                <p>Study Streak</p>
                <p class="stat">3</p>
            </div>
        </div>
        <div class="col-4 data">
            <div class="icon"><img src={Rank} alt="rank icon"/></div>
            <div class="stats">
                <p>Ranking</p>
                <p class="stat">#17</p>
            </div>
        </div>
    </div>
</div>

<div class="hr"><hr/></div>
<div class="section rewards">
    <div class="col-2 perks">
        <h4>total perk points</h4>
        <p class="points">300</p>
        <p>Total hours studied: 17.7hrs</p>
    </div>
    <div class="col-2 claims">
        <div class="reward" id="1">
            <div class="claimText">
                <span>Starbucks</span>
                <p>Tall Latte/Cuppucino/Americano/tea</p>
            </div>
            <div class="btn claim" onClick={(e)=>{handleClaim(e, 1)}}>200 pts</div>
        </div>
        <div class="reward" id="2">
            <div class="claimText">
                <span>Costa</span>
                <p>Medium Latte/Cuppucino/Americano/tea</p>
            </div>
            <div class="btn claim"  onClick={(e)=>{handleClaim(e, 2)}}>200pts</div>
        </div>
        <div class="reward" id="3">
            <div class="claimText">
                <span>Gongcha</span>
                <p>Milk tea with pearls</p>
            </div>
            <div class="btn claim"  onClick={(e)=>{handleClaim(e, 3)}}>300 pts</div>
        </div>
    </div>
</div>
    </div> );
}
 
export default AccountPage;
