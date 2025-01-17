"use client";

import { useState } from "react"
import { IoMdClose } from "react-icons/io"

interface Props {
  name: string,
  closeModal: () => void,
  saveNewName: (newName: string) => void
}

export const EditMarketListItemName = ( { name, closeModal, saveNewName }: Props ) => {

  const [newName, setNewName] = useState(name);

  return (  
    <div className="bg-zinc-800 p-4 rounded-md w-2/3">
            <div className="flex justify-between mb-4">
              <h3 className="text-center flex items-center">Editar Nombre</h3>
              <button
                className="p-2 bg-zinc-700 rounded-md transition-all hover:bg-rose-900"
                onClick={() => {
                  closeModal();
                }}
              >
                <IoMdClose   size={20} />
              </button>
            </div>

            <form className="flex flex-col">
              <input
                placeholder="Nombre del item"
                className="w-full mb-4 bg-zinc-400 text-zinc-800 font-bold outline-none p-2 rounded-md h-[50px]"
                type="text"
                value={ newName }
                onChange={(ev) => {
                  setNewName(ev.target.value);
                }}
              />

              <button
                className={`bg-zinc-700 p-2 rounded-md h-[50px] transition-all hover:bg-blue-900`}
                onClick={(ev) => {
                  ev.preventDefault();
                  saveNewName(newName);
                }}
              >
                Guardar
              </button>
            </form>
          </div>
  )
}
