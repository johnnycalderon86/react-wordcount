
import React, { useState, useEffect, useRef } from 'react'

import './App.css';


export default function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState("")
  const [timer, setTimer] = useState(STARTING_TIME)
  const [start, setStart] = useState(false)
  const [finalCount, setFinalCount] = useState(0)

  const textAreaRef = useRef(null) 

  function handleChange(event) {
    const { value } = event.target

    setText(value)
  }

  function wordCount(words) {
    const wordsArr = text.trim().split(' ')
    const filtered = wordsArr.filter(word => word !== "")
    return filtered.length
  }

  function startGame() {
    setStart(true)
    setTimer(STARTING_TIME)
    setText("")

    textAreaRef.current.focus()

}

function endGame() {
  setStart(false)
  setFinalCount(wordCount(text))
}


  useEffect(() => {
    if (start && timer > 0) {

      setTimeout(() => {
        setTimer(prevState => prevState - 1)
      }, 1000)
    } else if (timer === 0) {
      endGame()
    }

  }, [timer, start])



  return (
    <div className="App">
      <h1>WordCount</h1>
      <textarea ref={textAreaRef} onChange={handleChange} value={text} />

      <h4>Time remaining:{timer}</h4>
      <button onClick={startGame}>Start</button>
      <h1>WordCunt {finalCount}</h1>
    </div>
  )
}

