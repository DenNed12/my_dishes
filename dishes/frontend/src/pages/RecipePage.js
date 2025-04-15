import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Явный экспорт по умолчанию
export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`/api/recipes/${recipeId}/`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error(error));
  }, [recipeId]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <p>Cooking time: {recipe.cooking_time} minutes</p>
    </div>
  );
}