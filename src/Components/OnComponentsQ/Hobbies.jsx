import React from 'react'

function Hobbies({myhobbies}) {
  // console.log(myhobbies);
  return (
    <div>
      <h3>My Hobbies:</h3>
      <ul>
      {
        myhobbies.map((hobby,index) => <li key={index}>{hobby}</li> )
      }
      </ul>
    </div>
  )
}

export default Hobbies
