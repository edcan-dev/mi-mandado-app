"use client";

import { MarketListItem } from '@/src/interfaces';
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { AddMarketListItemModal } from '../add-market-list-item-modal/AddMarketListItemModal';

interface Props {

  marketListItems: MarketListItem[],

}

export const MarketListItemsList = ({ marketListItems }: Props) => {

  const [isModalShowed, setModalShowed] = useState(false);   
  const [listItems, setListItems] = useState(marketListItems);   


  const addMarketListItem = (newItem: MarketListItem) => {

    setListItems([...listItems, newItem]);
    setModalShowed(false);

  }

  return (
    <div>
        <div className="mb-8">
          {listItems.map((marketListItem) => (
            <div
              key={marketListItem.uuid}
              className="bg-zinc-700 px-4 mb-4 rounded-md flex justify-between items-center h-[75px]"
            >
              <h2 className="">{marketListItem.name}</h2>

              <div className="flex items-center">
                <button className="ml-4 p-2 bg-zinc-800 rounded-md transition-all hover:bg-blue-900">
                  <MdEdit size={30} />
                </button>

                <button className="ml-4 p-2 bg-zinc-800 rounded-md transition-all hover:bg-rose-900">
                  <IoMdClose size={30} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-full">
          <button
            className="bg-zinc-800 p-4 rounded-md w-1/3 text-center transition-all hover:bg-blue-900"

            onClick={() => {     } }
          >
            Guardar
          </button>
          <button
            className="bg-zinc-800 p-4 rounded-md w-1/3 text-center transition-all hover:bg-blue-900"
            onClick={() => setModalShowed(true)}
          >
            Agregar
          </button>
        </div>


        
        { isModalShowed && (
        <div className='w-full h-svh backdrop-blur fixed top-0 left-0 flex items-center justify-center'>

          <AddMarketListItemModal
            setModalShowed={ setModalShowed }
            addMarketListItem={ addMarketListItem }
          />

        </div>
        
        )}

      </div>
  )
}
