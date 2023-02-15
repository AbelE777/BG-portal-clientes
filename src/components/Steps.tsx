import {useContext, useState} from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default function Steps() {
  // const [stepp, setStep] = useState(
  //   parseInt(localStorage.getItem("step")!) || 1
  // );

  // const handleNext = () => {
  //   localStorage.setItem("step", (stepp + 1).toString());
  //   setStep(stepp + 1);
  // };
  const {step, handleNext, isLoading} = useContext(AppContext)

  return (
    <>
      {isLoading && <Spinner/>}
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} />}
      {step === 3 && <Step3 />}
    </>
  )
}
