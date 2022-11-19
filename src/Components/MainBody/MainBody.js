import React from 'react'
import List from "../List/List";
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
const MainBody = () => {
  return (
    <div className='tw-m-6' > 
      <SearchBar/>
      <List/>
      <Pagination/>
    </div>
  )
}

export default MainBody