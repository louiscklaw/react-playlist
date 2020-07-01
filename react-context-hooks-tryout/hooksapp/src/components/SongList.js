import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    {title: 'song1', id: 1},
    {title: 'song2', id: 2},
    {title: 'song3', id: 3},
    {title: 'song4', id: 4},
  ]);

  const addSong = (title) => {
    setSongs([...songs, {title, id: uuid()}])
  }

  const [age, setAge] = useState(20);

  // fires when rerender
  useEffect(() => {
    console.log('use effect hook songs', songs)
  }, [songs])

  useEffect(() => {
    console.log('use effect hook age', age)
  }, [age])

  return (
    <div className="song-list">
      <ul>
        {songs.map( song => {
          return (
            <li key={song.id}>{song.title}</li>
          )
        })}
        <NewSongForm addSong={addSong}/>
        <button onClick={()=>{setAge(age+1)}}>add 1 to age: {age}</button>
      </ul>
    </div>
   );
}

export default SongList;