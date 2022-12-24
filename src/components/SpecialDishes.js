import React from 'react'

function SpecialDishes(props) {
  console.log("props specil menu",props.specialMenu)

     

      let maxSpecialDishes=10;

       let specialMenu=props.specialMenu.map((menuItem,index)=>{
        if(index < maxSpecialDishes) {
          return(
            <div className='specialImg'>
            
                <img  src={menuItem.strMealThumb} alt="" />
                <h4>{menuItem.strMeal}</h4>
            
            </div>
          )
        }
  
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
                   <ul id='gap' className='flex'>{specialMenu}</ul>
                   
                   
            </div>
        </div>
    </section>
  )
}

export default SpecialDishes
