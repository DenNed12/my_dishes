import { Link } from 'react-router-dom';

export default function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <div>Рецептов не найдено</div>;
  }

  return (
    <div className="recipe-grid">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            <p>Время приготовления: {recipe.cooking_time} мин.</p>
          </Link>
        </div>
      ))}
    </div>
  );
}