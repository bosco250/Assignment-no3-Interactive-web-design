import React from 'react'

function Buttons({color,text}) {
  return (
    <div>
      <button style={{backgroundColor:color,color:"white", padding:"10px 20px", marginTop:"10px"}}>{text}</button>
    </div>
  )
}

export default Buttons
