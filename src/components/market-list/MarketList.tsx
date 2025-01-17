"use client";

import { MarketListItemsList } from "./market-list-items-list/MarketListItemsList";
import { getMarketListByUUID } from "@/src/services";
import { redirect } from "next/navigation";

interface Props {
  marketListUUID: string
}

export const MarketList = ( { marketListUUID }: Props ) => {

  const marketList = getMarketListByUUID(marketListUUID);
  if (!marketList) redirect("/");

  // const [marketListState, setMarketListState] = useState(marketList)

  return (
    <div>

        <h1 className="text-xl font-bold text-center mb-8">{marketList.name}</h1>
        {/* MarketListItemsList */}
        <MarketListItemsList
          marketListItems={ marketList.items }
          marketListUUID={ marketListUUID }
        />

      </div>
  )
}
