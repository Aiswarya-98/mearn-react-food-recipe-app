import React, { useEffect, useState } from "react"
import "./filteredDishes.css"

function FilterDishes(props) {
  const [menus, setMenus] = useState(props.allMenus)
  const [filteredDishes, setFilteredDishes] = useState([])
  const [activeDish, setActiveDish] = useState("Beef")

  //let show only single dish

  let singleDishItems = props.singleDish.map((item) => {
    return (
      <li>
        <img src={item.strMealThumb} alt="" style={{ width: "200px", borderRadius: "10px" }} />
        <h6 style={{ color: "black" }}>{item.strMeal}</h6>
      </li>
    )
  })
  // show dishes on click

  function showFilteredDishesHandler(category) {
    props.setSingleDish([])

    setActiveDish(category)

    let filteredDishesAre = menus
      .filter((item) => {
        return item.strCategory === category
      })
      .map((item) => {
        return (
          <li>
            <img src={item.strMealThumb} alt="" style={{ width: "200px", borderRadius: "10px" }} />
            <h6 style={{ color: "black" }}>{item.strMeal}</h6>
          </li>
        )
      })

    setFilteredDishes(filteredDishesAre)
  }

  //showing all categories
  let allCategories = props.allMenuCategories.map((item) => {
    return (
      <li
        className={item.strCategory == activeDish ? "active" : ""}
        onClick={() => {
          showFilteredDishesHandler(item.strCategory)
        }}
      >
        {item.strCategory}
      </li>
    )
  })

  return (
    <div className="filtered-dishes">
      <div className="container">
        <h2 style={{ fontSize: "37px", marginTop: "30px" }}>Choose your Dishes</h2>
        <p style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "20px" }}>Peruse the menu and select your favorite dish from the enticing array of options, each promising a delightful culinary experience.</p>

        <div className="filtered-category">
          <ul>{allCategories}</ul>
        </div>

        <div className="filtered-dishes-result">
          <ul>
            {singleDishItems}
            {filteredDishes}

            {filteredDishes.length == 0 && singleDishItems.length == 0 && (
              <div className="alert">
                <h2>Sorry, No items found</h2>
                <h4>Please choose Another dish or menu.</h4>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FilterDishes
