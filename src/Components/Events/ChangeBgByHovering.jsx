import React, { useState } from 'react'

function ChangeBgByHovering() {
  const [bgColor,setBgColor]=useState(false)
  return (
    <div onMouseOver={()=>setBgColor(!bgColor)}
      style={{width:"100%",height:"200px",display:"flex",justifyContent:"center",alignItems:'center',backgroundColor:`${bgColor?"":"#56574d"}`}}>
      <h3>Hover To change Background color</h3>
    </div>
  )
}

export default ChangeBgByHovering
