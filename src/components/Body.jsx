import React, { useEffect, useState } from 'react'
import '../styles/Body.css'
import Foodlist from './Foodlist';
export default function Body() {
  const [recipe,setRecipe] = useState('pizza');
  const [food,setFood] = useState([])
  useEffect(() => {
    async function getRecipe(){
      const API_KEY = 'YOUR_API_KEY_HERE'
      const callAPI = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&apiKey=${API_KEY}`);
      const response = await callAPI.json();
      console.log(response.results)
      setFood(response.results)
    }
    getRecipe()
  },[recipe])
  return (
    <div className='body-container'>
      <input type="text" value={recipe} onChange={(e) => setRecipe(e.target.value)} />
      <Foodlist foods = {food}/>
    </div>
  )
}



