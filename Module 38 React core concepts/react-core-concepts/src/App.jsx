import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actors = ['a', 'b', 'c', 'd', 'e', 'f']
  const singers = [
  { id: 1, name: 'Dr. Mahfuzur Rahman', age: 68 },
  { id: 2, name: 'Eva Rahman', age: 38 },
  { id: 3, name: 'Shuvro Dev', age: 58 }
  ];
  
  const books = [
  { id: 1, name: 'physics', price: 100 },
  { id: 2, name: 'Math', price: 120 },
  { id: 3, name: 'Chemistry', price: 130 },
  { id: 4, name: 'Biology', price: 150 }
];


  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name='Ishrakul Tahmid' />
      {
        actors.map((actor, index) => <Actor key={index} name={actor} />)
      }
      {/* <Todo task="Learn react" isDone={true}/>
      <Todo task="Explore core concepts" isDone={false}/> */}
      {/* 
      <Device name="Watch" price='55'>  </Device>
      <Device name='mobile' price='3'>  </Device>
      <Device>  </Device>
      <Person>  </Person>
      <Person>  </Person>
      <Person>  </Person>
      <Student>  </Student>
      <Student grade={7} score={88}>  </Student>
      <Developer>  </Developer>
      */}
    </>
  )
}

function Person() {
  const age = 30
  const money = 1000
  const person = {
    name: 'Ishrakul Tahmid',
    age: 30,
    money: 1000
  }
  return (
    <div className='student'>
      <h2>Person</h2>
      <p>I am {person.name} with age: {age+money}</p>
    </div>
  )
}

const { grade, score } = { grade: 'A+', score: 100 }

function Student({grade=1, score=0 }) {
  console.log(grade, score)
  const [name, setName] = useState('Ishrakul Tahmid')
  const [age, setAge] = useState(30)
  const [money, setMoney] = useState(1000)

  return (
    <div className='student'>
      <h2>Student</h2>
      <p>I am {name} with age: {age}</p>
      <p>I have ${money}</p>
      <p>I grade {grade} with score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
    bordwer: '1px solid black',
    padding: '10px',
    margin: '10px',
    borderRadius: '50px',
    backgroundColor: 'lightgray'
  }
  return (
    <div style={{
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
    bordwer: '1px solid black',
    padding: '10px',
    margin: '10px',
    borderRadius: '50px',
    backgroundColor: 'lightgray'
  }} className='developer'>
      <h2>Developer</h2>
      <p>I am a developer</p>
    </div>
  )
  // return (
  //   <div style={developerStyle} className='developer'>
  //     <h2>Developer</h2>
  //     <p>I am a developer</p>
  //   </div>
  // )
}

function Device(props) {
  return <h2>This device: {props.name} price: {props.price}</h2>
}
export default App
