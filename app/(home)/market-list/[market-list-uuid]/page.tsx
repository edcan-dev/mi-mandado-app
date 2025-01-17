import { MarketList } from '@/src/components';

interface Props {
  params: Promise<{ "market-list-uuid": string }>;
}

export default async function MarketListPage({ params }: Props) {
  const marketListUUID = (await params)["market-list-uuid"];

  return (
    <main className="px-4 py-8">
      <MarketList marketListUUID={ marketListUUID }/>
    </main>
  );
}
