import React from 'react'
import Hero from './components/Hero'
import Menu from './components/Menu'
// import SpecialDishes from './components/SpecialDishes'
import FilteredDishes from './components/FilteredDishes'
import "./App.scss"
import "./App.css"

function App() {
  return (
    <div>
      <Hero/>
      <Menu />
      <FilteredDishes/>
      {/* <SpecialDishes/> */}
    </div>
  )
}

export default App
