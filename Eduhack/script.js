let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');


// set initial timer display
let workTime = 25;
let breakTime = 5;
// let workTime = prompt("Please Enter work time");
// let breakTime = prompt("Please Enter break time");

let seconds = "00";

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');
}

// start timer
function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

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

        seconds = seconds - 1;

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
            seconds = 59;
        }

    }

    setInterval(timerFunction, 1000);
}