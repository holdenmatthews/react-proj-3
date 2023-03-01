import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'

const RecipeCard = (recipe) => {
    const {image_url, recipe_name, recipe_id} = recipe.recipe
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe_id}`)
    }

    return <div className={styles.recipe_card}>
        <div className={styles.img_container}>
        <img src={image_url} />
        </div>
        <h3>{recipe_name}</h3>
        <button className={styles.blue_btn} onClick={handleClick}>See More</button>
    </div>
}

export default RecipeCard