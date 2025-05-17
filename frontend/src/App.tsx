import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/sorpresaAnimaciones.css';

function App() {
  const [mensaje, setMensaje] = useState<string>('');
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${URL}/api/mensaje`)
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(err => {
        console.error('Error al conectar con el backend:', err);
        setMensaje('Error al cargar el mensaje');
      });
  }, []);

  return (
    <div className="pagina-inicio">
      {/* Corazones flotando */}
      <div className="heart-container">
        {Array.from({ length: 20 }).map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 10;
          const size = Math.random() * 20 + 20;
          return (
            <span
              key={i}
              className="heart"
              style={{
                left: `${left}%`,
                fontSize: `${size}px`,
                animationDelay: `${-delay}s`,
              }}
            >
              💖
            </span>
          );
        })}
      </div>

      {/* Cuadro blanco estilo carta */}
      <div className="inicio-carta">
        <h1>{mensaje || 'Cargando...'}</h1>
        <button onClick={() => navigate('/sorpresa')}>
          Haz click aquí
        </button>
      </div>
    </div>
  );
}

export default App;
