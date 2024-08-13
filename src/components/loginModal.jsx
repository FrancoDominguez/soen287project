import React, { useState } from "react";
import { AppContext } from "./context";

export default function LoginModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="py-[5px] px-4 border-2 border-slate-600 rounded-xl text-white bg-slate-600 
          font-bold hover:border-white hover:bg-gray-300 hover:text-black"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-8 mx-auto min-w-[400px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-6 border-b border-solid border-blueGray-200 rounded-t text-center">
                  <h3 className="text-4xl font-semibold">Login</h3>
                  <button
                    className="p-2 ml-auto bg-transparent border-0 float-right text-4xl font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-700 h-8 w-8 text-3xl block focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-8 flex-col px-10">
                  <div className="flex flex-col mb-4">
                    <label className="text-lg">Email</label>
                    <input
                      type="text"
                      className="border-2 border-gray-300 rounded-md focus:border-black indent-2 text-lg"
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="text-lg">Password</label>
                    <input
                      type="password"
                      className="border-2 border-gray-300 rounded-md focus:border-black indent-2 text-lg"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-8 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-md px-8 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-2 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Login
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-8 py-3 text-md outline-none focus:outline-none mr-2 mb-2 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
