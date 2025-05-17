import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>{mensaje || 'Cargando...'}</h1>
      <button
        style={{
          fontSize: '24px',
          padding: '16px 32px',
          backgroundColor: 'hotpink',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          color: 'white',
          marginTop: '40px',
        }}
        onClick={() => navigate('/sorpresa')}
      >
        Haz click aquí
      </button>
    </div>
  );
}

export default App;
