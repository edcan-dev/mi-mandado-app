"use client";

import { MarketListItem } from "@/src/interfaces";
import { useState } from "react";
import { AddMarketListItemModal, BlurModal, MarketListItemsListItem } from "@/src/components";
import { useMarketListItemsHook } from '@/src/hooks';

interface Props {
  marketListItems: MarketListItem[];
  marketListUUID: string
}

export const MarketListItemsList = ({ marketListItems, marketListUUID }: Props) => {

  
  const [isAddMarketListItemModalShowed, setAddMarketListItemModalShowed] = useState(false);
  
  const { removeMarketListItem, toggleItemChecked, editItemName, listItems, addMarketListItem } = useMarketListItemsHook(marketListItems, marketListUUID); 

  const handleAddMarketListItem = (newItem: MarketListItem) => {
    addMarketListItem(newItem);
    setAddMarketListItemModalShowed(false);
  };

  

  return (
    <div>
      <div className="mb-8">
        {listItems.map((marketListItem) => (
          <MarketListItemsListItem
            key={marketListItem.uuid}
            uuid={marketListItem.uuid}
            name={marketListItem.name}
            isChecked={marketListItem.isChecked}
            removeListItem={removeMarketListItem}
            toggleItemChecked={toggleItemChecked}
            editItemName={editItemName}
          />
        ))}
      </div>

      <div className="flex justify-end w-full">
        {/* <button
          className="bg-zinc-800 p-4 rounded-md w-1/3 text-center transition-all hover:bg-blue-900"
        >
          Guardar
        </button> */}
        <button
          className="bg-zinc-800 p-4 rounded-md w-1/3 text-center transition-all hover:bg-blue-900"
          onClick={() => setAddMarketListItemModalShowed(true)}
        >
          Agregar
        </button>
      </div>

      {
      isAddMarketListItemModalShowed && (
        <BlurModal>
          <AddMarketListItemModal
            setModalShowed={ setAddMarketListItemModalShowed}
            addMarketListItem={ handleAddMarketListItem }
          />
        </BlurModal>
      )}
    </div>
  );
};
