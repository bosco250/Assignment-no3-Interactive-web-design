import React, { useState } from 'react'

function Counting() {
  const[count,setCount]=useState(0);
  return (
    <div style={{display:"flex",gap:"10px", alignItems:"center"}}>
      <h3>Counting</h3>
      <button onClick={()=>setCount(count+1)} style={{padding:"15px"}}>+</button>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count-1)} style={{padding:"15px"}}>-</button>
    </div>
  )
}

export default Counting
