import { useContext } from "react";
import CardList from "../../components/CardList/CardList";
import { Context } from "../../utils/fetch";
function Dasboard() {
  const { daftarSurat, isLoading } = useContext(Context);
  return (
    <div className="">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {daftarSurat != undefined ? (
            <div className="w-full min-h-[85vh] flex">
              {console.log(daftarSurat)
              }
              <aside className="hidden md:block w-[25%] p-4 overflow-y-auto">
                <CardList data={daftarSurat} isLoading={isLoading}/>
              </aside>
              <main className="w-full md:w-[75%] bg-blue-300"></main>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default Dasboard;
