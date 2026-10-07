import { Link } from 'react-router-dom';

type CartProduct = { id: number; name: string; price: number };

export default function Cart() {
  const cart: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h1>Carrinho</h1>
      {cart.length === 0 && <p>Carrinho vazio.</p>}
      {cart.map((product, index) => (
        <div key={`${product.id}-${index}`}>
          <p>{product.name} - R$ {product.price}</p>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <h2>Total: R$ {total}</h2>
          <Link to="/checkout">Ir para checkout</Link>
        </>
      )}
    </div>
  );
}