import { MarketList } from "@/src/interfaces";
import { randomUUID } from "crypto";

interface MarketListService {
  getMarketLists: () => MarketList[],
  getMarketListByUUID: (uuid: string) => MarketList | undefined,
  saveMarketListService: (marketList: MarketList) => void
}


const marketListService: MarketListService = {
  getMarketLists: () => {
    const dummyData: MarketList[] = [
      {
        uuid: '82002134-58a0-4b19-9c2e-1efa662fe68a',
        name: "Lista de mercado",
        items: [
          {
            uuid: randomUUID(),
            name: "Item 1Item 1Item",
            isChecked: true
          },
          {
            uuid: randomUUID(),
            name: "Item 2",
            isChecked: false
          }
        ]
      }, {
        uuid: '00c7e3dd-7d8c-467c-9ea6-07cfd370cfdf',
        name: "Lista de chedraui",
        items: [
          {
            uuid: randomUUID(),
            name: "Item 1",
            isChecked: true
          },
          {
            uuid: randomUUID(),
            name: "Item 2",
            isChecked: false
          }
        ]
      }
    ];
    return dummyData;
  },
  getMarketListByUUID: function (uuid: string): MarketList | undefined {
    return getMarketLists().find(marketList => marketList.uuid == uuid);
  },


  saveMarketListService: function (marketList: MarketList): void {

    if(!window.localStorage) return;

    console.log(window.localStorage)
    console.log(marketList)

  }


}


export const { getMarketLists, getMarketListByUUID, saveMarketListService } = marketListService ;