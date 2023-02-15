import React, {createContext, useState} from 'react'

export const AppContext = createContext({
  timeLeft:0,
  setTimeLeft: (state:any) => {},
  showModal:{showAs:'', show:false},
  setShowModal: (state:any)=>{},
  step:0, 
  isLoading: false,
  setIsLoading: (isLoading:boolean) => {},
  // setStep:(state:any)=>{}
  handleNext: () => {},
  handleGoBack: () => {}
})

interface ChildrenProps {
  children: React.ReactNode
}

export const AppContextProvider = ({children}:ChildrenProps) => {

  const [isLoading, setIsLoading] = useState(false);

  const [timeLeft, setTimeLeft] = useState(
    parseInt(localStorage.getItem('timeleft')!)
  )  
  const [showModal, setShowModal] = useState({showAs:'', show:false})
  // const [step, setStep] = useState('1')

  const [step, setStep] = useState(
    parseInt(localStorage.getItem("step")!) || 1
  );

  const handleNext = () => {
    localStorage.setItem("step", (step + 1).toString());
    setStep(step + 1);
  };
  const handleGoBack = () => {
    localStorage.setItem("step", (step - 1).toString());
    setStep(step - 1);
  };

  return (
    <AppContext.Provider value={{
      timeLeft,
      setTimeLeft,
      showModal,
      setShowModal,
      // step, 
      // setStep
      step,
      handleNext,
      handleGoBack,
      isLoading,
      setIsLoading
    }}>
      {children}
    </AppContext.Provider>
  )
}
