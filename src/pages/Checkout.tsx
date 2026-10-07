import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearUserId } from '../analytics/analytics';

export default function Checkout() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    localStorage.removeItem('cart');
    alert('Compra realizada com sucesso!');
    clearUserId();
    navigate('/');
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome
            <input value={name} onChange={(event) => setName(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            E-mail
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
        </div>
        <button type="submit">Finalizar compra</button>
      </form>
    </div>
  );
}