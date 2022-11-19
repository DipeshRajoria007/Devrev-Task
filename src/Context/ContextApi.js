import React,{ useState ,createContext } from "react";
import { Data } from '../Data/Data';


const ApiContext = createContext();

export const ApiProvider = ({children})=>{
    const [search, setSearch] = useState("");
    const [currentPage ,setCurrentPage] = useState(1);
    const [BooksPerPage, setBooksPerPage] = useState(6);
    const books = Data.filter((book)=>{ return search.toLowerCase()==="" ? book : book.title.toLowerCase().includes(search)}) ;

    const paginate = ( pageNumber ) => setCurrentPage(pageNumber)
    

    return (
        <ApiContext.Provider value={{ 
            books ,
            search,
            setSearch,
            currentPage,
            setCurrentPage,
            BooksPerPage,
            setBooksPerPage, 
            paginate,
            }} >
            {children}
        </ApiContext.Provider>
    )
}
export default ApiContext ;
