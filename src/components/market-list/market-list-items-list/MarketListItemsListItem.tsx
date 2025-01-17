"use client";

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit } from "react-icons/md";
import { BlurModal } from "@/src/components";
import { EditMarketListItemName } from '../edit-market-list-item-name/EditMarketListItemName';

interface Props {
  key: string;
  uuid: string;
  name: string;
  isChecked: boolean;
  removeListItem: (uuid: string) => void;
  toggleItemChecked: (uuid: string) => void;
  editItemName: (uuid: string, newName: string) => void;
}

export const MarketListItemsListItem = ({
  uuid,
  name,
  isChecked,
  removeListItem,
  toggleItemChecked,
}: Props) => {
  const [isEditMarketListItemsModalShowed, setEditMarketListItemsModalShowed] =
    useState(false);

  return (
    <div className="bg-zinc-700 p-2 mb-4 rounded-md flex justify-between items-center h-[75px]">
      <div className="flex items-center">
        <button
          onClick={() => toggleItemChecked(uuid)}
          className="rounded-md transition-all"
        >
          {isChecked ? (
            <MdCheckBox size={50} />
          ) : (
            <MdCheckBoxOutlineBlank size={50} />
          )}
        </button>
      </div>

      <h2 className="flex-1 ml-4">{name}</h2>

      <div className="flex items-center">
        <button
          className="ml-4 p-2 bg-zinc-800 rounded-md transition-all hover:bg-blue-900"
          onClick={() => setEditMarketListItemsModalShowed(true)}
        >
          <MdEdit size={30} />
        </button>

        <button
          className="ml-4 p-2 bg-zinc-800 rounded-md transition-all hover:bg-rose-900"
          onClick={() => {
            removeListItem(uuid);
          }}
        >
          <IoMdClose size={30} />
        </button>
      </div>
      {isEditMarketListItemsModalShowed && (
        <BlurModal>
          <EditMarketListItemName
            name={ name }
            closeModal={ () => setEditMarketListItemsModalShowed(false)}
            saveNewName={ (newName) => {
              console.log(newName)
            }}
          />
        </BlurModal>
      )}
    </div>
  );
};
