import React, { useEffect, useState } from 'react'
import SpecialDishes from '../components/SpecialDishes'
function Menu() {

    let [menu,setMenu]=useState([])


  


    async function getAllMenus() {
        const API_url="https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        let responce=await fetch(API_url)
        let data=await responce.json()
        setMenu(data.meals)
      
    }

          

     useEffect(()=>{
        getAllMenus();
     },[])

          
  return (
    <div>
            <SpecialDishes specialMenu={menu}/>
            
    </div>
  )
}

export default Menu
