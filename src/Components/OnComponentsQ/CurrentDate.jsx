import React from 'react'

function CurrentDate() {
  const currentDate= new Date().toLocaleDateString();
  return (
    <div>
      <h3>The current time is:{currentDate}</h3>
    </div>
  )
}

export default CurrentDate
