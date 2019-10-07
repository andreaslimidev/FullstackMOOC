import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [value, setValue] = useState(10)
  
    return (
      <div>
        {value}
        <button>reset to zero</button>
      </div>
    )
  }

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
  
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

  const Display = ({ counter }) => <div>{counter}</div>

  const Button = ({onClick, text}) => {

    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
  }

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)