/* eslint-disable */
import React, { useState ,useRef } from 'react'
import './todoform.css'
 function todoform({addtodo}) {
    const inn=useRef()
    const [text,setText]=useState("")
    const ok=(e)=>{
        e.preventDefault()
        console.log("submit ok")
        addtodo({
            id:Math.ceil(Math.random()*100),
            name:text,
            complete:false
        })
        // inn.current.value="" طريقة 
        setText("") //طريقة تانية زيها برضو
    }
  return (
    <div className='todoform'>
      <form onSubmit={ok}>
        <input type="text" placeholder="Enter your plan" onChange={(e)=>setText(e.target.value)} ref={inn} value={text}/>
        <input type="submit" value="Add to list"/>
      </form>
    </div>
  )
}

export default todoform
