import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

        <Header text="Give feedback"></Header>
        <Button text="Good" counter={good} func={setGood}></Button>
        <Button text="Neutral" counter={neutral} func={setNeutral} ></Button>
        <Button text="Bad" counter={bad} func={setBad}></Button>

        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      
    </div>
  )
}

const Header = (props) => <h1>{props.text}</h1>

const Button = ({text, counter, func}) => <button onClick={() => rate(counter, func)}>{text}</button>

const rate = (counter, func) => func(counter + 1); 

const Statistic = ({text, counter}) => {
 
  return (
    <tr>
      <td>{text}</td>
      <td>{counter}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
    
    if(!(good === 0 && neutral === 0 && bad === 0)) {

      const amount = good + neutral + bad; 
      const average = (good - bad)/amount; 
      const percentagePositive = (good*100)/amount; 

      return (
          <div>
          <Header text="Statistics"></Header>
          <table>
            <tbody>
          <Statistic text="good:" counter={good}></Statistic>
          <Statistic text="neutral:" counter={neutral}></Statistic>
          <Statistic text="bad:" counter={bad}></Statistic>
          <Statistic text="All:" counter={amount}></Statistic>
          <Statistic text="Avergage:" counter={average}></Statistic>
          <Statistic text="Percent positive:" counter={percentagePositive}></Statistic>
          </tbody>
        </table>
          </div>
      )
    }

    return(
      <div><p> No stats to show </p></div>
    )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)