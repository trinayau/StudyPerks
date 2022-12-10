import './styles.css';
import {useState} from 'react';
const SimonGame = () => {

    const [start, setStart] = useState(false);
    const [level, setLevel] = useState(null);
    const [text, setText] = useState("Start Game");
    const [gamePattern, setGamePattern] = useState([]);
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
        console.log('Game:', gamePattern)
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
            console.log("success");
            if (userPattern.length === gamePattern.length) {
                setTimeout(() => {
                    nextColor();
                }, 1000);
            }
        } else {
            console.log("game over");
            document.getElementsByClassName("game-start")[0].style.display = "block";
            setText("Game Over. Try Again?");
            setStart(false);
            setLevel(false);
            setGamePattern([]);
        }
    }


    return ( 
        <div class="gamecontainer">
        <div class="instructions">
            <h1>Simon Game</h1>
            <p>Every level a color will flash</p>
            <p>Will you remember the sequence at which the colours flash in?</p>
            <p>Try now and test your memory</p>
        </div>
      
        <div class="game">
            {!start && <h1 className="game-start" onClick={()=>startGame()}>{text}</h1>}
            {level && <h1 className="game-start">Level {level}</h1>}
            {start && <>
            <div class="gamerow">
                <div id="blue" class="gbtn blue" onClick={() => handleClick('blue') }></div>
                <div id="green" class="gbtn green" onClick={() => handleClick('green') }></div>
            </div>
            <div class="gamerow">
                <div id="yellow" class="gbtn yellow" onClick={() => handleClick('yellow') }></div>
                <div id="red" class="gbtn red" onClick={() => handleClick('red') }></div>
            </div>
            </>}
        </div>
        </div>
     );
}
 
export default SimonGame;
