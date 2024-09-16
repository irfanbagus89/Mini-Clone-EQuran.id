import { useContext, useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import { Context } from "../../utils/fetch";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import DetailSurat from "../../components/DetailSurat/DetailSurat";
function Dasboard() {
  const { daftarSurat, isLoading, setId, detailSurat } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    setId(id);
  });
  return (
    <div className="">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {daftarSurat != undefined ? (
            <div className="w-full h-[85vh] flex">
              <aside className="hidden lg:flex w-[25%] p-4 overflow-y-scroll lg:flex-col lg:justify-evenly lg:gap-4">
                <CardList data={daftarSurat} isLoading={isLoading} />
              </aside>
              <main className="w-full lg:w-[75%] p-4">
                <DetailSurat detailSurat={detailSurat} isLoading={isLoading}/>
              </main>
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
