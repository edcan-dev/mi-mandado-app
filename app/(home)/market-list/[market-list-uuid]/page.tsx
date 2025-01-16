import { getMarketListByUUID } from "@/src/services";
import { redirect } from "next/navigation";
import { MarketList } from '@/src/components';

interface Props {
  params: Promise<{ "market-list-uuid": string }>;
}

export default async function MarketListPage({ params }: Props) {
  const marketListUUID = (await params)["market-list-uuid"];
  const marketList = getMarketListByUUID(marketListUUID);

  if (!marketList) redirect("/");

  return (
    <main className="px-4 py-8">
      <MarketList marketList={ marketList } />
    </main>
  );
}
