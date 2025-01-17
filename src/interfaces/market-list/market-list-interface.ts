export interface MarketList {

  uuid: string;
  name: string;
  items: MarketListItem[];

}

export interface MarketListItem {

  uuid: string;
  name: string;
  isChecked: boolean;

}