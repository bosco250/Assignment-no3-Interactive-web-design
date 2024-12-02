import React from 'react'

function ListOfItemsUsingMap() {
  const items=["Banana","Cassava","Pizza","Breads","Chapati","Poatatoes"]
  return (
    <div>
      <h3>List of Items Using Map function</h3>
      <ul>
        {items.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListOfItemsUsingMap
