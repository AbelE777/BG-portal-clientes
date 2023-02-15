import React from 'react'
import {createContext, useState} from 'react'

export const AppContext = createContext({
  timeLeft:0,
  setTimeLeft: (state:any) => {},
  showModal:{showAs:'', show:false},
  setShowModal: (state:any)=>{},
  step:'', 
  setStep:(state:any)=>{}
})

interface ChildrenProps {
  children: React.ReactNode
}

export const AppContextProvider = ({children}:ChildrenProps) => {

  const [timeLeft, setTimeLeft] = useState(
    parseInt(localStorage.getItem('timeleft')!)
  )  
  const [showModal, setShowModal] = useState({showAs:'', show:false})
  const [step, setStep] = useState('1')

  return (
    <AppContext.Provider value={{
      timeLeft,
      setTimeLeft,
      showModal,
      setShowModal,
      step, 
      setStep
    }}>
      {children}
    </AppContext.Provider>
  )
}
