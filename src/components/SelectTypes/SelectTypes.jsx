import agua from '../../assets/agua.jpg'
import fuego from '../../assets/fuego.jpg'
import electricidad from '../../assets/electricidad.jpg'
import fantasma from '../../assets/fantasma.jpg'
import hielo from '../../assets/hielo.jpg'
import hierva from '../../assets/hierva.jpg'
import normal from '../../assets/normal.jpg'
import psiquico from '../../assets/psiquico.jpg'
import roca from '../../assets/roca.jpg'
import tierra from '../../assets/tierra.jpg'
import dragon from '../../assets/dragon.jpg'
import lucha from '../../assets/lucha.jpg'
import veneno from '../../assets/veneno.jpg'
import bicho from '../../assets/bicho.jpg'
import volador from '../../assets/volador.jpg'
import oscuro from '../../assets/oscuro.jpg'
import sombra from '../../assets/shadow.png'
import hada from '../../assets/hada.jpg'
import acero from '../../assets/acero.jpg'
import unknow from '../../assets/unknow.png'




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

          <span className={s.typesSelected}>
            {
              randomElements.slice(0, 5).map(e => {

                return (

                  <li className={s.randomElements} key={e}>
                    {
                      e === "water" ?
                        <img src={agua} alt="" /> :
                        null
                    }
                    {
                      e === "fire" ?
                        <img src={fuego} alt /> :
                        null
                    }
                    {
                      e === "dragon" ?
                        <img src={dragon} alt /> :
                        null
                    }
                    {
                      e === "ghost" ?
                        <img src={fantasma} alt /> :
                        null
                    }
                    {
                      e === "psychic" ?
                        <img src={psiquico} alt /> :
                        null
                    }
                    {
                      e === "ice" ?
                        <img src={hielo} alt /> :
                        null
                    }
                    {
                      e === "rock" ?
                        <img src={roca} alt /> :
                        null
                    }
                    {
                      e === "grass" ?
                        <img src={hierva} alt /> :
                        null
                    }
                    {
                      e === "ground" ?
                        <img src={tierra} alt /> :
                        null
                    }
                    {
                      e === "electric" ?
                        <img src={electricidad} alt /> :
                        null
                    }
                    {
                      e === "normal" ?
                        <img src={normal} alt /> :
                        null
                    }
                    {
                      e === 'fighting' ?
                        <img src={lucha} alt /> :
                        null
                    }
                    {
                      e === 'poison' ?
                        <img src={veneno} alt="poison" title='poison' /> :
                        null
                    }
                    {
                      e === 'bug' ?
                        <img src={bicho} alt="poison" title='poison' /> :
                        null
                    }
                    {
                      e === 'flying' ?
                        <img src={volador} alt="poison" title='poison' /> :
                        null
                    }
                    {
                      e === 'dark' ?
                        <img src={oscuro} alt="poison" title='poison' /> :
                        null
                    }
                    {
                      e === 'fairy' ?
                        <img src={hada} alt="poison" title='poison' /> :
                        null
                    }
                    {
                      e === 'shadow' ?
                        <img src={sombra} alt="poison" title='poison' /> :
                        null
                    }
                    {
                      e === 'steel' ?
                        <img src={acero} alt="poison" title='poison' /> :
                        null
                    }
                    {
                      e === 'unknown' ?
                        <img src={unknow} alt="poison" title='poison' /> :
                        null
                    }

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