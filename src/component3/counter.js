/* eslint-disable */
import React,{useState} from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import {counterAction} from '../redux/countSlice'
import {authAction} from '../redux/authSlice';

function counter() {
    const {INCREASE,DECREASE}=counterAction
    const {IN,OUT}=authAction;
    {console.log(counterAction)}
    const glob=useSelector(state=>state)
    console.log(glob.counter.count)
    const dispatch=useDispatch()
    const Increase=()=>{
        dispatch(INCREASE(5))
    }
    const Decrease =()=>{
        dispatch((DECREASE()))
    }
    console.log("Iam very angery")
    const inn=()=>{
        dispatch((IN()))
    }
    const outt=()=>{
        dispatch((OUT()))
    }
  return (
    <div>
        <div>
        <div>This is count</div>
      <button onClick={Decrease}>Decrease</button>
        This is {glob.counter.count}
        <button onClick={Increase}>Increae</button>
    </div>
    <div>
        <div>This is auth</div>
        <button onClick={outt}>Out</button>
        {glob.auther.isLog}
        <button onClick={inn}>Log</button>

    </div>
    </div>
  )
}

export default counter

