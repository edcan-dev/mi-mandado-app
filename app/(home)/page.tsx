
import { getMarketLists } from "@/src/services";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";



export default function Home() {

  const marketLists = getMarketLists();
  return (
    <>

      <main className="px-4 py-8">

        <h1 className="text-xl text-center mb-8">Listas Creadas</h1>

        <div className="mb-8">

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

        </div>

        <div className="flex justify-between w-full ">
          <Link
            href={'/market-list/create'}
            className="bg-zinc-800 p-4 rounded-md w-full text-center transition-all hover:bg-blue-900"
          >
            Crear Nueva Lista
          </Link>
          
        </div>
        

      </main> 
    
    </>
  );
}
