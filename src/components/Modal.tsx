import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

interface Props {
  showAs: string;
  // setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = () => {
  const { showModal, setShowModal } = useContext(AppContext);

  const handleCloseModal = () => {
    const modal = document.querySelector("#modal");
    modal?.classList.remove("animate__fadeInDown");
    modal?.classList.add("animate__backOutUp");
    setTimeout(() => {
      setShowModal({showAs:'',show:false});
    }, 200);
  };

  if (showModal.showAs === "info")
    return (
      <>
        <div
          id="modal"
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none animate__animated animate__fadeInDown animate__faster"
        >
          <div
            className="relative w-auto my-6 mx-auto"
            style={{
              maxWidth: "32rem",
            }}
          >
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between rounded-t">
                <button
                  className="p-4 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleCloseModal}
                >
                  <span className="bg-transparent text-gray-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              {/*body*/}
              <div className="relative pb-6 pr-6 pl-6 flex-auto">
                <h1 className="my-4 text-slate-500 text-xl leading-relaxed">
                  ¿No recibiste el código?
                </h1>
                <p className="text-gray-600">
                  Actualiza tus datos en nuestro portal web
                </p>
                <a
                  target="_blank"
                  href="https://www.bancoguayaquil.com/actualizacion-de-datos/"
                  className="text-gray-700 underline"
                >
                  www.bancoguayaquil.com/actualizacion-de-datos/
                </a>
              </div>

              <p className="text-gray-700">o comunicate con el call center</p>
              <p className="text-gray-900 underline font-semibold">
                04 3730100 Ext.9
              </p>
              {/*footer*/}
              <div className="flex items-center justify-center p-3 rounded-b mt-6">
                <button
                  className="text-pink-600 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-pink-600 border-2"
                  type="button"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
                <button
                  className="bg-pink-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleCloseModal}
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  else if (showModal.showAs === "gracias")
    return (
      <>
        <div
          id="modal"
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none animate__animated animate__fadeInDown animate__faster"
        >
          <div
            className="relative w-auto my-6 mx-auto"
            style={{
              maxWidth: "32rem",
            }}
          >
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between rounded-t">
                <button
                  className="p-4 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleCloseModal}
                >
                  <span className="bg-transparent text-gray-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              {/*body*/}
              <div className="relative pb-6 pr-6 pl-6 flex-auto">
                <h1 className="my-1 text-pink-700 font-extrabold text-xl leading-relaxed">
                ¡Muchas Gracias!
                </h1>
                <p className="text-gray-800 font-bold text-lg">
                  Estamos trabajando para ofrecerte la mejor experiencia bancaria
                </p>
                <p className="text-gray-600 pt-6 text-lg">Conoce más de nuestros productos</p>
                
              </div>

              
              {/*footer*/}
              <div className="flex items-center justify-center p-3 rounded-b">
                <a
                  className="rounded-full bg-pink-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 px-16 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  href="https://www.bancoguayaquil.com"
                  target="_blank"
                >
                  <span className="text-white">AQUÍ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  else return null;
};

export default Modal;
