import React , {useContext} from 'react'
import ApiContext from '../../Context/ContextApi'
const Pagination = () => {
    const {books , BooksPerPage , paginate}= useContext(ApiContext);
    const pageNumbers =[];
    for(let i = 1 ; i <= Math.ceil(books.length /BooksPerPage) ; i++)
        pageNumbers.push(i);
  return (
    <nav className='page navigation'>
        <ul className='pagination' >
            {
                pageNumbers.map((number)=>(
                    <li key={number} className="page-item" >
                        <a onClick={()=>paginate(number)} href='!#' className='page-link'  >
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination