import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import smsIcon from "/sms-icon.png";

export type Props = {
  onNext: () => void;
};

const Step1 = ({ onNext }: Props) => {
  const { 
    step, 
    isLoading, 
    setIsLoading,
    setTimeLeft, 
    timeLeft 
  } = useContext(AppContext);
  console. log (process.env.NODE_ENV) 

  const handleSendCode = () => {
    setIsLoading(true);
    // localStorage.setItem("step", "2");
    localStorage.setItem("timeleft", "180");
    localStorage.setItem("otp", "123456");
    setTimeLeft(180);
    // setear el siguiente paso
    setTimeout(() => {
      // setStep("2");
      onNext();
      setIsLoading(false);
    }, 3000);
  };

  
    return (
      <div className="sm:w-2/4 mx-auto">

        <h3 className="text-2xl font-bold animate__animated animate__fadeInUp animate__faster">Queremos mejorar tu experiencia</h3>
        <p className="animate__animated animate__fadeInUp animate__faster">
          Para autenticar que eres tú, enviaremos un sms a tu celular con un
          código de seguridad.
        </p>

        <div className="sm:m-12 bg-slate-100 rounded-lg mt-16 animate__animated animate__fadeInUp">
          <div className="p-5">
            <img className="mx-auto mt-5" src={smsIcon} alt="" width={70} />
          </div>

          <div className="sm:w-3/4 mx-auto">
            <p className="p-5 text-gray-700">
              Enviaremos un código único de 6 dígitos a este número celular
            </p>
          </div>

          <div className="font-medium text-gray-900 bg-slate-200 w-3/4 sm:w-1/2 mx-auto rounded-lg mb-5">
            099****036
          </div>

          <button
            className="button m-5 active:bg-pink-600 focus:outline-none ease-linear transition-all duration-150"
            onClick={handleSendCode}
          >
            Enviar
          </button>

          {/* <Spinner/> */}
        </div>
      </div>
    );
  }

  

export default Step1;
