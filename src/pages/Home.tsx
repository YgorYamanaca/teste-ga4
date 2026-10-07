import { useNavigate } from 'react-router-dom';
import { setUserId } from '../analytics/analytics';

const userId = [
  '1',
  '2',
  '3',
  '4',
  '5',
];

export default function Home() {
  const navigate = useNavigate();

  function handleLogin() {
    const randomItem = userId[Math.floor(Math.random() * userId.length)];
    setUserId(randomItem);
    navigate('/products');
  }

  return (
    <div>
      <h1>GA4 Playground</h1>
      <p>Aplicação simples para estudar Analytics.</p>
      <button onClick={() => handleLogin()}>to Products</button>
    </div>
  );
}