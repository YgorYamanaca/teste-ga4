import { Link } from 'react-router-dom';
import { trackEvent } from '../analytics/analytics';
import { ANALYTICS_EVENTS } from '../analytics/events';
import { products } from '../data/products';
export default function Products() {
  return (
    <div>
      <h1>Produtos</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Categoria: {product.category}</p>
          <p>Preço: R$ {product.price}</p>
          <Link to={`/products/${product.id}`}>Ver produto</Link>
          <hr />
        </div>
      ))}
      <button
        onClick={() => {
          trackEvent(ANALYTICS_EVENTS.TEST, {
            item_type: 'project',
          });
        }}
      >
        Test GA4
      </button>
    </div>
  );
}