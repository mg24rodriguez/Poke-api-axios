import './App.css';
import PersonalList from './Components/PokemonList'
import axios from "axios";
import React, {useState} from "react"

function App() {

  const [pokemons, setPokemons] = useState ([]);

  const getPokemon = async () => {
        const data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
          setPokemons(data.data.results);
  }

  return (
    <div className="App">
    <button onClick = { getPokemon } > Pokemon list</button>
    <PersonalList data = { pokemons}/>
    </div>
  );
}

export default App;
