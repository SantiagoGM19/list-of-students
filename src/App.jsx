import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FormOfStudents from './components/FormOfStudents'

function App() {

  const [number, setNumber] = useState(0)

  const addToNumber = ()=>{
    setNumber(number + 1)
  }

  const substractToNumber = ()=>{
    setNumber(number - 1)
  }

  return (
    <div>
      <h1>My first application</h1>
      <h1>{number}</h1>
      <button onClick={addToNumber}>+</button>
      <button onClick={substractToNumber}>-</button>
      <FormOfStudents />
    </div>
  )
}

export default App
