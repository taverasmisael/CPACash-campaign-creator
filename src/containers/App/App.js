import React, { PureComponent, Fragment } from 'react'

import Condition from '../../components/Condition'
class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Condition
          id={0}
          conditionName="Operating System"
          mode={false}
          conditionsList={{
            0: {
              id: '0',
              value: 'Android'
            },
            1: {
              id: '1',
              value: 'iOS'
            },
            2: {
              id: '2',
              value: 'BB'
            },
            3: {
              id: '3',
              value: 'Window'
            },
            4: {
              id: '4',
              value: 'Mac'
            }
          }}
          onDelete={id => () => console.log(id)}
        />
      </Fragment>
    )
  }
}

export default App
