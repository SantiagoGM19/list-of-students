import React, { useState } from 'react'
import ListOfStudents from "./ListOfStudents"

const FormOfStudents = () => {

  const onAddStudent = (event) => {
    event.preventDefault();
    if (name && lastName) {
      const student = {
        name,
        lastName
      }
      setList([...list, student])
    }
  }

  const [list, setList] = useState([])

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const addName = (event) => {
    setName(event.target.value)
  }

  const addLastName = (event) => {
    setLastName(event.target.value)
  }


  return (
    <div>
      <h1>Hello from the list of students</h1>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" onChange={addName}/>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">LastName</label>
          <input type="text" class="form-control" id="lastName" onChange={addLastName}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={onAddStudent}>Submit</button>
        <ListOfStudents students={list} setList={setList}/>
      </form>
      {/* <form>
        <label>Name</label>
        <input onChange={addName} type="text" name="name" />
        <label>Last name</label>
        <input onChange={addLastName} type="text" name="lastName" />
        <button onClick={onAddStudent}>add student</button>
        <ListOfStudents students={list} />
      </form> */}
    </div>
  )
}

export default FormOfStudents
