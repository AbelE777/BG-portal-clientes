import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Step3() {

  const { step, setStep, setShowModal } = useContext(AppContext);

  const handleAceptar = () => setShowModal({showAs:'gracias', show:false})      

  
    return (
      <div className="sm:w-2/4 mx-auto">
        <h3 className="text-2xl font-bold text-white">Datos personales</h3>
        <div className="sm:mx-12 bg-slate-100 rounded-lg mt-4 text-left p-4 sm:p-8 animate__animated animate__fadeInDown animate__faster">
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-gray-400 text-xs font-medium mb-2"
                // htmlFor="grid-password"
              >
                Nombre y Apellido
              </label>
              <div
                // type="text"
                className="pl-5 text-gray-800 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-lg bg-sky-100 text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                // value="lucky.jesse"
              >
                JKile
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-gray-400 text-xs font-medium mb-2"
                // htmlFor="grid-password"
              >
                Número de cédula
              </label>
              <div
                // type="text"
                className="pl-5 text-gray-800 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-lg bg-sky-100 text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                // value="lucky.jesse"
              >
                0909090909
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-gray-400 text-xs font-medium mb-2"
                // htmlFor="grid-password"
              >
                Teléfono
              </label>
              <div
                // type="text"
                className="pl-5 text-gray-800 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-lg bg-sky-100 text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                // value="lucky.jesse"
              >
                0504050406
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-gray-400 text-xs font-medium mb-2"
                // htmlFor="grid-password"
              >
                Correo electrónico
              </label>
              <div
                // type="mail"
                className="pl-5 text-gray-800 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-lg bg-sky-100 text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                // value="lucky.jesse"
              >
                test@gmail.com
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="relative w-full mb-3 mt-10 text-xs">
              <input
                className=""
                type="checkbox"
                name="terminos_y_condiciones"
                id="tyc"
              />{" "}
              <label htmlFor="tyc" className="font-semibold text-gray-700">
                He leído y acepto los
                <a href="#" className="text-pink-700 font-bold">
                  {" "}
                  Términos y Condiciones
                </a>{" "}
                para el tratamiento de mis datos
              </label>
            </div>
          </div>
          <div className="text-xs text-gray-600 text-center mt-8">
            Privacidad - Condiciones
          </div>
          <div className="text-center">
            <button onClick={handleAceptar} className="button m-5 active:bg-pink-600 focus:outline-none ease-linear transition-all duration-150 rounded-full px-12 font-bold">
              ACEPTAR
            </button>
          </div>
        </div>
      </div>
    );
  }

  

