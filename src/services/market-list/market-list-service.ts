import { MarketList, MarketListItem } from "@/src/interfaces";

interface MarketListService {
  getMarketLists: () => MarketList[] | [],
  getMarketListByUUID: (uuid: string) => MarketList | undefined,
  saveMarketList: (marketList: MarketList) => void,
  addMarketListItem: (newMarketListItem: MarketListItem, marketListUUID: string) => void,
  toggleListItemChecked: (toggledListItems: MarketListItem[], marketListUUID: string) => void
  removeMarketListItem: (filteredItems: MarketListItem[], marketListUUID: string) => void;
}


const marketListService: MarketListService = {
  getMarketLists: () => {

    if (!window.localStorage) return [];
    const marketListsStr = localStorage.getItem('marketLists');
    if (!marketListsStr) return [];
    return JSON.parse(marketListsStr);

  },
  getMarketListByUUID: function (uuid: string): MarketList | undefined {
    return getMarketLists().find(marketList => marketList.uuid == uuid);
  },


  saveMarketList: function (marketList: MarketList): void {

    if (!window.localStorage) return;

    const marketLists = getMarketLists();

    removeAndSetLists([
      ...marketLists,
      marketList
    ]);
  },

  addMarketListItem: function (newMarketListItem: MarketListItem, marketListUUID: string): void {

    if (!window.localStorage) return;

    const marketLists = getMarketLists();
    const marketList = getMarketListByUUID(marketListUUID);

    if (!marketList) return;

    const updatedMarketLists = marketLists.map(marketList => {

      if (marketList.uuid != marketListUUID) return marketList;

      marketList.items = [
        ...marketList.items,
        newMarketListItem
      ];
      return marketList;
    });
    removeAndSetLists(updatedMarketLists);
  },

  toggleListItemChecked: function (toggledListItems: MarketListItem[], marketListUUID: string): void {

    if (!window.localStorage) return;

    const marketLists = getMarketLists();
    // const marketList = getMarketListByUUID(marketListUUID);
    // if (!marketList) return;
    const updatedMarketLists = marketLists.map(marketList => {

      if (marketList.uuid != marketListUUID) return marketList;
      marketList.items = toggledListItems;
      return marketList;
    });

    removeAndSetLists(updatedMarketLists);


  },
  removeMarketListItem: function (filteredItems: MarketListItem[], marketListUUID: string): void {

    console.log(filteredItems);
    console.log(marketListUUID);

    const marketLists = getMarketLists();

    const udpatedMarketList = marketLists.map(marketList => {
      if (marketList.uuid != marketListUUID) return marketList;
      marketList.items = filteredItems;
      return marketList;
    });

    removeAndSetLists(udpatedMarketList.filter(marketList => marketList.items.length > 0));
  }
}

const removeAndSetLists = (marketLists: MarketList[]) => {
  localStorage.removeItem('marketLists');
  localStorage.setItem('marketLists', JSON.stringify(marketLists));
}


export const { getMarketLists, getMarketListByUUID, saveMarketList, addMarketListItem } = marketListService ;
export default marketListService;