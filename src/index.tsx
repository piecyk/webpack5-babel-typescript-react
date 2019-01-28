import React from 'react'
import ReactDOM from 'react-dom'

import { add } from 'Foo'
import Example from 'lib/Example'

enum Check {
  Foo = 'Foo',
  Bar = 'Bar',
}

const Foo = () => (
  <div style={{ fontSize: 24 }}>
    Hello: {Check.Bar} | {add(3, 2)}
    <Example />
  </div>
)

ReactDOM.render(<Foo />, document.getElementById('root'))
