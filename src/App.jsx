import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Undsen_Huudas() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => navigate('/Login_Page')}>
          Login Page
        </button>
      </header>
    </div>
  );
}

export default Undsen_Huudas;
