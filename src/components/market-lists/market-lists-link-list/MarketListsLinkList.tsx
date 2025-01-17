"use client";

import { getMarketLists } from '@/src/services';
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const MarketListsLinkList = () => {

  const marketLists = getMarketLists();

  return (
    <>
    {
            marketLists.map((marketList) => (

              <Link
                href={`/market-list/${marketList.uuid}`}
                key={marketList.uuid}
                className="bg-zinc-700 px-4 mb-4 rounded-md flex justify-between items-center h-[75px]"
              >
                <h2 className="">{ marketList.name }</h2>
                <IoIosArrowForward size={ 50 } />

              </Link>

            ))
          }
    </>
  )
}

export default MarketListsLinkList;
