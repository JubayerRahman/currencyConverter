import React, {useState} from 'react'
import './Theme.css'

const Theme = () => {
    const [theme, setTheme] = useState("lightTheme")
    const [icon, setIcon] = useState("fa-solid fa-moon")
    const changeTheme =()=>{
        if(theme === "lightTheme" && icon=== "fa-solid fa-moon"){
            setTheme("darkTheme")
            setIcon("fa-solid fa-sun")
        }
        if(theme === "darkTheme" &&  icon==="fa-solid fa-sun"){
            setTheme("lightTheme")
            setIcon("fa-solid fa-moon")
        }
      }
      document.body.classList= theme;
  return (
    <div>
      <button className='themeButton' onClick={changeTheme}><i className={icon}></i></button>
    </div>
  )
}

export default Theme
