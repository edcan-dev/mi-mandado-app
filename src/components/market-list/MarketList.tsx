"use client";

import { MarketList as MarketListI } from "@/src/interfaces";
import { MarketListItemsList } from "./market-list-items-list/MarketListItemsList";
import { useState } from "react";

interface Props {
  marketList: MarketListI;
}

export const MarketList = ( { marketList }: Props ) => {

  const [marketListState, setMarketListState] = useState(marketList);

  return (
    <div>

        <h1 className="text-xl font-bold text-center mb-8">{marketList.name}</h1>
        {/* MarketListItemsList */}
        <MarketListItemsList
          marketListItems={ marketList.items }
        />

      </div>
  )
}
