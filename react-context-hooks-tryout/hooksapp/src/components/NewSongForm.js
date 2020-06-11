import React, {
  useState,
  useEffect
} from 'react';

const NewSongForm = ({addSong}) =>{
  const[title, setTitle] =useState('');
  const handleSubmit=(e) => {
    e.preventDefault();
    addSong(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Song name:</label>
      <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="submit" value="add song"/>

    </form>

  )
}

export default NewSongForm