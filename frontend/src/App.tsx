import { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState<string>('');
  const URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${URL}/api/mensaje`)
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje));
  }, []);

  return (
    <div>
      <h1>{mensaje || 'Cargando...'}</h1>
    </div>
  );
}

export default App;
