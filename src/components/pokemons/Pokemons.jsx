import { useEffect, useState } from "react"
import axios from "axios"
import s from '../../styles/pokemons.module.css'

const api = 'https://pokeapi.co/api/v2/pokemon/?limit=150'
// const api2 = 'https://pokeapi.co/api/v2/pokemon-form/1/'
export default function GetAllPokemons() {

  const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState('true');
  const arr = [];

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
          setPoke(arr);
        }),
      ));
  }, []);


  setTimeout(() => {
    setLoad(false);
  }, 200);

  return (
    <div className="App">
      <div className='pokegallery'>
        {load ? (
          <p>Loading...</p>
        ) : (
          poke.map((img, i) => (

            <li>
              <img src={img.sprites.front_default} alt='pokemon' />
              <div >
                <h5 >{img.name}</h5>
                <h6>type: {img.types[0].type.name}</h6>
              </div>
            </li>



          ))
        )}
      </div>
    </div>
  );

}