import { useEffect, useState } from "react"
import axios from "axios"


//Hacer tabla para cada tipo.

export default function ElementTypes() {

  // const api = 'https://pokeapi.co/api/v2/pokemon/';
  const api = 'https://pokeapi.co/api/v2/type/'

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
  return (
    <div>
      <main>
        <h2>Tipos de elementos</h2>

        {/* SCROLL INFINITO */}
        {/* hacer un map para renderizar los tipos */}
        <table>
          <th>tipo</th>
          <tr>
            {type.map(i => {
              return (
                <li key={i}>{i}</li>
              )
            })}



          </tr>
          <th>fuerte</th>




          <th>debil</th>

          <th>inmune</th>

        </table>
      </main>
    </div>
  )
}