"use client";

import { MarketListItem } from "@/src/interfaces";
import { generateUUID } from "@/src/utils";
import { randomUUID } from "crypto";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  setModalShowed: (show: boolean) => void;
  addMarketListItem: (newItem: MarketListItem) => void;
}

export const AddMarketListItemModal = ({ setModalShowed, addMarketListItem }: Props) => {

  const [inputValue, setInputValue] = useState<string>();

  const isInputEmpty = () => {
    return inputValue === undefined || inputValue === "";
  }

  return (

    <div className="bg-zinc-800 p-4 rounded-md w-2/3">
      <div className="flex justify-between mb-4">
        <h3 className="text-center flex items-center">Agregar Item</h3>
        <button
          className="p-2 bg-zinc-700 rounded-md transition-all hover:bg-rose-900"
          onClick={() => setModalShowed(false)}
        >

          <IoMdClose size={20} />
        </button>
      </div>

      <form className="flex flex-col">
        <input
          onChange={ (e) => setInputValue(e.target.value) }
          placeholder="Nombre del item"
          className="w-full mb-4 bg-zinc-400 text-zinc-800 font-bold outline-none p-2 rounded-md h-[50px]"
          type="text"
        />

        <button
          className={`bg-zinc-700 p-2 rounded-md h-[50px] transition-all hover:bg-blue-900 ${ !isInputEmpty() ? "opacity-1" : "opacity-0" }`}
          onClick={(e) => {
            e.preventDefault();
            const newItem: MarketListItem = {
              uuid: generateUUID(),
              name: inputValue!,
              isChecked: false
            }
            addMarketListItem(newItem)
          }}
        >
          Agregar
        </button>
      </form>
    </div>
  );
};
