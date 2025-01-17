"use client";

import dynamic from 'next/dynamic'
 
const MarketListsLinkList = dynamic(
  () => import('../market-lists-link-list/MarketListsLinkList'),
  { ssr: false }
)

export const UserMarketLists = () => {
  
  return (
    <div className="mb-8">
      <MarketListsLinkList />
    </div>
  )
}