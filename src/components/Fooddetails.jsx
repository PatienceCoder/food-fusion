import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Fooddetails.css'
export default function Fooddetails() {
  const [foodDetails,setFoodDetails] = useState({})
  const params = useParams();
  const foodId = params.foodId;
  console.log(foodId)
  useEffect(() => {
    async function getFullDetails(){
      const API_KEY = 'YOUR_API_KEY_HERE'
      const callAPI = await fetch(`https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`)
      const response = await callAPI.json();
      console.log(response)
      setFoodDetails(response)
    }
    getFullDetails()
  },[foodId])
  return (
    <div className='fooddetails-container'>
      {
        <div className='fulldetails-container'>
           <img src={foodDetails.image} alt={foodDetails.title} />
           <p>Name : {foodDetails.title}</p>
           <p>Price : {foodDetails.pricePerServing}</p>
           <p>Time Required to Cook : ⌚{foodDetails.readyInMinutes} Minutes</p>
           <p className='instructions'>Instructions : </p>
           <div className='instructions-container'>         
             {
              foodDetails.analyzedInstructions && foodDetails.analyzedInstructions.length > 0 ? 
              foodDetails.analyzedInstructions[0].steps.map((step) => {
                return <p>{step.number}.{step.step}</p>
              })
              : <p>No instructions available...</p>
             }
          </div>
        </div>
      }
    </div>
  )
}
