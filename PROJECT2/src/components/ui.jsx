import { useEffect, useState } from 'react'
import './ui.css'
import die1 from '../assets/die1.png'
import die2 from '../assets/die2.png'
import die3 from '../assets/die3.png'
import die4 from '../assets/die4.png'
import die5 from '../assets/die5.png'
import die6 from '../assets/die6.png'

const dieroll = () => {
  return Math.floor(Math.random() * 6) + 1
}

const diceImages = {
  1: die1,
  2: die2,
  3: die3,
  4: die4,
  5: die5,
  6: die6,
}

const Ui = ({ onStart }) => {
  const [userInput, setUserInput] = useState('')
  const [confirmedNumber, setConfirmedNumber] = useState(null)
  const [rollResult, setRollResult] = useState(null)
  const [score, updateScore] = useState(0)
  const [bin, setBin] = useState(false)
  const [rules, setRules] = useState(false)

  useEffect(() => {
    console.log(userInput)
  }, [userInput])

  const handleRoll = () => {
    const result = dieroll()
    setRollResult(result)

    if (result === confirmedNumber) {
      updateScore((prevScore) => prevScore + result)
    } else {
      updateScore((prevScore) => prevScore - 2)
    }
  }

  const handleConfirm = () => {
    const value = Number(userInput)

    if (value > 0 && value < 7) {
      alert('you have chosen ' + value)
      setConfirmedNumber(value)
      setBin(true)
    } else {
      alert('Please enter a number between 1 and 6')
      setConfirmedNumber(null)
      setBin(false)
    }
  }

  return (
    <div className="ui-root">
      <h1>Dice Roller</h1>
       <h3>Click to check your luck!</h3>
       <input id="input"
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value)
          setBin(false)
          setRollResult(null)
        }}
        placeholder="Enter your number"
      />
      <button id="confirm" onClick={handleConfirm}>Confirm number</button>
      
      {bin && (
        <button id="roll" onClick={handleRoll}>Roll the dice!</button>
      )}
      {rollResult !== null && (
        <img id="die" src={diceImages[rollResult]} />
      )}

    
      <p>Dice rolled: {rollResult}</p>
      <p>Your score is: {score}</p>
      <button id="reset" onClick={() => updateScore(0)}>Reset Score</button>
    {rules ? (
        <div className="rules">
          <h2>Rules of the Game:</h2>
          <ul>
            <li>Enter a number between 1 and 6.</li>
            <li>Click "Roll the dice!" to see if you guessed correctly.</li>
            <li>If you guess right, you earn points equal to the dice roll.</li>
            <li>If you guess wrong, you lose 2 points.</li>
            <li>You can reset your score at any time.</li>
          </ul>
          <button id="close-rules" onClick={() => setRules(false)}>Close Rules</button>
        </div>
      ) : (
        <button id="show-rules" onClick={() => setRules(true)}>Show Rules</button>
      )}
    </div>
  )
}


export default Ui
