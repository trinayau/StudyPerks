import { useEffect, useState } from 'react';
import './timer.css';

const Pomodoro = () => {

    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [seconds, setSeconds] = useState("00");

    const workTitle = document.getElementById('work');
    const breakTitle = document.getElementById('break');

    let breakCount = 59;

    useEffect(() => {
        document.getElementById('minutes').innerHTML = workTime;
        document.getElementById('seconds').innerHTML = seconds;

        // workTitle.classList.add('active');
    }, []);

    // start timer
    function start() {
        document.getElementById('start').style.display = "none";
        document.getElementById('reset').style.display = "block";

        // change the time
        setSeconds(59);

        let workMinutes = workTime -1;
        let breakMinutes = breakTime - 1
        
        breakCount = 59;

        // countdown
        let  timerFunction = () => {
            // change the display
            document.getElementById('minutes').innerHTML = workMinutes;
            document.getElementById('seconds').innerHTML = seconds;
            if(seconds < 10) {
                document.getElementById('seconds').innerHTML = "0"+seconds;
            }

            setSeconds(seconds - 1);

            // decrease minute counter
            if (seconds === 0) {
                workMinutes = workMinutes - 1;

                if(workMinutes === -1) {
                    if(breakCount % 2 === 0) {
                        workMinutes = breakMinutes;
                        breakCount++;
                        // update panel
                        workTitle.classList.remove('active');
                        breakTitle.classList.add('active');

                    } else {
                        workMinutes = workTime;
                        breakCount++;
                        // update panel
                        workTitle.classList.add('active');
                        breakTitle.classList.remove('active');

                    }
                }
                setSeconds(59);
            }
        }

        let interval = setInterval(timerFunction, 1000);
        return () => clearInterval(interval);

    }
    return ( <section>
        <div class="container-pomodoro">
            <h1>Pomodoro Timer</h1>
            <div class="panel">
                <p id="work">Work</p>
                <p id="break">Break</p>
            </div>

            <div class="timer">
                <div class="circle">
                    <div class="time">
                        <p id="minutes"></p>
                        <p>:</p>
                        <p id="seconds"></p>
                    </div>
                </div>
            </div>

            <div class="controls">
                <button id="start" 
                onClick={start}
                ><i class="fa-solid fa-play"></i></button>
                <a id="reset" href="timer.html"><i class="fa-solid fa-arrow-rotate-left"></i></a>
            </div>

        </div>
    </section> );
}
 
export default Pomodoro;
