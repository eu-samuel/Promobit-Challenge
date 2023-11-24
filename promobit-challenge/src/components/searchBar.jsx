import { BsSearch } from 'react-icons/bs'
import { GetSearchedMovies } from '../scripts/getMovies'

export const SearchBar = (props) => {

    const startSearch = () => {
        GetSearchedMovies(props.setSearchedMovies, props.search)
        props.setSearch("")
    }

    return (
        <div className='flex items-center mt-[6vh] ml-[26vw]'>
        <input 
            type="text"
            name="search"
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
            className="bg-white rounded-md border-[1px] text-[18px] text-center 
            p-6 w-[50vw] h-[7vh] text-black border-gray-400"
            placeholder="Pesquisar por título"
        />
        <BsSearch 
            className="text-gray-500 z-50 text-[20px] relative right-[3vw] cursor-pointer"
            onClick={() => startSearch()}
        />
        </div>
    )
}