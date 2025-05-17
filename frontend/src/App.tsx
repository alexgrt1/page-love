import { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState<string>('');

  useEffect(() => {
    fetch('https://page-love-6g5q.onrender.com/api/mensaje')
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>{mensaje || 'Cargando...'}</h1>
    </div>
  );
}

export default App;
