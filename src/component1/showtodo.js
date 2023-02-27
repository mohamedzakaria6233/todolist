/* eslint-disable */
import React,{useState} from "react";
import './showtodo.css'
const showtodo=({item,del,toggle})=>{
    return(
            <div className="item">
            <div className="it" style={{textDecoration:item.complete==true ? "line-through":""}} onClick={()=>toggle(item.id)} key={item.id}>{item.name}</div>
            <button onClick={()=>del(item.id)}>x</button>
            </div>
        
    )
}
export default showtodo;

