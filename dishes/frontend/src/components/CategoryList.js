import { Link } from 'react-router-dom';

export default function CategoryList({ categories }) {
  if (!categories || categories.length === 0) {
    return <div className="empty-message">Категории не найдены</div>;
  }

  return (
    <div className="category-list">
      {categories.map(category => (
        <div key={category.id} className="category-card">
          <Link to={`/category/${category.id}`} className="category-link">
            <h2>{category.name}</h2>
            {category.description && (
              <p className="category-description">{category.description}</p>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}