import {useState, useEffect} from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import  GifsDisplay from './components/GifsDisplay'
import fetchData  from './utils/fetchHelper'
import API_KEY from './utils/config'
import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';

function App() {
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch />
        <br />
        <GifContainer />
      </div>
    </div>
  );
}

export default App;
