import { useState } from 'react'
import './Counder.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)



  return (
    <div>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Counter

