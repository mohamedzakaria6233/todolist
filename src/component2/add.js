/* eslint-disable */
import React,{useState} from "react";
import './add.css'
function add({ad}){
    const [name,setName]=useState("");
    const [pages,setPages]=useState("")
    const [price,setPrice]=useState("")
    const ok=(e)=>{
        e.preventDefault();
        if(name!=="" && pages!=="" && price!==""){
            ad({
                id:Math.ceil(Math.random()*100),
                name:name,
                pages:pages,
                price:price,
                isMe:true,
                countCart:1,
                isFav:false
            })
            setName("");
            setPages("")
            setPrice("")
        }
        
       else{
        alert("Please fill all information")
       }

    }
    return(
        <div className="add">
          <div className="ti">Add New Book</div>
          <div className="ins">
            <form onSubmit={ok}>
            <input placeholder="Enter Name Book" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            <input placeholder="Enter Pages Book" type="number" onChange={(e)=>setPages(e.target.value)} value={pages}/>
            <input placeholder="Enter Price Book" type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            <input type="submit" value="add"/>
            </form>
          </div>
        </div>
    )
}
export default add;