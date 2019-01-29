import React from 'react'
import ReactDOM from 'react-dom'

import { sum } from 'Sum'
import Example from 'lib/Example'

enum Check {
  Foo = 'Foo',
  Bar = 'Bar',
}

const Foo = () => (
  <div style={{ fontSize: 24 }}>
    Hello: {Check.Bar} | {sum(3, 2)}
    <Example initialCounter={2} />
  </div>
)

ReactDOM.render(<Foo />, document.getElementById('root'))
