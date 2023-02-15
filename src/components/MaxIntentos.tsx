import React from 'react'

export default function MaxIntentos() {
  return (
    <>
        <div className='text-left mb-5 text-sm leading-4' style={{
          color:'#d8046c'
        }}>
          Has superado los intentos para validar tu código, vuelve a
          ingresar a tu Banca Empresas para generar uno nuevo.
        </div>
    <div className="flex justify-end pb-5 space-x-4">
        <button className="border-pink-600 border-4 bg-white text-pink-700">
          Cancelar
        </button>
        <button className="button">
          Aceptar
        </button>
      </div>
    </>
  )
}
