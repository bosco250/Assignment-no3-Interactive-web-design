import React from 'react'
import Hobbies from './Hobbies'

function HobbiesList() {
  const hobbies = ['Reading', 'Coding', 'Gaming', 'Traveling'];
  return (
    <div>
      <Hobbies myhobbies={hobbies} />
    </div>
  )
}

export default HobbiesList
