import React, { useState } from "react";



function FilteredDishes(props){
              console.log("fillter",props.allmenuCategorys)
              console.log("all menusssss",props.allMenus)


              let [allMenus,setAllmenus]=useState(props.allMenus)
              let [filteredDishes,setFilteredDishes]=useState([])
            

                  //show dishes click
        function showFilteredDishesHandler(Category) {
     let filteredDishesAre=allMenus.filter((item)=>{
              return item.strCategory ===Category
            }).map((item)=>{
              return(
               <li>
                <img src={item.strMealThumb} alt="" />
                <h2>{item.strCategory}</h2>
               </li>
              )
            })

            setFilteredDishes(filteredDishesAre)
        }
         

              

        let allCategories= props.allmenuCategorys.map((item)=>{
            return (
              <li onClick={showFilteredDishesHandler(item.strCategory)}>{item.strCategory}</li>
            )

           })


      return(
        <div className="filtered-dishes">
           <div className="container">
            <div className="text-center">
            <h2>Choose Your Dishes</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem be?</p>
            </div>

            <div className="filtered-dishes">
                <ul>
                    {allCategories}

                </ul>
            </div>
               <div className="filtered-dishes-results">
                <ul className="flex flex-wrap gap-30">
                     {filteredDishes}
                </ul>
               </div>
           </div>
        </div>
      )
}

export default FilteredDishes