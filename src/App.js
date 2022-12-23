import React from 'react'
import Hero from './components/Hero'
import Menu from './components/Menu'
// import SpecialDishes from './components/SpecialDishes'
import "./App.scss"
import "./App.css"

function App() {
  return (
    <div>
      <Hero/>
      <Menu />
      {/* <SpecialDishes/> */}
    </div>
  )
}

export default App
