import React, { useState } from 'react'

interface ExampleLabelProps {
  count: number
}

class ExampleLabel extends React.Component<ExampleLabelProps, {}> {
  constructor(props: ExampleLabelProps) {
    super(props)
  }
  public render() {
    const { count } = this.props
    this.log()

    return <p>You clicked {count} times!</p>
  }
  log() {
    console.log('render')
  }
}

interface Props {
  initialCounter: number
}

export default function Example({ initialCounter }: Props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(initialCounter)
  console.log('render: ', count)

  return (
    <div>
      <ExampleLabel count={count} />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
