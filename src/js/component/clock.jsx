import React, { useEffect, useState } from "react";

//include images into your bundle


//create your first component
const Clock = () => {
	const [seconds, setSeconds] = useState(0);
	const [timerId, setTimerId] = useState(null);
  
	useEffect(() => {
	  const startTime = Date.now();
	  const timer = setInterval(() => {
		const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
		setSeconds(elapsedSeconds);
	  }, 1000);
  
	  setTimerId(timer);
  

	  return () => clearInterval(timer);
	}, []); 
  
	const handleStop = () => {
	  clearInterval(timerId);
	};
  
	const handleStart = () => {
	  const startTime = Date.now() - (seconds * 1000); 
	  const timer = setInterval(() => {
		const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
		setSeconds(elapsedSeconds);
	  }, 1000);
	  setTimerId(timer);
	};
  
	const handleReset = () => {
	  setSeconds(0);
	};
  
	return (
	  <div>
		<div className="container">
			<h1>SECONDS TIL DOOMSDAY: </h1>
		  <div className="counter">{seconds}</div>
		</div>
		<div className="buttons">
		  <button onClick={handleStop}>Stop</button>
		  <button onClick={handleStart}>Start</button>
		  <button onClick={handleReset}>Reset</button>
		</div>
	  </div>
	);
  };
  
  export default Clock;