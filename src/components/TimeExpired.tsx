import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Modal from './Modal';

export default function TimeExpired() {
  const {setShowModal, showModal} = useContext(AppContext);

  return (
    <>
    <div className='text-left mb-2 text-sm leading-4' style={{
      color:'#d8046c'
    }}>Tu código ha expirado, solicita uno nuevo.</div>
      <div className="flex items-center text-gray-700 cursor-pointer" 
        onClick={()=>{setShowModal({showAs:'info',show:true})}}>
        No recibiste el código?
        <svg
          className="svg-icon ml-2"
          style={{
            width: "1em",
            height: "1em",
            verticalAlign: "middle",
            fill: "black",
            overflow: "hidden",
          }}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M512 85.333333a426.666667 426.666667 0 1 0 426.666667 426.666667A426.666667 426.666667 0 0 0 512 85.333333z m0 682.666667a42.666667 42.666667 0 1 1 42.666667-42.666667 42.666667 42.666667 0 0 1-42.666667 42.666667z m42.666667-220.16V597.333333a42.666667 42.666667 0 0 1-85.333334 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667 64 64 0 1 0-64-64 42.666667 42.666667 0 0 1-85.333333 0 149.333333 149.333333 0 1 1 192 142.506667z" />
        </svg>
      </div>

      <div className="flex justify-end pb-5 pt-4 space-x-2">
        <button className="border-pink-600 border-4 bg-white text-pink-700">
          Cancelar
        </button>
        <button className="button">
          Enviar nuevo código
        </button>
      </div>
      {/* {showModal.show && <Modal />} */}
    </>
  )
}
