import React, {useContext, useState} from 'react'
import {BookContext} from '../contexts/BookContext'

const NewBookForm = () =>{
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const {dispatch} = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:"ADD_BOOK", book: { title, author }})

    setTitle('')
    setAuthor('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      <input type="text" placeholder="author" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>

      <input type="submit" value="add book"/>
    </form>
  )
}

export default NewBookForm