import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToContact}>Go to Contact</button>
    </div>
  );
}