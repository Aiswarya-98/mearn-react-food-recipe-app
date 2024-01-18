import React, { useEffect, useState } from "react"
import App from "../App"
import Header from "./Header"
import SpecialDishes from "./SpecialDishes"
import FilterDishes from "./FilterDishes"
// import "./Menus.css"

function Menus() {
  const [menu, setMenu] = useState([])
  const [menuCategory, setMenuCategory] = useState([])
  const [singleDish, setSingleDish] = useState([])
  const [loading, setLoading] = useState(true)

  async function getAllMenus() {
    setLoading(true)
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
    let response = await fetch(API_URL)
    let data = await response.json()
    setMenu(data.meals)
    setLoading(false)
  }

  //get all the categories
  async function getAllCategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
    let response = await fetch(API_URL)
    let categoryData = await response.json()
    setMenuCategory(categoryData.categories)
  }

  //get only one dish

  async function getOnlyOneDish() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
    let response = await fetch(API_URL)
    let singleDishData = await response.json()
    setSingleDish(singleDishData.meals)
  }

  // console.log(menu)

  useEffect(() => {
    getAllMenus()
    getAllCategories()
    getOnlyOneDish()
  }, [])

  return (
    <div>
      <Header />
      {!loading ? <SpecialDishes specialMenu={menu} /> : <h1 className="loader">Loading</h1>}
      {!loading ? <FilterDishes allMenuCategories={menuCategory} allMenus={menu} singleDish={singleDish} setSingleDish={setSingleDish} /> : null}
    </div>
  )
}

export default Menus
