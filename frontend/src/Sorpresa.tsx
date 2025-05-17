import { useEffect, useState } from 'react';

function Sorpresa() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [respuesta, setRespuesta] = useState<null | 'si' | 'no'>(null);

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

      <h1 style={styles.title}>Jenny 💖</h1>
      <p style={styles.text}>
        Te diré esto así sin rodeos pero con el corazón en la mano 💖{'\n\n'}
        Desde hace un tiempo, hay algo en ti que no deja de dar vueltas en mi cabeza. Y no es solo porque
        seas hermosa (que lo eres, y mucho), sino porque tienes esa forma de estar que se siente bien. No sé
        si lo notas, pero cada vez que hablo contigo, el día se vuelve más liviano… como si bastara un mensaje
        tuyo para cambiar mi humor por completo 💖{'\n\n'}
        Me encanta tu forma de expresarte, tu sentido del humor, esa forma con la que haces que cualquier
        conversación sea especial. Pero también me gusta cuando te pones seria, cuando hablas desde el corazón,
        cuando te dejas ver tal como eres. Ahí es donde más me atrapas… y ni siquiera haces esfuerzo, simplemente
        eres tú 💖{'\n\n'}
        Y a veces me digo que quizás me estoy imaginando cosas… pero luego te leo, te escucho o me acuerdo de ti
        y se me va toda la duda. Porque lo que me haces sentir no lo provoca cualquiera. Porque hay algo en nuestra
        conexión que me hace pensar que esto no es cualquier amistad, que hay algo más… algo que vale la pena cuidar,
        explorar, disfrutar 💖{'\n\n'}
        No quiero ponerle nombre a esto todavía, ni correr antes de caminar. Solo quería que supieras que tengo ganas
        —muchas ganas— de seguir compartiendo más contigo. De conocerte más allá de lo que ya sé. De reírme contigo
        hasta que duela el estómago, de abrazarte cuando lo necesites, de mandarte mensajes cursis sin motivo, y de estar
        ahí… simplemente, estar 💖{'\n\n'}
        No sé si tú también lo sientes, pero si en algún rincón de tu pecho hay un poquito de eso que yo traigo dentro…
        entonces, sin prisas y sin presión, podríamos dejar que esto siga creciendo. Y ver hasta dónde nos lleva esta relación
        tan bonita que tenemos 💖{'\n\n'}
        No necesito una respuesta ahora, ni una etiqueta… solo quería que lo supieras. Que contigo me pasan cosas lindas.
        Y que sí, puede que no lo diga con todas las letras… pero tú sabes exactamente lo que quiero decir 💖
      </p>

      {!respuesta && (
        <button
          onClick={() => setMostrarModal(true)}
          style={styles.mainButton}
        >
          ¿Aceptas? 🥹
        </button>
      )}

      {/* MODAL */}
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

      {/* RESPUESTA POSITIVA */}
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

      {/* RESPUESTA NEGATIVA */}
      {respuesta === 'no' && (
        <div className="triste-container">
          <h2 style={{ color: '#ccc', marginTop: '50px', textAlign: 'center' }}>
            Lo entiendo... gracias por tu sinceridad.  
            Siempre te voy a desear lo mejor 💔
          </h2>
        </div>
      )}

      <style>{estilosAnimaciones}</style>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff0f5',
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
  title: {
    fontSize: '32px',
    color: 'hotpink',
    marginBottom: '30px',
  },
  text: {
    whiteSpace: 'pre-line' as const,
    maxWidth: '800px',
    margin: '0 auto',
  },
  mainButton: {
    marginTop: '40px',
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
`;

export default Sorpresa;
