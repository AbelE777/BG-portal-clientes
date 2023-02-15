import {useState} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default function Steps() {
  const [stepp, setStep] = useState(
    parseInt(localStorage.getItem("step")!) || 1
  );

  const handleNext = () => {
    localStorage.setItem("step", (stepp + 1).toString());
    setStep(stepp + 1);
  };

  return (
    <>
      {stepp === 1 && <Step1 onNext={handleNext} />}
      {stepp === 2 && <Step2 onNext={handleNext} />}
      {stepp === 3 && <Step3 />}
    </>
  )
}
