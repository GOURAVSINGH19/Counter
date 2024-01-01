import React, { useState } from 'react'
import './App.css'
import './index.css'
import { set } from 'mongoose';
function App() {
  const [number,setnumber]=useState(0);

  const onadd=()=>{
    // setnumber((add)=>{
    //   return add+1;
    // }); or
    setnumber((add)=>add+1)
  }

  function onremove(){
    setnumber((remove)=>remove-1);
  }

  function resetcounter(){
    setnumber((reset)=>setnumber(0));
    toast
  }
  return (
    <div className='main'>
     <div>
      <button className='btn' onClick={onadd}>+</button>
     </div>
     <div>
      <h2>counter value :: {number}</h2>
     </div>
     <div>
      <button className="btn" onClick={onremove}>-</button>
     </div>
     <button onClick={resetcounter}>
      Reset
     </button>
    </div>
  )
}

export default App
