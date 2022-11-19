import React ,{useContext} from 'react';
import ApiContext from '../../Context/ContextApi';
import Card from '../Card/Card';


const List = () => {

  const { books , currentPage, setCurrentPage, BooksPerPage, setBooksPerPage  } = useContext(ApiContext);
  
  // Get current post
  const indexOfLastBooks = currentPage * BooksPerPage;
  const indexOfFirstBooks = indexOfLastBooks - BooksPerPage;
  const currentBooks = books.slice(indexOfFirstBooks,indexOfLastBooks);

  return (
    <div>
        {
          currentBooks.map((book)=>(
            <Card book={book} key={book.id} />
          ))
        }
    </div>
  )
}

export default List