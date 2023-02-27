/* eslint-disable */
import React,{useState} from "react";
import './app.css'
// Components  //
import Todoform from "./todoform";
import Showtodo from './showtodo'
/////////////////
function app(){
    let [lista,setLista]=useState([]);
    const addtodo=(todo)=>{
        setLista([todo,...lista])
        console.log(todo)
    }
   const del=(e)=>{
        var chosen=lista.filter((item)=>{
            return item.id!==e
        })
        setLista(chosen)
   }
   const [cat,setCat]=useState("all");
   if(cat=="complete"){
    lista = lista.filter((item)=>{
        return item.complete==true
    })
   }
   if(cat=="active"){
    lista =lista.filter((item)=>{
        return item.complete==false
    })
   }

   const toggle=(e)=>{
    //    var chosen=lista.filter((item)=>{
    //     return item.id==e
    //    })
    //    if(chosen.complete==false){
    //     chosen.complete=true
    //    }
    //    else{
    //     chosen.complete=false
    //    }
       var nlista=lista.map((item)=>{
        if(item.id==e){
            return {...item,complete:!item.complete}
        }
        else{
            return item
        }
       })
       setLista(nlista)
   }

   const doall=()=>{
    let nlista=lista.map((item)=>{
         item.complete=true
         return item
    })
    setLista(nlista)
   }

   const noall=()=>{
    let nlista=lista.map((item)=>{
         item.complete=false
         return item
    })
    setLista(nlista)
   }
    return(
        <div className="app">
            <div className="tit">THIS IS APP</div>
            <Todoform addtodo={addtodo} />
            <div>{lista.map((item)=>{

                return <Showtodo key={item.id} item={item} del={del} toggle={toggle}/>
            })}
            </div>
            <div className="bt">
                <button onClick={()=>{setCat("all")}}>All</button>
                <button onClick={()=>setCat("active")}>Active</button>
                <button onClick={()=>setCat("complete")}>Complete</button>
            </div>
            <div className="bt2">
                <button onClick={doall}>Done all complete</button>
                <button onClick={noall}>Remove all complete</button>
            </div>
            
        </div>
    )
}
export default app;