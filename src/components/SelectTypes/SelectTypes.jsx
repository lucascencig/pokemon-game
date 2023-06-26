import agua from '../../assets/agua.jpg'
import fuego from '../../assets/fuego.jpg'
import pokeball from '../../assets/poke.jpg'
import s from '../../styles/selectTypes.module.css'

import { AiOutlineReload } from "react-icons/ai";

import { useEffect, useState } from "react"
import axios from "axios"
const api = 'https://pokeapi.co/api/v2/type/'


//hacer que se vean las imagenes segun el tipo de elemento

export default function SelectTypes() {
  const [type, setTypes] = useState([])
  const [randomType, setRandomType] = useState([])

  useEffect(() => {
    axios.get(api)
      .then(res => {
        var typespokemons = res.data.results.map(e => e.name)
        console.log(typespokemons)
        setTypes(typespokemons)
        // pokemons.map(e => console.log())

      })
  }, [])


  const randomElements = type.sort(() => 0.5 - Math.random()).slice(0, 5);


  function genRandomType() {
    const newRandomType = randomElements;

    setRandomType(newRandomType)
  }



  return (
    <div>
      <div className={s.yourTypes}>
        <p>Tipos</p>
        <button className={s.randomBtn} onClick={genRandomType}>
          <AiOutlineReload />
        </button>
        <div className={s.types}>

          <span >
            {
              randomElements.slice(0, 1).map(e => {

                return (

                  <li className={s.randomElements} key={e}>
                    <span className={s.randomElements}>{randomElements + ' '}
                    </span>
                  </li>
                )
              })
            }
          </span>


        </div>

      </div>

    </div >
  )
}