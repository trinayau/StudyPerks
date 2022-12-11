import './styles.css';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {db} from '../../firebase';
import {getDoc, doc, updateDoc, arrayUnion, Timestamp} from 'firebase/firestore';
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

const SimonGame = () => {

    const [start, setStart] = useState(false);
    const [level, setLevel] = useState(null);
    const [text, setText] = useState("Start Game");
    const [gamePattern, setGamePattern] = useState([]);
    const [addNum, setAddNum] = useState(false);

    const {roomId} = useParams();
    const {currentUser} = useContext(AuthContext);
    let userPattern = [];

    const startGame = () => {
        setStart(true);
        document.getElementsByClassName("game-start")[0].style.display = "none";
        setLevel(0);
        nextColor();
    }

    const handleClick = (color) => {
        userPattern.push(color);
        flash(color);
        checkPatterns(userPattern.length - 1);
    }


    const nextColor = () => {

        userPattern = [];
        const newLevel = level + 1;
        setLevel(newLevel);
        const colors = ["blue", "green", "red", "yellow"];
        const randomColor = colors[Math.floor(Math.random() * 4)];
        setGamePattern([...gamePattern, randomColor]);

        setTimeout(() => {
            flash(randomColor);
        }
        , 500);

    }

    const flash = (color) => {
        document.getElementById(color).classList.add("flash");
        setTimeout(() => {
            document.getElementById(color).classList.remove("flash");
        }, 400);
    }


    const checkPatterns = (currentLevel) => {

        if (gamePattern[currentLevel] ===  userPattern[currentLevel]) {

            if (userPattern.length === gamePattern.length) {
                setTimeout(() => {
                    nextColor();
                }, 1000);
            }
        } else {

            document.getElementsByClassName("game-start")[0].style.display = "block";
            setText("Game Over. Try Again?");

            handleSend(`${currentUser.displayName} has lost the game at level ${level}.`)
            setStart(false);
            setLevel(false);
            setGamePattern([]);
        }
    }

    const handleSend = async(msg) => {
        console.log('handleSend', msg)
        if(msg !== '') {
            await updateDoc(doc(db, "roomMessages", roomId), {
            messages: arrayUnion({
                id: uuid(),
                text: msg,
                senderId: currentUser.uid,
                senderName: currentUser.displayName,
                date: Timestamp.now(),

            })
        })
    
    }
    }

    const colourAccessibility = () => {
        // if eye icon is hidden, show numbers:
        if (addNum) {
            setAddNum(false);
            document.getElementsByClassName("fa-eye")[0].style.color = "white";
            return;
        }
        // if eye icon is shown, hide numbers:
        setAddNum(true);
        document.getElementsByClassName("fa-eye")[0].style.color = "pink";
    }


    return ( 
        <div class="gamecontainer">
        <div class="instructions">
            <h1>Simon Game</h1>
            <p>Every level a color will flash</p>
            <p>Will you remember the sequence at which the colours flash in?</p>
            <p>Try now and test your memory</p>
            <p>Difficulty seeing colours?</p>
            <p> Click the eye icon below to help:</p>
            <span><i class="fa-solid fa-eye" style={{fontSize: 30}} onClick={()=>{colourAccessibility()}}></i></span>

        </div>
      
        <div class="game">
            {!start && <h1 className="game-start" onClick={()=>startGame()}>{text}</h1>}
            {level && <h1 className="game-start">Level {level}</h1>}
            {start && <>
            <div class="gamerow">
                <div id="blue" class="gbtn blue" onClick={() => handleClick('blue') }>{addNum && <p className="gameNum">1</p>}</div>
                <div id="green" class="gbtn green" onClick={() => handleClick('green') }>{addNum && <p className="gameNum">2</p>}</div>
            </div>
            <div class="gamerow">
                <div id="yellow" class="gbtn yellow" onClick={() => handleClick('yellow') }>{addNum && <p className="gameNum">3</p>}</div>
                <div id="red" class="gbtn red" onClick={() => handleClick('red') }>{addNum && <p className="gameNum">4</p>}</div>
            </div>
            </>}
        </div>
        </div>
     );
}
 
export default SimonGame;
