import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React core concepts recap</h1>
      <ol className=''>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Events</li>
        <li>State</li>
        <li>load data</li>
      </ol>
      <hr />
      <Posts />
    </>
  )
}

export default App
