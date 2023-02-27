/* eslint-disable */
import React,{useState} from "react";
import './show.css'
function show({books,ad2,accessBook,mycart,ren}){
    const addtocart=(e)=>{
        var chosen=books.find((item)=>{
            return item.id==e
        })
        var here=mycart.find((item)=>{
            return item.id==chosen.id
        })
        if(here){
            chosen.countCart++;
            ren()
            console.log(books)
            console.log(chosen)
        }
        else{
            ad2(chosen);
        }
        
    }
    const removebook=(e)=>{
        var chosen=books.filter((item)=>{
            return item.id!=e
        })
        accessBook(chosen)
    }
    const fav=(e)=>{
        var chosen=books.find((item)=>{
            return item.id==e
        })
        if(chosen.isFav==false){
            chosen.isFav=true;
            console.log(books)
            ren()
        }
        else{
            chosen.isFav=false
            console.log(books)
            ren()
        }
    }
    return (
        <div className="show">
            <div className="book">
                <p>Name</p>
                <p>Pages</p>
                <p>Price</p>
            </div>
            {books.map((item)=>{
                return <div  key={item.id} className="book" style={{border:item.isMe==true?"8px solid green":""}}>
                <p>{item.name}</p>
                <p>{item.pages}</p>
                <p>{item.price}</p>
                <div className="btns">
                    <button onClick={()=>addtocart(item.id)}>Add to cart</button>
                    <button onClick={()=>removebook(item.id)}>Remove this book</button>
                    {item.isMe==true && <button>Edit Your Book</button>}
                    <button style={{backgroundColor:item.isFav==true?"red":""}} onClick={()=>fav(item.id)}>My FAV</button>
                </div>
            </div>
            })}
        </div>
    )
}
export default show;