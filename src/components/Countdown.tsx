import {useEffect, useState, useRef, useContext} from 'react'
import { AppContext } from '../context/AppContext';

type Props = {
  seconds:number
}

const formatTime = (time:number) => {
  let minutes_number:number = Math.floor( time / 60 );
  let seconds_number:number = Math.floor( time - minutes_number * 60 );

  let minutes= minutes_number.toString()
  let seconds= seconds_number.toString();

  if(minutes_number <= 10) minutes = '0' + minutes
  if(seconds_number < 10) seconds = '0' + seconds
  localStorage.setItem('timeleft', time.toString())
  return `${minutes}:${seconds}`
}

const Countdown = () => {
  const {setTimeLeft, timeLeft} = useContext(AppContext);
  const timerId = useRef(0);

  // console.log('rendered')

  // const [timeLeft, setTimeLeft] = useState(
  //   parseInt(localStorage.getItem('timeleft')!)
  // )  

  useEffect(() => {
    localStorage.setItem('timeleft', timeLeft.toString());
  }, [timeLeft]);

  useEffect(() => {
    timerId.current = window.setInterval(() => { 
      setTimeLeft((prev:number) => prev - 1)
    }, 1000)
    
    return ()=> clearInterval(timerId.current)    

  }, []);

  useEffect(() => {
    if(timeLeft <= -1) {
      clearInterval(timerId.current)
    }
  }, [timeLeft])    

  return (
    <span>
      {formatTime(timeLeft)}
    </span>
  )
}

export default Countdown