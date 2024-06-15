import React from 'react'
import '../styles/Foodlist.css'
import { useNavigate } from 'react-router-dom'
export default function Foodlist({foods}) {
  const navigate = useNavigate()
  function handleKnowMore(id){
    navigate(`/fooddetails/${id}`)
  }
  return (
    <div className='parent'>
      {
        foods.map((food) => {
          return (
            <div className='food-list-container' key={food.id}>
              <img src={food.image} alt={food.title} />
              <p>{food.title}</p>
              <button onClick={() => handleKnowMore(food.id)}>Know more</button>
            </div>
          )
            
        })
      }
    </div>
  )
}
