import { useState } from "react"


export default function Points() {

  const [points, setPoints] = useState(0)

  // logica de puntos por jugador: 

  const enemyName = "Somebody"
  return (
    <div>
      <div className="">
        <p>puntos {enemyName} </p>
        <span>{points}</span>
        <hr />
        <p>You</p>
        <span>{points}</span>
      </div>
    </div>
  )
}