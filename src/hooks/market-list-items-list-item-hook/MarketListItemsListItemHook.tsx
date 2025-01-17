"use client";

import { MarketListItem } from "@/src/interfaces";
import { useState } from "react";



export const useMarketListItemsListItemHook = (
  marketListItems: MarketListItem[]
) => {

  const [listItems, setListItems] = useState(marketListItems)

  const toggleItemChecked = (uuid: string) => {
    const toggledListItems = listItems.map((item) => {
      if (item.uuid == uuid) item.isChecked = !item.isChecked;
      return item;
    });
    setListItems([...toggledListItems]);
  };

  const removeMarketListItem = (uuid: string) => {
    console.log("remove remove ", uuid)
    setListItems(listItems.filter((item) => item.uuid != uuid));
  };

  const saveMarketListItems = () => {};

  const editItemName = () => {};

  return {

    listItems,
    setListItems,

    toggleItemChecked,
    removeMarketListItem,
    saveMarketListItems,
    editItemName,

  };
};
