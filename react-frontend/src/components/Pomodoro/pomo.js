
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDoc, doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";


import { ExitToApp } from "@mui/icons-material";

const Pomodoro = () => {
  const { roomId } = useParams();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [time, setTime] = useState(1500);
  const [timerOn, setTimerOn] = useState(false);
  const [breakTime, setBreakTime] = useState(300);
  const [breakOn, setBreakOn] = useState(false);
  const [session, setSession] = useState(0);
  const [breakSession, setBreakSession] = useState(0);
  const [sessionOn, setSessionOn] = useState(false);
  const [breakSessionOn, setBreakSessionOn] = useState(false);
  const [sessionTime, setSessionTime] = useState(1500);
  const [breakSessionTime, setBreakSessionTime] = useState(300);
  const [sessionTimeOn, setSessionTimeOn] = useState(false);
  const [breakSessionTimeOn, setBreakSessionTimeOn] = useState(false);
  const [sessionTimeOn2, setSessionTimeOn2] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      if (time === 0) {
        setTimerOn(false);
        setBreakOn(true);
        setSession(session + 1);
        setSessionTimeOn(true);
        setSessionTimeOn2(true);
      }

      if (sessionTimeOn) {
        setSessionTime(sessionTime - 1);
      }

      if (sessionTimeOn2) {
        setSessionTime(sessionTime - 1);
      }

      if (sessionTime === 0) {
        setSessionTimeOn(false);
        setSessionTimeOn2(false);
        setSessionTime(1500);
      }
    } else if (!timerOn && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn, time, sessionTimeOn, sessionTimeOn2, sessionTime]);

  useEffect(() => {
    let interval = null;
    if (breakOn) {
      interval = setInterval(() => {

        setBreakTime((breakTime) => breakTime - 1);
      }, 1000);

      if (breakTime === 0) {
        setBreakOn(false);
        setTimerOn(true);
        setBreakSession(breakSession + 1);

        setBreakSessionTimeOn(true);
      }

      if (breakSessionTimeOn) {
        setBreakSessionTime(breakSessionTime - 1);
      }

      if (breakSessionTime === 0) {
        setBreakSessionTimeOn(false);
        setBreakSessionTime(300);
      }
    } else if (!breakOn && breakTime !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [breakOn, breakTime, breakSessionTimeOn, breakSessionTime, breakSession]);

  const handleStart = async () => {
    setTimerOn(true);
    setSessionOn(true);
    setSessionTimeOn(true);
    setSessionTimeOn2(true);
    await updateDoc(doc(db, "roomMessages", roomId), {
      messages: arrayUnion({
        id: uuid(),
        message: `${currentUser.displayName} started a pomodoro session`,
        timestamp: Timestamp.now(),
        user: currentUser.displayName,
        userImage: currentUser.photoURL,
      }),
    });
  };

  const handleStop = async () => {
    setTimerOn(false);
    setBreakOn(false);
    setSessionOn(false);
    setBreakSessionOn(false);
    setSessionTimeOn(false);
    setBreakSessionTimeOn(false);
    setSessionTimeOn2(false);
    setTime(1500);
    setBreakTime(300);
    setSessionTime(1500);
    setBreakSessionTime(300);
    await updateDoc(doc(db, "roomMessages", roomId), {
      messages: arrayUnion({
        id: uuid(),
        text: `${currentUser.displayName} stopped a pomodoro session`,
        timestamp: Timestamp.now(),
        user: currentUser.displayName,
        userImage: currentUser.photoURL,
      }),
    });
  };

  const handleReset = async () => {
    setTimerOn(false);
    setBreakOn(false);
    setSessionOn(false);
    setBreakSessionOn(false);
    setSessionTimeOn(false);
    setBreakSessionTimeOn(false);

    setTime(1500);
    setBreakTime(300);
    setSession(0);
    setBreakSession(0);
    setSessionTime(1500);
    setBreakSessionTime(300);
    setSessionTimeOn2(false);
    await updateDoc(doc(db, "roomMessages", roomId), {
      messages: arrayUnion({
        id: uuid(),
        text: `${currentUser.displayName} reset a pomodoro session`,
        timestamp: Timestamp.now(),

        user: currentUser.displayName,
        userImage: currentUser.photoURL,
      }),
    });
  };

  const handleExit = async () => {
    await updateDoc(doc(db, "roomMessages", roomId), {

      messages: arrayUnion({
        id: uuid(),
        text: `${currentUser.displayName} left the pomodoro session`,
        timestamp: Timestamp.now(),

        user: currentUser.displayName,
      }),
    });

    navigate(`/room/${roomId}`);
  };

  return (
    <div className="pomodoro">
      <div className="pomodoro__header">
        <h1>Pomodoro</h1>
        <div className="pomodoro__header__exit">

          <IconButton onClick={handleExit}>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="pomodoro__timer">
        <div className="pomodoro__timer__container">
          <div className="pomodoro__timer__container__session">
            <h2>Session</h2>
            <p>{session}</p>
          </div>
          <div className="pomodoro__timer__container__time">
            <h2>Time</h2>
            {/* <p>{time}</p> */}
            {/* convert time from seconds to display minutes and seconds: */}
            <p>{`${Math.floor(time / 60)}:${time % 60}`}</p>
            
          </div>
          <div className="pomodoro__timer__container__break">
            <h2>Break</h2>
            <p>{breakSession}</p>
          </div>
        </div>
      </div>
      <div className="pomodoro__buttons">
        <div className="pomodoro__buttons__start">
          <Button
            variant="contained"
            color="primary"

            onClick={handleStart}
          >
            Start
          </Button>
        </div>
        <div className="pomodoro__buttons__stop">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleStop}
          >
            Stop
          </Button>
        </div>
        <div className="pomodoro__buttons__reset">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
