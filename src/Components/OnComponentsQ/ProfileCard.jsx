import React from 'react'

function ProfileCard ({ name, age, email }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
    <h3>Names:{name}</h3>
    <p>Age: {age}</p>
    <p>Email: {email}</p>
  </div>
  )
}

export default ProfileCard
