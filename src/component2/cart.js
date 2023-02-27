/* eslint-disable */
import Reac,{useState} from 'react'
import './cart.css'
const cart = ({mycart}) => {
    const total=()=>{
        var p=mycart.map((item)=>{
            return item.price
        })
        var sum=p.reduce((item,counter)=>{
            return parseInt(item)+parseInt(counter);
        },[0])
        return sum

    }
  return (
    <div className='cart'>
      <div className='tit'>My cart</div>
      
      <div className="cart-book">
            <div className="book">
                <p>Name</p>
                <p>Pages</p>
                <p>Price</p>
            </div>
            {mycart.map((item)=>{
                return <div key={Math.random()} className="book">
                <p>{item.name}</p>
                <p>{item.pages}</p>
                <p>{item.price}</p>
                <p>{item.countCart}</p>
                <button className='btn'>Remove From Cart</button>
            </div>
            })}
        </div>
        <div className='pri'>
            <div className='pri-1'>$</div>
            <div className='pri-2'>Total price is </div>
            <div className='pri-3'>{total()}</div>
        </div>
  </div>
  )
}

export default cart
