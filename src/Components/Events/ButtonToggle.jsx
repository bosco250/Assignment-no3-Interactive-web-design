import React, { useState } from 'react'

function ButtonToggle() {
  const [isClicked,setIsClicked]=useState(false);
  return (
    <div>
      <button onClick={()=>setIsClicked(!isClicked)} style={{padding:"10px 20px",backgroundColor:`${isClicked?"red":"black"}`,color:"white"}}>{isClicked?" ON ":" OFF "}</button>
    </div>
  )
}

export default ButtonToggle
