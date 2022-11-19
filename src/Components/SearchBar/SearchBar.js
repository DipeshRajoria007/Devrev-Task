import React , {useContext} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import ApiContext from '../../Context/ContextApi';

const SearchBar = () => {
    const {  setSearch , setFilter } = useContext(ApiContext);
  return (
    <div className='tw-flex tw-gap-4 tw-items-center' >
        <Form className='tw-w-full' >
            <InputGroup className='my-3' >
                <Form.Control onChange={ (e) => setSearch(e.target.value) } placeholder='search Books'/>
            </InputGroup>
        </Form>
        <Dropdown  >
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Categories
        </Dropdown.Toggle>

        <Dropdown.Menu onClick={(e)=> { setFilter(e.target.innerHTML) }} >
            <Dropdown.Item href="!#">All genre</Dropdown.Item>
            <Dropdown.Item href="!#">Comedy</Dropdown.Item>
            <Dropdown.Item href="!#">Documentary</Dropdown.Item>
            <Dropdown.Item href="!#">Drama</Dropdown.Item>
            <Dropdown.Item href="!#">Thriller</Dropdown.Item>
            <Dropdown.Item href="!#">Adventure</Dropdown.Item>
            <Dropdown.Item href="!#">Fantasy</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default SearchBar