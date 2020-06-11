import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'book 1', id:1},
    {title: 'book 2', id:2},
    {title: 'book 3', id:3}
  ])

  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;