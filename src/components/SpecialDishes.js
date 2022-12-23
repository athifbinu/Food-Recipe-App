import React from 'react'

function SpecialDishes(props) {
  console.log("props specil menu",props.specialMenu)

       let specialMenu=props.specialMenu.map((menuItem)=>{
        return(
          <ul className='flexs'>
            <li >
              <img src={menuItem.strMealThumb} alt="" />
              <h4>{menuItem.strMeal}</h4>
            </li>
          </ul>
        )
       })
  return (
    <section className='special-dishes'>
        <div className="container">
            <div className="special-dishes-content ">
            <h2>Our Special Dishes</h2>
            <br />
           <p>Lorem ipsum dolor, sit amet consae assumenda quo at libero in quibusdam. Veniam.</p>
            </div>
            <div className="special-dishes-list">
                   <ul>{specialMenu}</ul>
                   
                   
            </div>
        </div>
    </section>
  )
}

export default SpecialDishes
