import { useState } from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div>
      <button onClick={ increment } className={ classes.btn }>Inc</button>
      <button onClick={ decrement } className={ classes.btn }>Dec</button>
      <h1>{ count }</h1>
    </div>
  )
}

export default Counter

