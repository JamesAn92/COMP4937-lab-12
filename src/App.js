import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Page from './Page';
import Pagination from './Pagination';


function App() {

const [pokemons, setPokemons] = useState([]);
const [pageNumber, setPageNumber] = useState(1);


  useEffect(() => {
    async function getPokemons() {
      const res = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      setPokemons(res.data);

    }    
    getPokemons();
  }, [])
  
  return (
    <div>
      <Page
      pokemons={pokemons}
      pageNumber={pageNumber} />
      <Pagination
      pokemons={pokemons}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
