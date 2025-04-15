import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RecipeList from '../components/RecipeList';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryRes, recipesRes] = await Promise.all([
          axios.get(`/api/categories/${categoryId}/`),
          axios.get(`/api/recipes/?category=${categoryId}`)
        ]);

        setCategory(categoryRes.data);
        setRecipes(recipesRes.data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>{category?.name}</h1>
      {category?.description && <p>{category.description}</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
}