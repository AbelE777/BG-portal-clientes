import { useState, useEffect, useContext } from "react";
import OTPInput from "otp-input-react";
import { AppContext } from "../context/AppContext";
import Countdown from "./Countdown";
import MaxIntentos from "./MaxIntentos";
import Normal from "./Normal";
import { Props } from "./Step1";
import TimeExpired from "./TimeExpired";
import phoneIcon from "/phone-icon.png";

const Step2 = ({onNext}:Props) => {
  const [otpValue, setOtpValue] = useState("");
  const [intentos, setIntentos] = useState(0);
  const { setTimeLeft, timeLeft, step, setIsLoading } = useContext(AppContext);
  const [classes, setClasses] = useState({
    width: "3rem",
    height: "3rem",
    margin: "20px .3rem"
  })

  useEffect(() => {
    if (window.matchMedia("(max-width:767px)").matches) {
      setClasses({
        width: "1.9rem",
        height: "2rem",
        margin: "20px .3rem"
      })
    }
  }, [])
  

  function handleCkeckOTP() {
    const realOtp = localStorage.getItem("otp")!;
    if (realOtp && realOtp === otpValue) {
      // setStep("3");
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        onNext();
      }, 1000);
    }
    else if (intentos < 3) 
      setIntentos((prev) => prev + 1);
    else {
    }
  }

  return (
    <div className="sm:w-2/4 mx-auto">
      <h3 className="text-2xl font-bold">
        Tu código de seguridad fue enviado
      </h3>

      <p className="w-3/4 mx-auto">
        Ingresa el código recibido para autenticar que eres tú.
      </p>

      <img width={80} className="mx-auto mt-16" src={phoneIcon} alt="" />

      <div className="sm:m-12 bg-slate-100 rounded-lg mt-16 py-6 px-8 animate__animated animate__fadeInUp animate__faster">
        <h4 className="text-gray-700 font-bold py-5 text-xl">
          Ingresa tu código de seguridad
        </h4>
        <h4 className="text-gray-700 text-left">
          Revisa el código de 6 dígitos en tu celular 0958****8965
        </h4>

        {/* OTP */}
        <div className="flex items-center justify-center">
          <OTPInput
            disabled={intentos === 3 || timeLeft === 0}
            autoFocus={true}
            otpType="number"
            value={otpValue}
            onChange={setOtpValue}
            OTPLength={6}
            inputStyles={{
              color: "#919191",
              ...classes,
              fontSize: "1.7rem",
              borderRadius: 4,
              border: `${
                intentos === 3
                  ? "2px solid #d8046c"
                  : "2px solid rgba(0,0,0,0.3)"
              }`,
              fontWeight: "600",
              backgroundColor: "#fff",
            }}
            // separator={<span className="text-gray-600">.</span>}
          />
        </div>

        {intentos === 3 && timeLeft !== 0 && <MaxIntentos />}
        {intentos !== 3 && timeLeft !== 0 && (
          <Normal handleCkeckOTP={handleCkeckOTP} intentos={intentos} />
        )}

        {timeLeft === 0 && <TimeExpired />}
      </div>
    </div>
  );
  }


export default Step2;
