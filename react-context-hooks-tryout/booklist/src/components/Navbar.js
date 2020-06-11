import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';

const Navbar   = () => {
  const {books} = useContext(BookContext)
  return (
    <div className="navbar">
      <h1>Ninja reading list</h1>
      <p>number of books {books.length}</p>
    </div>
   );
}

export default Navbar;