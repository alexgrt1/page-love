import { useEffect, useState } from 'react';
import foto from './assets/foto.png';
import styles from './styles/sorpresaStyles';
import './styles/sorpresaAnimaciones.css';

const enviarNotificacion = (respuesta: 'si' | 'no') => {
    const token = '8100281362:AAET6n21mBLvylWLGaJsU8-XLicpMkgwnio';
    const chatId = '6076594873';
    const mensaje = `💌 Jenny eligió: ${respuesta === 'si' ? 'Sí 😳' : 'No 😢'}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: mensaje }),
    });
};

function Sorpresa() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [respuesta, setRespuesta] = useState<null | 'si' | 'no'>(null);
    const [mostrarCarta, setMostrarCarta] = useState(false);
    const [animandoCarta, setAnimandoCarta] = useState(false);
    const [mostrarBrillos, setMostrarBrillos] = useState(false);
    const [mostrarSecreto, setMostrarSecreto] = useState(false);
    const [esMovil, setEsMovil] = useState(false);

    useEffect(() => {
        // Detectar si es móvil al cargar
        setEsMovil(window.innerWidth <= 768);

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
        <div className={`fondo ${esMovil ? 'modo-movil' : ''}`} style={styles.container}>
            {/* Corazones flotantes */}
            <div className="heart-container">
                {animandoCarta && <div className="pajarito-volando">🐦✉️</div>}
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
            {/* BRILLOS Y ESTRELLAS */}
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

            {/* VISTA CAJA REGALO */}
            {!mostrarCarta ? (
                <div className="regalo-caja">
                    <div className="emoji-regalo">🎁</div>
                    <h2>💖 Tengo algo especial para ti 💖</h2>
                    <p>Haz clic para abrir el regalo...</p>
                    <button
                        onClick={() => {
                            setAnimandoCarta(true);
                            setMostrarBrillos(true);
                            setTimeout(() => {
                                console.log('Abriendo regalo...');
                                setMostrarCarta(true);
                                setAnimandoCarta(false); // ✅ Se desactiva la animación
                                setTimeout(() => setMostrarBrillos(false), 1500);
                            }, 1500); // Duración de animación
                        }}
                        style={styles.mainButton}
                    >
                        Abrir regalo
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
                        <button onClick={() => setMostrarModal(true)} style={styles.mainButton}>
                            💖 Responde Jenny 🥹
                        </button>
                    )}

                    {mostrarModal && (
                        <div style={styles.modalOverlay}>
                            <div style={styles.modal}>
                                <h2 style={{ color: 'hotpink' }}>Tu respuesta 💬</h2>
                                <p>¿Quieres que seamos algo más que amigos? 🥹</p>
                                <div style={styles.modalButtons}>
                                    <button
                                        style={styles.yesButton}
                                        onClick={() => {
                                            setMostrarModal(false);
                                            setRespuesta('si');
                                            enviarNotificacion('si');
                                        }}
                                    >
                                        Sí 😳
                                    </button>
                                    <button
                                        style={styles.noButton}
                                        onClick={() => {
                                            setMostrarModal(false);
                                            setRespuesta('no');
                                            enviarNotificacion('no');
                                        }}
                                    >
                                        No 😢
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {respuesta === 'si' && (
                        <>
                            <div className="explosion-container">
                                <h2 style={{ color: 'hotpink', marginTop: '50px' }}>¡Me haces muy feliz! 💕</h2>
                            </div>

                            {/* MENSAJE FINAL */}
                            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                                <h2 style={{ color: '#444' }}>
                                    Ahora ya sabes lo que siento… pero pronto te contaré algo más 🙊
                                </h2>
                                {!mostrarSecreto && (
                                    <button
                                        onClick={() => setMostrarSecreto(true)}
                                        style={{
                                            marginTop: '20px',
                                            fontSize: '18px',
                                            padding: '10px 20px',
                                            backgroundColor: '#ff69b4',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '10px',
                                            cursor: 'pointer',
                                            animation: 'fadeIn 1s ease',
                                        }}
                                    >
                                        ¿Lo quieres saber ahora?
                                    </button>
                                )}
                                {mostrarSecreto && (
                                    <div
                                        style={{
                                            marginTop: '20px',
                                            backgroundColor: '#fff',
                                            padding: '25px',
                                            borderRadius: '12px',
                                            maxWidth: '600px',
                                            marginInline: 'auto',
                                            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                                            animation: 'fadeIn 1s ease',
                                        }}
                                    >
                                        <p style={{ fontSize: '18px', color: '#555' }}>
                                            💖 Pues… lo que no te he dicho es que ya no imagino mis días sin ti.
                                            Eres lo mejor que me ha pasado, serás mi esposa y la futura madre de nuestros hijos.
                                            Y que esta carta no es el final... sino solo el comienzo de algo hermoso que quiero vivir contigo 💑✨
                                        </p>
                                    </div>
                                )}
                            </div>
                        </>
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
