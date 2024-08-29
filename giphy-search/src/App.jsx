import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import GifSearch from './components/GifSearch';
import GifContainer from './components/GifContainer';
import API_KEY from '../config.js'

function App() {
  const [gifList, setGifList] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  const GIF_API2=`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`
  const GIF_SEARCH_API=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`

  useEffect(()=>{
    const fetchGifs = async()=>{
      try {
        const response = await fetch(query ? GIF_SEARCH_API :  GIF_API2)
        const data = await response.json();
        if(data.data && data.data.length>0){
          setGifList(data.data);
        }else{
          setGifList([]);
        }
      } catch (error) {
        setError(error.message)
      }
    }
    fetchGifs()
  },[query])

  useEffect(()=>{
    console.log(gifList)
  },[gifList])

  return (
    <div>
      <NavBar color='black' title={<span className='navbar-title'>Giphy Search</span>} />
      <div className="ui container">
        <GifSearch setQuery={setQuery} />
        <br />
        <GifContainer gifList={gifList} />
      </div>
    </div>
  );
}

export default App;
