import React from "react"
import "./specialDishes.css"

function SpecialDishes(props) {
  let maxSpecialDishes = 12

  let specialMenus = props.specialMenu.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return (
        <li>
          <img src={menuItem.strMealThumb} alt="" style={{ width: "200px", borderRadius: "10px" }} />
          <h4>{menuItem.strMeal}</h4>
        </li>
      )
    }
  })
  // console.log("props",props.specialMenu);

  return (
    <div className="special-dishes">
      <div className="container">
        <div className="special-dishes-content">
          <h2>OUR SPECIAL DISHES</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditpisci?</p>
        </div>

        <div className="special-dishes-list">
          <ul>{specialMenus}</ul>
        </div>
      </div>
    </div>
  )
}

export default SpecialDishes
