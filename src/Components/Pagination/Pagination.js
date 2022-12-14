import React , {useContext} from 'react'
import ApiContext from '../../Context/ContextApi'
const Pagination = () => {
    const {books, filteredBooks , BooksPerPage , paginate}= useContext(ApiContext);
    const pageNumbers =[];
    for(let i = 1 ; i <= Math.ceil(filteredBooks.length /BooksPerPage) ; i++)
        pageNumbers.push(i);
  return (
    <nav className='page navigation'>
        <ul className='pagination' >
            {
                pageNumbers.map((number)=>(
                    <li key={number} className="page-item" >
                        <p onClick={()=>paginate(number)} className='page-link'  >
                            {number}
                        </p>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination