import { useContext, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Modal from './components/Modal'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Steps from './components/Steps'
import { AppContext, AppContextProvider } from './context/AppContext'

function App() {
  const {showModal} = useContext(AppContext)

  return (
    <div className="App">
      <AppContextProvider>
        <Layout>
        <br />
        <br />
        <br />
        <Steps/>

        {showModal && <Modal />}
        </Layout>
      </AppContextProvider>
    </div>
  )
}

export default App
