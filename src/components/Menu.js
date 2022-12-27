import React, { useEffect, useState } from 'react'
import SpecialDishes from '../components/SpecialDishes'
import FilteredDishes from '../components/FilteredDishes'
function Menu() {

    let [menu,setMenu]=useState([])
    let [menuCategory,setMenuGategory]=useState([])
    let[loading,setLoading]=useState(true)



  


    async function getAllMenus() {
        const API_url="https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        let responce=await fetch(API_url)
        let data=await responce.json()
        setMenu(data.meals)
        setLoading(false)
      
    }


    async function getAlltheCategories() {
      const API_url="https://www.themealdb.com/api/json/v1/1/categories.php"
      let responce=await fetch(API_url)
      let catogoryData=await responce.json()
      setMenuGategory(catogoryData.categories)
  
    
  }

      // console.log("menugategory",menuCategory)
  








          

     useEffect(()=>{
        getAllMenus();
        getAlltheCategories();
     },[])

          
  return (
    <div>   {!loading ?<SpecialDishes specialMenu={menu} />:<h1>Loading</h1> }
             {!loading ?(
             <FilteredDishes allmenuCategorys={menuCategory} allMenus={menu}/>)
              : null}

            
    </div>
  )
}

export default Menu

// allMenus={menu}