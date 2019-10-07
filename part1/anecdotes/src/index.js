import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0); 


  return (
    <>
      {props.anecdotes[selected]}
      <Button text="Click for new anecdote" onClick={setNewAnectode} setState={setSelected}> </Button> 
      <VoteButton text="Submit vote" selected={selected} votes={votes} setState={setVotes} setMostVoted = {setMostVoted}> </VoteButton>
      <p> Votes: {votes[selected]} </p> 
      <p> Most voted: {props.anecdotes[mostVoted]} </p>
    </>
  )
}

const Button = ({text, onClick, setState}) => {

    return (
        <div>
            <button onClick={onClick(setState)}>{text}</button>
        </div>
    )
}

const VoteButton = ({text, selected, votes, setState, setMostVoted}) => {

  return (
    <button onClick={submitVote(selected, votes, setState, setMostVoted)}>{text}</button>
  )
}

const setNewAnectode = (setState) => {

    return (
        () => {
    const randomInt = Math.floor(Math.random() * Math.floor(6));
    setState(randomInt);
        }
    ) 
}

const submitVote = (selectedAnecdote, votes, setState, setMostVoted) => {
  

    return( () => {
      const copyOfArr = [...votes]
      copyOfArr[selectedAnecdote] = copyOfArr[selectedAnecdote] + 1; 
      setState(copyOfArr);

      // find top voted anecdote
      let max = 0; 
      let mostVoted; 
      let counter = 0; 

      votes.forEach(element => {
        if(element > max) {
          max = element
          mostVoted = counter; 
          }
          counter++; 
      });

      setMostVoted(mostVoted); 

    } 
    )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)