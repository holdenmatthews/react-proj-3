import { useEffect, useState } from "react";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import DetailImage from "./DetailImage";
import axios from "axios";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const baseURL = "http://recipes.devmountain.com";

  useEffect(() => {
    axios.get(`${baseURL}/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <div>
      <DetailImage image={recipe.image_url} title={recipe.recipe_name} />
      <div className={styles.details_container}>
        <div className={styles.ingredients_container}>
          <h2>Recipe</h2>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <br />
          <h2>Ingredients</h2>
          {recipe.ingredients &&
            recipe.ingredients.map((ing, index) => {
              return (
                <h4>
                  {ing.quantity} {ing.ingredient}
                </h4>
              );
            })}
        </div>
        <div className={styles.instructions_container}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
            </p>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
