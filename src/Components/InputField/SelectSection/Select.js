import React, { useEffect, useState } from 'react'
import "./Select.css"
import ToSelector from "./ToSelector/ToSelector.js"

const countryes =[
    {
        value : "AED",
        lable : "AED",
        img : " د.إ"
    },
    {
        value : "INR",
        lable : "INR",
        img : " ₹"
    },
    {
        value : "PKR",
        lable : "PKR",
        img : " ₨"
    },
    {
        value : "EUR",
        lable : "EUR",
        img : "€"
    },
    {
        value : "SAR",
        lable : "SAR",
        img : "SR"
    },
    {
        value : "CAD",
        lable : "CAD",
        img : "$"
    },
    {
        value : "BDT",
        lable : "BDT",
        img : " ৳"
    },
    {
        value : "LKR",
        lable : "LKR",
        img : " ரூ"
    },
    {
        value : "AUD",
        lable : "AUD",
        img : " A$"
    },
    {
        value : "NWD",
        lable : "NWD",
        img : " $"
    },
    {
        value : "USD",
        lable : "USD",
        img : " $"
    },
    {
        value : "GBP",
        lable : "GBP",
        img : " £"
    },
    {
      value : "JPY",
      lable : "JPY",
      img : " ¥"
  },
]

const Select = (props) => {

  const [currency , setCurrency] = useState('AED')
  const [rates , setRates] = useState('')
  let flags 

  // setting country
  let country
  if(currency === "AED"){
    country  = "ae"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "INR"){
    country  = "in"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "PKR"){
    country  = "pk"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "EUR"){
    country  = "de"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "SAR"){
    country  = "sa"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "CAD"){
    country  = "ca"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "BDT"){
    country  = "bd"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "LKR"){
    country  = "lk"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "AUD"){
    country  = "au"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "NWD"){
    country  = "nz"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "USD"){
    country  = "us"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "GBP"){
    country  = "gb"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }
  if(currency === "JPY"){
    country  = "jp"
    flags = "https://flagcdn.com/w320/"+country+".png"
  }

  const seletedCurrency =(event)=>{
    setCurrency(event.target.value)
  }

  const [torates, settorates] = useState()
  const getTwo =(data)=>{
    settorates(data)
  }
  console.log(torates)
  useEffect((props)=>{
    const apiLink = "https://api.exchangerate.host/latest?base="+ currency
    fetch(apiLink)
    .then(responce => responce.json())
    .then(data=> setRates(data.rates[torates]))
    console.log("I am changing")
  },[currency, torates])
  props.getFinalRatrs(rates)
  console.log( 1+" "+ currency +" = "+ rates+" "+torates)

    const makeOptinons=(option)=>(
        <option key={option.value} value={option.value} dataImg={option.img}>
            <div>
            <h1>{option.lable}  {option.img}</h1> 
            
            </div>
        </option>
    )
  return (
    <div className='selectfields'>
        <div>
          <div className='fromSelectField'>
                 <label htmlFor='selectForm'>From</label>
               <div className='formSection'>
            <div className='selecctSection'>
              <div className='imgField'>
              <img className='flag' src={flags} alt={country}/>
              </div>
              <select id='selectForm' className='options' value={currency} onChange={seletedCurrency} >
              {countryes.map(makeOptinons)}
              </select>
            </div>
               </div>
          </div>
        </div>
              <ToSelector getTwo={getTwo}/>
    </div>
  )
}

export default Select
