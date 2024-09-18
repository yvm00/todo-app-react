import { useState, useEffect } from "react"
import watch from "../image/watch.png"


function Timer(){
    const [[h, m, s], setTimer] = useState([0,0,0]);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timerID = setInterval(() => onStart(), 1000);   
    return () => {
      clearInterval(timerID);
    };
  });
  
  const onStart = () => {
    if (h === 0 && m === 0 && s === 0) {
      setIsStarted(false);
      return;
    }
    if (!isStarted) return;
    if (m === 0 && s === 0) {
      setTimer([h - 1, 59, 59]);
    } else if (s === 0) {
      setTimer([h, m - 1, 59]);
    } else {
      setTimer([h, m, s - 1]);
    }
  }; 

  const onReset = () => {
    setIsStarted(false);
    setTimer([0, 0, 0]);
  };




  return (
    <div className="timer container d-flex flex-column">     
        <div className="mt-4 pt-1 align-self-center ">
         <img className="timer__img" src={watch} alt="watch"/>
        <span className="timer__text">Focusing</span>             
        </div>
        <div className="timer__start align-self-center">
          <input
            type="number"
            placeholder="00"
            className="timer__input"
            value={h}
            onChange={(e) => setTimer([e.target.value, m, s])}
          />
          <span>h</span>
       
          <input
            type="number"
            placeholder="00"
            className="timer__input"
            value={m}
            onChange={(e) => setTimer([h, e.target.value, s])}
          />
          <span>m</span>       
          <input
            type="number"
            placeholder="00"
            className="timer__input"
            value={s}
            onChange={(e) => setTimer([h, m, e.target.value])}
          />
          <span>s</span>
        </div>
   
      <div className="align-self-center">
        <button className="timer__button" onClick={onReset}>Reset</button>
        {isStarted ? (
          <button className="timer__button" onClick={() => setIsStarted(false)}>Pause</button>
        ) : (
          <button className="timer__button"
            onClick={() => setIsStarted(true)}
            disabled={h <= 0 && m <= 0 && s <= 0}
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export {Timer}