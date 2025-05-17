import { useEffect, useState } from 'react';

function Sorpresa() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [respuesta, setRespuesta] = useState<null | 'si' | 'no'>(null);
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const [animandoCarta, setAnimandoCarta] = useState(false);

  useEffect(() => {
    const audio = new Audio('/musica.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(() => {
      console.warn('Autoplay bloqueado por el navegador.');
    });

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div style={styles.container}>
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

      <div className="estrellas"></div>

      {!mostrarCarta ? (
        <div style={styles.cartaCerrada} className={animandoCarta ? 'carta-abriendo' : ''}>
          <div className="icono-carta">✉️</div>
          <h2 style={{ color: '#333', marginTop: '10px' }}>💌 Tienes una carta</h2>
          <p>Haz clic para abrirla...</p>
          <button
            onClick={() => {
              setAnimandoCarta(true);
              setTimeout(() => {
                setMostrarCarta(true);
                setAnimandoCarta(false);
              }, 1000);
            }}
            style={styles.mainButton}
          >
            Abrir
          </button>
        </div>
      ) : (
        <>
          <h1 style={styles.title}>Jenny 💖</h1>

          <div style={styles.paper}>
            <p style={styles.text}>
              Te diré esto así sin rodeos pero con el corazón en la mano 💖{'\n\n'}
              Desde hace un tiempo, hay algo en ti que no deja de dar vueltas en mi cabeza... (mensaje completo aquí) 💖
            </p>
          </div>

          {!respuesta && (
            <button
              onClick={() => setMostrarModal(true)}
              style={styles.mainButton}
            >
              ¿Aceptas? 🥹
            </button>
          )}

          {mostrarModal && (
            <div style={styles.modalOverlay}>
              <div style={styles.modal}>
                <h2 style={{ color: 'hotpink' }}>Tu respuesta 💬</h2>
                <p>¿Quieres que esto siga creciendo conmigo?</p>
                <div style={styles.modalButtons}>
                  <button
                    style={styles.yesButton}
                    onClick={() => {
                      setMostrarModal(false);
                      setRespuesta('si');
                      setTimeout(() => setRespuesta(null), 5000);
                    }}
                  >
                    Sí 😳
                  </button>
                  <button
                    style={styles.noButton}
                    onClick={() => {
                      setMostrarModal(false);
                      setRespuesta('no');
                      setTimeout(() => setRespuesta(null), 5000);
                    }}
                  >
                    No 😢
                  </button>
                </div>
                <button
                  onClick={() => setMostrarModal(false)}
                  style={{
                    marginTop: '20px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#999',
                    fontSize: '14px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Pensarlo un poquito más...
                </button>
              </div>
            </div>
          )}

          {respuesta === 'si' && (
            <div className="explosion-container">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className="explosion"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  💖
                </span>
              ))}
              <h2 style={{ color: 'hotpink', marginTop: '50px' }}>¡Me haces muy feliz! 💕</h2>
            </div>
          )}

          {respuesta === 'no' && (
            <div className="triste-container">
              <h2 style={{ color: '#ccc', marginTop: '50px', textAlign: 'center' }}>
                Lo entiendo... gracias por tu sinceridad.  
                Siempre te voy a desear lo mejor 💔
              </h2>
            </div>
          )}
        </>
      )}

      <style>{estilosAnimaciones}</style>
    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(-45deg, #cce7ff, #b3d9ff, #e0f0ff, #cce7ff)',
    backgroundSize: '400% 400%',
    animation: 'bgAnimado 15s ease infinite',
    padding: '40px 20px',
    fontFamily: '"Segoe UI", sans-serif',
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#333',
    textAlign: 'center' as const,
    position: 'relative' as const,
    overflow: 'hidden',
    minHeight: '100vh',
  },
  cartaCerrada: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    maxWidth: '400px',
    margin: '100px auto',
    textAlign: 'center' as const,
    animation: 'fadeIn 0.5s ease',
  },
  title: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '30px',
  },
  paper: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '30px',
    whiteSpace: 'pre-line',
    animation: 'fadeIn 0.5s ease',
    color: '#333',
  },
  text: {
    whiteSpace: 'pre-line' as const,
    fontSize: '18px',
    lineHeight: '1.8',
  },
  mainButton: {
    marginTop: '30px',
    fontSize: '18px',
    padding: '12px 24px',
    backgroundColor: 'hotpink',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center' as const,
    boxShadow: '0 0 15px rgba(0,0,0,0.3)',
    maxWidth: '300px',
    animation: 'fadeIn 0.4s ease',
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  yesButton: {
    fontSize: '16px',
    padding: '10px 20px',
    backgroundColor: 'mediumseagreen',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  noButton: {
    fontSize: '16px',
    padding: '10px 20px',
    backgroundColor: '#999',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

const estilosAnimaciones = `
  @keyframes bgAnimado {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
  }

  .heart-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  .heart {
    position: absolute;
    animation: floatHeart 10s infinite;
    opacity: 0.6;
  }

  @keyframes floatHeart {
    0% { transform: translateY(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(-120vh); opacity: 0; }
  }

  .icono-carta {
    font-size: 64px;
    animation: latido 2s ease-in-out infinite;
    transition: transform 1s ease;
  }

  .carta-abriendo .icono-carta {
    transform: rotateX(180deg) scale(1.2);
  }

  @keyframes latido {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }

  .explosion-container {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 9999;
    background-color: rgba(255,240,245,0.95);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .explosion {
    position: absolute;
    font-size: 24px;
    animation: pop 2s ease-in-out forwards;
  }

  @keyframes pop {
    0%   { transform: scale(0.2); opacity: 0; }
    50%  { transform: scale(1.8); opacity: 1; }
    100% { transform: scale(0.1); opacity: 0; }
  }

  .triste-container {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background-color: rgba(0,0,0,0.85);
    color: white;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .estrellas {
    position: absolute;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow:
      20vw 10vh white,
      35vw 20vh #fff,
      50vw 30vh #eee,
      65vw 25vh #fff,
      80vw 10vh #eee,
      25vw 50vh white,
      40vw 60vh #fff,
      55vw 70vh #eee,
      70vw 55vh #fff,
      85vw 45vh #eee;
    animation: parpadeo 6s ease-in-out infinite, moverEstrellas 40s linear infinite;
    z-index: 0;
  }

  @keyframes parpadeo {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.3); }
  }

  @keyframes moverEstrellas {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50px); }
  }
`;

export default Sorpresa;
