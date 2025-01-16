import { MarketList } from "@/src/interfaces";
import { randomUUID } from "crypto";

const getMarketLists = (): MarketList[] => {

  // return localStorage.getItem('marketLists');
  const dummyData: MarketList[] = [
    {
      uuid: '82002134-58a0-4b19-9c2e-1efa662fe68a',
      name: "Lista de mercado",
      items: [
        {
          uuid: randomUUID(),
          name: "Item 1"
        },
        {
          uuid: randomUUID(),
          name: "Item 2"
        }
      ]
  
    }, {
      uuid: '00c7e3dd-7d8c-467c-9ea6-07cfd370cfdf',
      name: "Lista de chedraui",
      items: [
        {
          uuid: randomUUID(),
          name: "Item 1"
        },
        {
          uuid: randomUUID(),
          name: "Item 2"
        }
      ]
  
    }
  ]
  return dummyData;
};

const getMarketListByUUID = (uuid: string): MarketList | undefined => {
  return getMarketLists().find((marketList) => marketList.uuid === uuid);
};



export { getMarketLists, getMarketListByUUID};