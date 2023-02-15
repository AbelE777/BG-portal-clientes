import React from 'react'
import logofooter from "/LogoBanco.png"

type Props = {
  children: React.ReactNode
}

const Layout = ({children}:Props) => {
  
  return (
    <div className='m-5'>
      <h1 className='font-bold'>Primero tú</h1>
      <p className='w-3/4 sm:w-1/4 mt-3 mx-auto '>
        Nuestro compromiso es ofrecerte la mejor experiencia bancaria
      </p>

      {children}

      <div className='flex justify-center mt-16'>
        <img src={logofooter} alt="logoBG" className='mt-16'/>
      </div>
      <div className='sm:w-1/2 mt-3 mb-20 mx-auto'>
        <strong>Hemos actualizado nuestras Políticas de Uso de Datos</strong>
        
        <p className='text-xs'>Con el fin de mejorar tu experiencia bancaria y brindarte una atención
          personalizada, requerimos tu autorización para obtener tus datos 
          personales para ofrecete nuestros servicios, campañas promocionales 
          y demás beneficios
        </p>
      </div>
    </div>
  )
}

export default Layout