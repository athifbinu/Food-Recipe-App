import React from "react";



function FilteredDishes(props){
              console.log("fillter",props.allmenuCategorys)

            let allcategorys=   props.allmenuCategorys.map((item)=> {
                  return (
                    <li>{item.strCategory}</li>
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
                     {allcategorys}
                </ul>
            </div>
           </div>
        </div>
      )
}

export default FilteredDishes