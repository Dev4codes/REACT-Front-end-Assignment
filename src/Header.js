import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
//import logo from '../img/logo.png'
function Header({ setInput }) {
  //console.log(setInput.cart)
  function getInp(e) {
    let { value } = e.target
    //console.log(value);
    setInput.setInput(value)


  }
  return (
    <>
      <div className='main-container'>




        <img className="amazonlogo" alt="Logo Here" />
        <div className='name'>

         
          <div className="hello1">Bhubaneswar </div>

        </div>
        <input className='search' type="text" placeholder="search your product here" onChange={getInp}></input>
             
        


      </div>


    </>

  )
}

export default Header
