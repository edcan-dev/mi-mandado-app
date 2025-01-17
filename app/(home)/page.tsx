
import { UserMarketLists } from "@/src/components";
import Link from "next/link";

export default function HomePage() {

  return (
    <>

      <main className="px-4 py-8">

        <h1 className="text-xl text-center mb-8">Listas Creadas</h1>

        <UserMarketLists />

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
