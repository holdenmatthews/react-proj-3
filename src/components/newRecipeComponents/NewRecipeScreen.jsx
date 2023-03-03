import React, { useState } from "react";
import { Formik } from "formik";
import './newRecipe.css'
import axios from 'axios'

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  
  const addIngredient = () => {
    setIngredients([...ingredients, {name, quantity}])
    setName("")
    setQuantity("")
  }

  const initialValues = {
    cookTime: "",
    imageURL: "",
    instructions: "",
    prepTime: "",
    recipeName: "",
    serves: "",
    type: "",
    ingredients: [],
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients
    console.log(values)

    axios
      .post('https://recipes.devmountain.com/recipes', values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
    
  };

  const ingredientList = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    )
  })

  return (
    <section>
      <h1 className="tell-us">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form">
            <div className="top-inputs">
              <input
                type="text"
                placeholder="Name your recipe!"
                onChange={handleChange}
                name="recipeName"
                value={values.recipeName}
                className="medium-input"
              />
              <input
                type="text"
                placeholder="Image URL"
                onChange={handleChange}
                name="imageURL"
                className="medium-input"
              />
            </div>
            <div className="radio-container">
              <span>
                <input type="radio" onChange={handleChange} name="type" value="Cook"/>
                <h5>Cook</h5>
              </span>
              <span>
                <input type="radio" onChange={handleChange} name="type" value="Bake"/>
                <h5>Bake</h5>
              </span>
              <span>
                <input type="radio" onChange={handleChange} name="type" value="Drink"/>
                <h5>Drink</h5>
              </span>
            </div>
            <div className="little-input-container">
              <input
                type="text"
                placeholder="Prep Time"
                onChange={handleChange}
                name="prepTime"
                className="little-input"
              />
              <input
                type="text"
                placeholder="Cook Time"
                onChange={handleChange}
                name="cookTime"
                className="little-input"
              />
              <input
                type="text"
                placeholder="Serves"
                onChange={handleChange}
                name="serves"
                className="little-input"
              />
            </div>
            <div className="ing-qua-list">
              <div className="ing-quantity">
                <input 
                  type="text" 
                  placeholder="Ingredient" 
                  name="ingredient" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="medium-input"
                />
                <input 
                  type="text" 
                  placeholder="Quantity" 
                  name="quantity" 
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="medium-input"
                />
              </div>
              <ul>{ingredientList}</ul>
            </div>
            <div className="btn-div">
              <button
                type="button"
                className="orange-btn"
                onClick={addIngredient}
              >
                Add Another
              </button>
            </div>
            <textarea
              placeholder="What are the instructions?"
              onChange={handleChange}
              name="instructions"
            />
            <div className="btn-div">
              <button type="submit" className="blue-btn">
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
