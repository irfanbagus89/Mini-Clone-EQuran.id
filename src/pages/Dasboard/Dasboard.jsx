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
            <div className="w-full h-[85vh] flex">
              <aside className="hidden lg:flex w-[25%] p-4 overflow-y-scroll lg:flex-col lg:justify-evenly lg:gap-4">
                <CardList data={daftarSurat} isLoading={isLoading}/>
              </aside>
              <main className="w-full lg:w-[75%] bg-blue-300"></main>
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
