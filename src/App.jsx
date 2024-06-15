
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Fooddetails from './components/Fooddetails'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/fooddetails/:foodId' element={<Fooddetails/>} />
      </Routes>
    </>
  )
}

export default App
