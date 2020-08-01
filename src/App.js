
import React, {useState, useEffect} from 'react'

import './App.css';


export default function App() {

  
  const [text, setText] = useState("")
  const [timer, setTimer] = useState(5)
  const [start, setStart] = useState(false)

  function handleChange(event){
    const {value}= event.target

    setText(value)
  }

  function wordCount(words){
   const wordsArr = text.trim().split(' ')
   const filtered = wordsArr.filter(word => word !== "")
   
    
   return filtered.length

   
  }
  

useEffect(()=>{
  if(start && timer > 0){

    setTimeout(()=>{
      setTimer(prevState => prevState-1)
    }, 1000)
  }
},[timer,start])
  return (
    <div className="App">
          <h1>WordCount</h1>
           <textarea onChange={handleChange} value={text}/>
    
          <h4>Time remaining:{timer}</h4>
           <button onClick={()=>{
              setStart(true)
           }}>Start</button>
         <h1>WordCunt</h1>
        </div>
  )
}

