/* eslint-disable */
import React,{useState} from "react";
// components  //
import Add from './add';
import Show from './show';
import Cart from './cart'
/////////////////
function app2(){
    //Redux
    const accessBook=(bb)=>{
        setBooks(bb)
    }
    
    const [a,setA]=useState(0)
    const ren=()=>{  //عمل رندر مخصوص عن طريق وضع متغير وتغييره باي قيمه 
        setA(Math.random())

    }
    const [books,setBooks]=useState([
        {id:Math.ceil(Math.random()*1000),name:"Java",pages:500,price:90,isMe:false ,countCart:1,isFav:false},
        {id:Math.ceil(Math.random()*1000),name:"C++",pages:200,price:20, isMe:false ,countCart:1,isFav:false},
        {id:Math.ceil(Math.random()*1000),name:"Web Design",pages:700,price:120, isMe:false ,countCart:1,isFav:false},
        {id:Math.ceil(Math.random()*1000),name:"React",pages:120,price:5 ,isMe:false ,countCart:1,isFav:false}
    ])
    const ad=(item)=>{
        setBooks([...books,item])
    }
    const [mycart,setMycart]=useState([])
    const ad2=(item)=>{
        setMycart([...mycart,item])
    }
    console.log(mycart)
    console.log(books)
    
    //////////////////////
    return (
        <div>
            <Add ad={ad}/>
            <Show books={books} ad2={ad2} accessBook={accessBook} mycart={mycart} ren={ren}/>
            <Cart books={books} mycart={mycart}/>
        </div>
    )
}
export default app2;