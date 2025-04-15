// components/RecipeDetail.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/api/recipes/${recipeId}/`);
        setRecipe(response.data);
      } catch (err) {
        setError('Не удалось загрузить рецепт');
        console.error('Ошибка:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) return <div className="loading">Загрузка рецепта...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <div className="meta-info">
        <span>⏱ {recipe.cooking_time} минут</span>
        <span>🍽 {recipe.category?.name}</span>
      </div>

      <section className="ingredients">
        <h2>Ингредиенты</h2>
        <div className="content-box">
          {recipe.ingredients.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </section>

      <section className="instructions">
        <h2>Инструкция приготовления</h2>
        <div className="content-box">
          {recipe.instructions.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </section>
    </div>
  );
}