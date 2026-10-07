import { useNavigate, useParams } from 'react-router-dom';
import { trackAddItemToCart } from '../analytics/trackers';
import { products } from '../data/products';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((product) => product.id === Number(id));

  if (!product) return <h1>Produto não encontrado</h1>;

  function handleAddToCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    product && trackAddItemToCart(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Categoria: {product.category}</p>
      <p>Preço: R$ {product.price}</p>
      <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
}