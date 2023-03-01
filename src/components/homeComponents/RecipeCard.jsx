import styles from './Home.module.css'

const RecipeCard = (recipe) => {
    const {image_url, recipe_name} = recipe.recipe
    return <div className={styles.recipe_card}>
        <div className={styles.img_container}>
        <img src={image_url} />
        </div>
        <h3>{recipe_name}</h3>
        <button className={styles.blue_btn}>See More</button>
    </div>
}

export default RecipeCard