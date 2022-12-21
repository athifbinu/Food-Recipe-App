import React, { useEffect, useState } from 'react'

function Menu() {

    let [menu,setMenu]=useState([])


    async function getAllMenus() {
        const API_url="www.themealdb.com/api/json/v1/1/search.php?f=a"
        let responce=await fetch(API_url)
        let data=await responce.json()
        setMenu(data.meals)
    }

    console.log(menu)

     useEffect(()=>{
        getAllMenus();
     },[])


  return (
    <div>
      
    </div>
  )
}

export default Menu
