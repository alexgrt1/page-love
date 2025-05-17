import { useEffect, useState } from 'react';
import foto from './assets/foto.png';
import styles from './styles/sorpresaStyles';
import './styles/sorpresaAnimaciones.css';

const enviarNotificacion = (respuesta: 'si' | 'no') => {
    const token = import.meta.env.VITE_TELEGRAM_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const mensaje = `💌 Jenny eligió: ${respuesta === 'si' ? 'Sí 😳' : 'No 😢'}`;
  
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: mensaje,
      }),
    });
  };  

function Sorpresa() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [respuesta, setRespuesta] = useState<null | 'si' | 'no'>(null);
    const [mostrarCarta, setMostrarCarta] = useState(false);
    const [animandoCarta, setAnimandoCarta] = useState(false);
    const [mostrarBrillos, setMostrarBrillos] = useState(false);

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

            {mostrarBrillos && (
                <div className="brillos">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <span
                            key={i}
                            className="destello"
                            style={{
                                top: `${50 + Math.random() * 30 - 15}%`,
                                left: `${50 + Math.random() * 30 - 15}%`,
                                color: ['#fff', '#ffc0cb', '#ffcc70'][i % 3],
                            }}
                        >
                            ✨
                        </span>
                    ))}
                </div>
            )}

            {!mostrarCarta ? (
                <div style={styles.cartaCerrada} className={animandoCarta ? 'carta-abriendo' : ''}>
                    <div className="icono-carta">✉️</div>
                    <h2 style={{ color: '#333', marginTop: '10px' }}>💌 Te Envio Esta Carta</h2>
                    <p>💖Haz clic para abrirla...💖</p>
                    <button
                        onClick={() => {
                            setAnimandoCarta(true);
                            setMostrarBrillos(true);
                            setTimeout(() => {
                                setMostrarCarta(true);
                                setAnimandoCarta(false);
                                setTimeout(() => setMostrarBrillos(false), 2000);
                            }, 1000);
                        }}
                        style={styles.mainButton}
                    >
                        Abrir
                    </button>
                </div>
            ) : (
                <>
                    <h1 style={styles.title}>PARA MI PRINCESA HERMOSA JENNY👸🏼💖</h1>

                    <div style={styles.paper} className="fondo-carta">
                        <p style={styles.text}>
                            Jenny, te diré esto así sin rodeos pero con el corazón en la mano 💖{'\n\n'}
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
                            Solo quería que lo supieras. Que contigo me pasan cosas lindas.
                            Y que sí, puede que no lo diga con todas las letras… pero tú sabes exactamente lo que quiero decir, y te quiero preguntar lo siguiente..... 💖
                        </p>
                        <img src={foto} alt="Foto dedicada" className="imagen-dedicada" />
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
                                <p>¿Quieres que seamos algo más que amigos?🥹</p>
                                <div style={styles.modalButtons}>
                                    <button
                                        style={styles.yesButton}
                                        onClick={() => {
                                            setMostrarModal(false);
                                            setRespuesta('si');
                                            enviarNotificacion('si'); // ✅ Agregado aquí
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
                                            enviarNotificacion('no'); // ✅ Agregado aquí
                                            setTimeout(() => setRespuesta(null), 5000);
                                        }}
                                    >
                                        No 😢
                                    </button>
                                </div>
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
                                No me quieres entonces :c 💔
                            </h2>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
export default Sorpresa;
