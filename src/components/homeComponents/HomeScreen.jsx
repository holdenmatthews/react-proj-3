import React, { useState, useEffect } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import styles from './Home.module.css'
import { BiSearchAlt } from 'react-icons/bi'

const HomeScreen = () => {  

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")

  const url = "https://recipes.devmountain.com"

  const getRecipes = () => {
    axios.get(`${url}/recipes`)
    .then((res) => {
      setRecipes(res.data)
      console.log(res.data)
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getRecipes()
  }, [])

  const recipeDisplay = recipes.filter((recipe, index) => {
    let title = recipe.recipe_name.toLowerCase()
    let searchInput = search.toLowerCase()
    return title.includes(searchInput)
  })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />
    })

  return (
    <div className={styles.home_page}>
      <AdBanner />
      <span className={styles.search_bar}>
        <BiSearchAlt className={styles.search_icon}/>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className={styles.recipes_container}>
        {recipeDisplay}
      </div>
    </div>
  )
}

export default HomeScreen