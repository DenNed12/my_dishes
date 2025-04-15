import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryList from '../components/CategoryList';

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/categories/')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка загрузки:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Загрузка категорий...</div>;

  return (
    <div className="home-page">
      <h1>Все категории рецептов</h1>
      <CategoryList categories={categories} />
    </div>
  );
}