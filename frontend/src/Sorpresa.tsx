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
    const [mostrarFinalSecreto, setMostrarFinalSecreto] = useState(false);
    const [esMovil, setEsMovil] = useState(false);

    useEffect(() => {
        setEsMovil(window.innerWidth <= 768);
        const audio = new Audio('/musica.mp3');
        audio.loop = true;
        audio.volume = 0.5;

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
                <div className="regalo-caja">
                    <div className="emoji-regalo">🎁</div>
                    <h2>💖 Tengo algo especial para ti 💖</h2>
                    <p>Haz clic para abrir el regalo...</p>
                    <button
                        onClick={() => {
                            setAnimandoCarta(true);
                            setMostrarBrillos(true);
                            setTimeout(() => {
                                setMostrarCarta(true);
                                setAnimandoCarta(false);
                                setTimeout(() => setMostrarBrillos(false), 1500);
                            }, 1500);
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
                            Me gustaría ser esa persona que te hace sonreír incluso en tus días grises, que celebra contigo cada logro,
                            que te escucha cuando el mundo pesa. Me gustaría tomarte de la mano en silencio y que ese gesto diga más
                            que mil palabras. Me gustaría ser ese refugio donde siempre puedas volver, sin miedo, sin dudas, solo con el corazón 💖{'\n\n'}
                            Porque hay algo en ti que me da paz, y al mismo tiempo, me revoluciona. Como si fueras un lugar al que siempre querría volver,
                            incluso si solo estuve ahí por un instante. Y no es exageración, es simplemente lo que siento cuando pienso en ti. Porque me encantaría
                            poder compartir incluso lo más cotidiano contigo: desde ver una serie tonta juntos, hasta perdernos en una conversación profunda a las 3AM 💖{'\n\n'}
                            Imagino caminando contigo bajo un cielo estrellado, hablando de sueños y tonterías, sin miedo a quedarnos en silencio porque hasta eso
                            sería bonito contigo. Imagino un café compartido, un domingo lento, un abrazo largo después de un mal día. Imagino todo eso y más,
                            y todo se vuelve mejor si es contigo 💖{'\n\n'}
                            Y no sé si lo has notado… pero cuando te hablo, lo hago distinto. Como si cada palabra quisiera ser más honesta, más cálida, más real.
                            Porque me importas. Porque me nace cuidarte, aunque no me lo pidas. Porque tú eres esa clase de persona que no se encuentra todos los días.
                            Eres un suspiro bonito en medio del caos. Una canción suave en medio del ruido. Una luz que no encandila, pero ilumina el alma 💖{'\n\n'}
                            No sé si tú también lo sientes, pero si en algún rincón de tu pecho hay un poquito de eso que yo traigo dentro…
                            entonces, sin prisas y sin presión, podríamos dejar que esto siga creciendo. Y ver hasta dónde nos lleva esta relación
                            tan bonita que tenemos. Porque si esto que siento por ti fuera música, sonaría como una melodía que no me canso de escuchar,
                            suave, sincera, y llena de esperanza 💖{'\n\n'}
                            Solo quería que lo supieras. Que contigo me pasan cosas lindas. Que mi corazón te reconoce incluso antes de que llegues.
                            Que a veces solo pensar en ti me cambia el día. Que a veces me duermo pensando en lo bonito que sería tenerte más cerca 💖{'\n\n'}
                            Y que sí, puede que no lo diga con todas las letras… pero tú sabes exactamente lo que quiero decir. Y antes de callarme todo esto
                            una vez más, preferí escribirlo, compartirlo, abrirme. Porque tú mereces saber lo que causas en alguien que, sin darte cuenta,
                            ya te piensa con cariño y te guarda con cuidado 💖{'\n\n'}
                            Y por eso... te quisiera preguntar lo siguiente, con el corazón sincero y sin adornos. Sé que quizás no es fácil responder, pero te pido solo esto:
                            sé sincera, por favor... 💖{'\n\n'}
                        </p>

                        <img src={foto} alt="Foto dedicada" className="imagen-dedicada" />
                    </div>

                    {!respuesta && (
                        <button onClick={() => setMostrarModal(true)} style={styles.mainButton}>
                            💖 Pregunta para ti 🥹
                        </button>
                    )}

                    {mostrarModal && (
                        <div style={styles.modalOverlay}>
                            <div style={styles.modal}>
                                <h2 style={{ color: 'hotpink' }}>Tu respuesta 💬</h2>
                                <p>¿Quieres que seamos algo más que amigos? 🥹{'\n\n'}
                                ¿Sientes tú también que esto que tenemos podría transformarse en algo más bonito aún... 
                                    si nos damos la oportunidad de intentarlo? 💫
                                </p>
                                <div style={styles.modalButtons}>
                                    <button
                                        style={styles.yesButton}
                                        onClick={() => {
                                            setMostrarModal(false);
                                            setRespuesta('si');
                                            enviarNotificacion('si');

                                            setTimeout(() => {
                                                setRespuesta(null);
                                                setMostrarFinalSecreto(true);
                                            }, 5000);
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

                    {mostrarFinalSecreto && (
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
                                        💖 Pues… lo que no te he dicho es que TE AMO.
                                        Eres lo mejor que me ha pasado, quiero que seas mi novia, mi esposa y la futura madre de nuestros hijos.
                                        Y que esta carta no es el final... sino solo el comienzo de algo hermoso que quiero vivir contigo ✨
                                    </p>
                                </div>
                            )}
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
