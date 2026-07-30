import { useState } from 'react'
import './App.css'

function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Saludo nombre="Mole" />
      <Saludo nombre="Facundo" />

      <button onClick={() => setCount(count + 1)}>
        Llevás {count} clics
      </button>
      <p>El doble es {count * 2}</p>
    </>
  )
}

export default App