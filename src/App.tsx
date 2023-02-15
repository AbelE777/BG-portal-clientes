import { useContext, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Modal from './components/Modal'
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
