import React, { useState } from 'react'
import "./InputField.css"
import Select from './SelectSection/Select'

const InputField = (props) => {
  const [amount , setAmount] = useState()
  const getAmount =(event)=>{
    setAmount(event.target.value)
  }
  props.getInput(amount)

  const [singleRates , setSinglerates] = useState()
  
  const getFinalRatrs =(data)=>{
    setSinglerates(data)
    console.log(singleRates)
  }
  props.getFinalRatrs(singleRates)

  return (
    <div>
      <form>
            <div className='amount'>
                <label htmlFor='amount'>Amount</label>
                <input id='amount' type='number' value={amount} onChange={getAmount} placeholder='Enter amount'/>
            </div>
            <Select getFinalRatrs={getFinalRatrs}/>
      </form>
    </div>
  )
}

export default InputField
