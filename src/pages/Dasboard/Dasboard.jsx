import {useContext} from 'react'
import CardList from '../../components/CardList/CardList'
import { Context } from '../../utils/fetch'
function Dasboard() {
  // const { daftarSurat, isLoading } = useContext(Context);
// console.log(context);


  return (
    <div className='w-full min-h-[85vh] flex'>
      <aside className='hidden sm:block w-[25%] p-4 overflow-y-auto'>
        {/* <CardList data={daftarSurat} isLoading={isLoading}/> */}
      </aside>
      <main className='w-full sm:w-[75%] bg-blue-300'></main>
    </div>
  )
}

export default Dasboard