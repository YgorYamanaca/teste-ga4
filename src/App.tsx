import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

export default function App() {

  return (
    <BrowserRouter basename="/teste-ga4">
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Produtos</Link> | <Link to="/cart">Carrinho</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}