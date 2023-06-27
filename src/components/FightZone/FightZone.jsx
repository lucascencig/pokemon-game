import Points from "../Puntajes/Points"
import SelectTypes from "../SelectTypes/SelectTypes"
import GetAllPokemons from "../pokemons/Pokemons"
import s from '../../styles/fightzone.module.css'
import agua from '../../assets/agua.jpg'
import fuego from '../../assets/fuego.jpg'
import avatar from '../../assets/avatar.png'
import { useEffect, useState } from "react"
import axios from "axios"
const api = 'https://pokeapi.co/api/v2/type/'


//hacer en canva los diseños de los tipos que van en el 
//campo de batalla con un borde de 10px

//cambiar el fondo del campo de batalla a algo mas blureado
//o algo que se vea mejor.

export default function FightZone() {
  const [type, setTypes] = useState([])

  useEffect(() => {
    axios.get(api)
      .then(res => {
        var typespokemons = res.data.results.map(e => e.name)
        console.log(typespokemons)
        setTypes(typespokemons)
        // pokemons.map(e => console.log())

      })
  }, [])

  const enemyName = "Somebody"

  return (
    <div>
      <main>
        <div className={s.enemyPhoto}>
          <img src={avatar} alt="foto contrincante" />
          <p>{enemyName}</p>
        </div>

        <div className={s.fightZone}>
          <p className={s.titlezone}>zona de batalla</p>

          <div className={s.battle}>
            <img className={s.enemyType} src={agua} alt="tipo de contrincante" />
            {/* <img src={type[0]} alt="" /> */}
            <h2>VS</h2>
            <img className={s.yourType} src={fuego} alt="tipo elegido" />
          </div>
        </div>
      </main>

      <div>
        <Points />
      </div>

      <div>
        <SelectTypes />
      </div>

      <div>
        <GetAllPokemons />
      </div>


    </div>
  )
}