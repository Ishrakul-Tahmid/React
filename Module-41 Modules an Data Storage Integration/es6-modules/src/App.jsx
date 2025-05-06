import { useEffect, useState } from 'react'
import Sunglass from './Components/Sunglass/Sunglass'
import Watch from './Components/Watch/Watch';

function App() {
  // const watches = [
  //   { id: 1, name: 'Apple watch', price: 200 },
  //   { id: 2, name: 'Samsu watch', price: 2000 },
  //   { id: 3, name: 'MI watch', price: 200 }
  // ];
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  })
  return (
    <>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
