import React, { useState } from 'react'

interface Props {
  initialCounter: number
}

export default function Example({ initialCounter }: Props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(initialCounter)

  return (
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
