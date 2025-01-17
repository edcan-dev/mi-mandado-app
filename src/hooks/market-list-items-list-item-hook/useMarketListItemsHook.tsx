"use client";

import marketListService from '@/src/services';
import { MarketListItem } from "@/src/interfaces";
import { useState } from "react";


export const useMarketListItemsHook = (
  marketListItems: MarketListItem[],
  marketListUUID: string
) => {

  const [listItems, setListItems] = useState(marketListItems)

  const toggleItemChecked = (uuid: string) => {
    const toggledListItems = listItems.map((item) => {
      if (item.uuid == uuid) item.isChecked = !item.isChecked;
      return item;
    });

    marketListService.toggleListItemChecked( toggledListItems, marketListUUID)

    setListItems([...toggledListItems]);
  };

  const removeMarketListItem = (itemUUID: string) => {
    console.log("remove remove ", itemUUID)

    const filteredItems = listItems.filter((item) => item.uuid != itemUUID);
    marketListService.removeMarketListItem(filteredItems, marketListUUID) 
    setListItems(filteredItems);
  };

  const saveMarketListItems = () => {};

  const editItemName = () => {};

  const addMarketListItem = (newItem: MarketListItem) => {
    
    marketListService.addMarketListItem(newItem, marketListUUID)
    setListItems([...listItems, newItem]);

  }

  return {

    listItems,
    setListItems,

    toggleItemChecked,
    removeMarketListItem,
    saveMarketListItems,
    editItemName,
    addMarketListItem

  };
};
