import React, {useState} from 'react'
import "./Mainfield.css"
import InputField from '../InputField/InputField'

const Mainfield = () => {
  let input 
  let result
  const [finalResult, setfinalResult] = useState()
  const getInput =(data)=>{
    input= data
  }
  const getFinalRatrs =(data)=>{
    result = data
    console.log(result)
  }
  const resulthandeler = ()=>{
    if(input===undefined){
      alert("please enter amount")
    }
    else{
      console.log(input)
    let text = input + " X " + result +" = "
    setfinalResult( text + (input* result).toFixed(2))
    }
  }
  

  return (
    <div className='mainfield'>
      <InputField getInput={getInput} getFinalRatrs={getFinalRatrs}/>
      <button onClick={resulthandeler}>Result</button>
      <h3 className='result'>{finalResult} </h3>
    </div>
  )
}

export default Mainfield
