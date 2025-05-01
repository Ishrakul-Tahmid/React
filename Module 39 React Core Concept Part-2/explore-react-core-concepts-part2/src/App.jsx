import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './users'
import Friends from './friends'


function App() {


  function handleClick() {
    alert('Button clicked')
  }

  const handleClick2 = () => {
    alert('Button-2 clicked')
  }

  const addFive = (num) => {
    alert(num + 5);
  }
  return (
    <> 
      <h3>React core concepts-2</h3>

      <Friends />

      <Users> </Users>

      <Counter />
      <Team />

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click-2</button>
      <button onClick={() => alert('Button-3 clicked')}>Click-3</button>
      <button onClick={() => addFive(10)}>Click-4</button>
    </>
    // it is called fragment

  )
}

export default App
