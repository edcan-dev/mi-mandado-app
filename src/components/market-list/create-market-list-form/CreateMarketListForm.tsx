"use client";

import { useRef, useState } from "react";
import { BlurModal, AddMarketListItemModal, MarketListItemsListItem } from "@/src/components";
import { MarketList, MarketListItem } from "@/src/interfaces";
import { generateUUID } from "@/src/utils";
import { useMarketListItemsListItemHook } from "@/src/hooks";
import { saveMarketListService } from "@/src/services";

export const CreateMarketListForm = () => {

  const [marketList, setMarketList] = useState<MarketList>({
    uuid: generateUUID(),
    name: '',
    items: []
  });


  const [isAddMarketListItemModalShowed, setAddMarketListItemModalShowed] = useState(false);

  const { editItemName, listItems, removeMarketListItem, saveMarketListItems, setListItems, toggleItemChecked } = useMarketListItemsListItemHook(marketList.items);


  const addMarketListItem = (newItem: MarketListItem) => {
    setListItems([
        ...listItems,
        newItem
      ])
    setAddMarketListItemModalShowed(false);
  };


  const saveCreatedMarketList = (): void => {

    const newMarketList: MarketList = {
      uuid: marketList.uuid,
      name: marketList.name,
      items: listItems
    }

    saveMarketListService(newMarketList);
  }


  return (
    <div>

      <div>
        <input
          placeholder="Nombre de la Nueva Lista"
          className="w-full mb-4 bg-zinc-400 placeholder:text-zinc-500 text-zinc-800 font-bold outline-none p-2 rounded-md h-[75px]"
          type="text"
          value={ marketList.name }
          onChange={(ev) => {
            setMarketList({
              ...marketList,
              name: ev.target.value,
              uuid: generateUUID()
            }
            )
          }}
        />
      </div>

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

      <div className="flex justify-between w-full">
        <button className="bg-zinc-800 p-4 rounded-md w-1/3 text-center transition-all hover:bg-blue-900 disabled:opacity-0"
          onClick={() => saveCreatedMarketList()}
          disabled={marketList.name.length <= 0}
        >
          Guardar
        </button>
        <button className="bg-zinc-800 p-4 rounded-md w-1/3 text-center transition-all hover:bg-blue-900"
          onClick={ () => setAddMarketListItemModalShowed(true) }
        >
          Agregar
        </button>
      </div>


      {
        isAddMarketListItemModalShowed && (
              <BlurModal>
                <AddMarketListItemModal
                  setModalShowed={ setAddMarketListItemModalShowed}
                  addMarketListItem={ addMarketListItem }
                />
              </BlurModal>
            )}


    </div>
  );
};
