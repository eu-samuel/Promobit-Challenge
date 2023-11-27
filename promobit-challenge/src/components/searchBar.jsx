import { useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import { startSearch, GlobalContext } from '../assets/exports'


export const SearchBar = () => {

    const context = useContext(GlobalContext)
    const { store, setStore } = context.context

    return (
        <div className='flex items-center mt-[6vh] ml-[26vw]'>
        <input 
            type="text"
            name="search"
            value={store.search}
            onChange={(e) => setStore({
                ...store,
                search: e.target.value
            }
                )}
            className="bg-white rounded-md border-[1px] text-[18px] text-center 
            p-6 w-[50vw] h-[7vh] text-black border-gray-400"
            placeholder="Pesquisar por título"
        />
        <BsSearch 
            className="text-gray-500 z-50 text-[20px] relative right-[3vw] cursor-pointer"
            onClick={() => startSearch(store, setStore)}
        />
        </div>
    )
}