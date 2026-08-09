const DAYS_DATA = [
  {
    "day": 1,
    "title": "Empieza nuestra cuenta regresiva",
    "text": "Hoy empieza esto que hice para acompañarte aunque no pueda estar contigo. Cada día tendrá un pedacito mío, y también una pieza de nuestra foto."
  },
  {
    "day": 2,
    "title": "Algo que me recuerda a ti",
    "type": "Un pequeño recuerdo",
    "text": "Hoy quiero enseñarte una de esas cosas que veo y automáticamente me hacen pensar en ti. Aquí luego pondremos la foto, objeto, canción o recuerdo exacto."
  },
  {
    "day": 3,
    "title": "Primer lunes sin verte",
    "type": "Carta para extrañarte",
    "text": "Primer lunes sin verte. Este día merece una carta más personal sobre cómo se siente empezar esta etapa y cuánto te extraño."
  },
  {
    "day": 4,
    "title": "Cinco razones",
    "type": "5 razones por las que me enamoré de ti",
    "text": "Un espacio para escribir cinco razones pequeñas y reales por las que te enamoraste de él."
  },
  {
    "day": 5,
    "title": "Una canción para ti",
    "type": "Canción + enlace",
    "text": "Aquí irá una canción que te recuerde a él y un botón para escucharla."
  },
  {
    "day": 6,
    "title": "Un dulce pendiente",
    "type": "Vale por un postre juntos",
    "text": "Un cupón digital que podrá canjear cuando vuelvan a verse."
  },
  {
    "day": 7,
    "title": "¿Te acuerdas de este día?",
    "type": "Foto + anécdota",
    "text": "Una foto de ustedes y detrás, en versión digital, una anécdota especial."
  },
  {
    "day": 8,
    "title": "Lo que más extraño",
    "type": "Lista de pequeñas cosas",
    "text": "Su risa, su forma de abrazarte, su voz, sus gestos… detalles muy de él."
  },
  {
    "day": 9,
    "title": "Cuando volvamos a vernos",
    "type": "10 cosas que quiero hacer contigo",
    "text": "Una lista de planes grandes y pequeños para cuando termine la distancia."
  },
  {
    "day": 10,
    "title": "Un acertijo",
    "type": "La respuesta eres tú",
    "text": "Un mini acertijo romántico cuya respuesta final puede ser «te amo»."
  },
  {
    "day": 11,
    "title": "Encuéntranos",
    "type": "Sopa de letras",
    "text": "Una sopa de letras con palabras de su relación: apodos, lugares, canciones, recuerdos."
  },
  {
    "day": 12,
    "title": "Dos meses",
    "type": "El disco y nuestra canción",
    "text": "El regalo del disco con la canción sobre seguir adelante, acompañado de un texto sobre estos dos meses y cómo han ido mejorando."
  },
  {
    "day": 13,
    "title": "Mi lugar favorito",
    "type": "Una foto y una frase",
    "text": "Una foto de ustedes con la idea: «Mi lugar favorito termina siendo donde estás tú»."
  },
  {
    "day": 14,
    "title": "Vale por un abrazo",
    "type": "Cupón digital",
    "text": "Vale por un abrazo larguísimo cuando vuelvan a verse."
  },
  {
    "day": 15,
    "title": "Lo que admiro de ti",
    "type": "Lista especial",
    "text": "Una lista con cualidades que admiras de él, sin repetir solo cosas físicas."
  },
  {
    "day": 16,
    "title": "Bingo de la distancia",
    "type": "Mini juego",
    "text": "Casillas como: escuchar una canción y pensar en mí, mirar una foto nuestra, querer contarme algo, extrañar un abrazo."
  },
  {
    "day": 17,
    "title": "Estoy orgullosa de ti",
    "type": "Carta cortita",
    "text": "Un recordatorio sencillo para que sepa que valoras lo que hace y quién es."
  },
  {
    "day": 18,
    "title": "Tu amuleto de suerte",
    "type": "Una moneda virtual",
    "text": "Una pequeña moneda o ficha digital con un mensaje para que recuerde que siempre le deseas lo mejor."
  },
  {
    "day": 19,
    "title": "Una foto de hoy",
    "type": "Un pedacito de mi día",
    "text": "Una foto tuya reciente acompañada por una frase corta."
  },
  {
    "day": 20,
    "title": "20 cosas pequeñas",
    "type": "Cosas que me hacen feliz contigo",
    "text": "Veinte detalles cotidianos que disfrutas cuando están juntos."
  },
  {
    "day": 21,
    "title": "Un deseo",
    "type": "Estrella de papel digital",
    "text": "Una estrella que al tocarse revele un deseo para los dos."
  },
  {
    "day": 22,
    "title": "Cocinemos esto",
    "type": "Receta para el futuro",
    "text": "Una receta que quieran preparar juntos cuando puedan."
  },
  {
    "day": 23,
    "title": "Playlist de esta noche",
    "type": "Música para sentirnos cerca",
    "text": "Una playlist especialmente escogida para ese día."
  },
  {
    "day": 24,
    "title": "Hecho por mí",
    "type": "Dibujo o garabato",
    "text": "Un espacio para subir un dibujo tuyo y una notita divertida."
  },
  {
    "day": 25,
    "title": "Mira cuánto llevamos",
    "type": "Carta de mitad de camino",
    "text": "Un texto sobre todo lo que ya han superado durante la distancia."
  },
  {
    "day": 26,
    "title": "Un hilo que nos une",
    "type": "Pulsera simbólica",
    "text": "Una tarjeta digital que represente una pulsera o hilo rojo hasta que puedas darle algo físico."
  },
  {
    "day": 27,
    "title": "Adivina la sorpresa",
    "type": "Cinco pistas",
    "text": "Cinco pistas sobre algo que harán o una sorpresa que tendrás para él al regresar."
  },
  {
    "day": 28,
    "title": "Mi recuerdo favorito",
    "type": "Un momento de este año",
    "text": "Una foto o historia de tu recuerdo favorito de este año juntos."
  },
  {
    "day": 29,
    "title": "Si pudiera teletransportarme",
    "type": "Mini historia",
    "text": "Contar qué harías si pudieras aparecer junto a él solo por cinco minutos."
  },
  {
    "day": 30,
    "title": "Vale la pena esperar",
    "type": "Carta",
    "text": "Una carta sobre por qué estos días separados siguen teniendo sentido para ti."
  },
  {
    "day": 31,
    "title": "Nosotros siendo nosotros",
    "type": "Foto divertida",
    "text": "Una foto espontánea o graciosa de ustedes con un comentario divertido."
  },
  {
    "day": 32,
    "title": "Nuestro mapa de sueños",
    "type": "Lugares para conocer juntos",
    "text": "Una lista o mapa de lugares que te gustaría visitar con él en el futuro."
  },
  {
    "day": 33,
    "title": "Cita a distancia",
    "type": "Noche de película",
    "text": "Una invitación digital para elegir una película o serie y verla juntos a distancia."
  },
  {
    "day": 34,
    "title": "Carta desde el futuro",
    "type": "Imaginar que ya pasó",
    "text": "Una carta escrita como si ya hubiera terminado la distancia y estuvieras recordando estos días."
  },
  {
    "day": 35,
    "title": "Una frase que somos nosotros",
    "type": "Libro, película o canción",
    "text": "Una frase corta que describa algo de su relación, con tu explicación personal."
  },
  {
    "day": 36,
    "title": "Buenas noches",
    "type": "Audio para ti",
    "text": "Un botón donde después pondremos un audio tuyo deseándole buenas noches."
  },
  {
    "day": 37,
    "title": "Un mensaje escondido",
    "type": "Origami digital",
    "text": "Un corazón o estrella que se abra al tocarlo y revele una frase."
  },
  {
    "day": 38,
    "title": "Elige nuestra cita",
    "type": "Reto para el regreso",
    "text": "Tres opciones de cita para que él elija una cuando vuelvan a verse."
  },
  {
    "day": 39,
    "title": "Tú decides",
    "type": "Cupón para la primera cita",
    "text": "Un vale para que él decida el plan de una cita."
  },
  {
    "day": 40,
    "title": "Para un día difícil",
    "type": "Carta de emergencia",
    "text": "Una carta que pueda releer cuando esté cansado, triste o simplemente te extrañe."
  },
  {
    "day": 41,
    "title": "Lo que aprendí contigo",
    "type": "Lista personal",
    "text": "Cosas que tu relación te ha enseñado o que has descubierto gracias a él."
  },
  {
    "day": 42,
    "title": "¿Te acuerdas cuando...?",
    "type": "Una anécdota",
    "text": "Ese recuerdo que los hace reír o que todavía te pone feliz cuando lo recuerdas."
  },
  {
    "day": 43,
    "title": "Para llevarme contigo",
    "type": "Mini foto",
    "text": "Una foto pequeña en pantalla, diseñada como una Polaroid o foto de billetera."
  },
  {
    "day": 44,
    "title": "Lo que sueño para nosotros",
    "type": "Carta sobre el futuro",
    "text": "Una carta sobre planes, sueños y momentos que te gustaría construir juntos."
  },
  {
    "day": 45,
    "title": "Otra canción nuestra",
    "type": "Canción + dedicatoria",
    "text": "Una segunda canción especial con una explicación de por qué la elegiste."
  },
  {
    "day": 46,
    "title": "Cinco promesas",
    "type": "Promesas para nosotros",
    "text": "Cinco promesas realistas y personales para cuidar la relación."
  },
  {
    "day": 47,
    "title": "Algo hecho con amor",
    "type": "Manualidad digital",
    "text": "Un pequeño corazón, estrella u origami animado con una frase escondida."
  },
  {
    "day": 48,
    "title": "Quedan tres",
    "type": "Mini cuenta regresiva",
    "text": "Una pantalla especial para sentir que la cajita ya está llegando al final."
  },
  {
    "day": 49,
    "title": "Mira hasta dónde llegamos",
    "type": "Mensaje corto",
    "text": "Un mensaje celebrando todo lo que ya han aguantado y compartido."
  },
  {
    "day": 50,
    "title": "Gracias por estos 50 días",
    "type": "Carta larga",
    "text": "Una carta agradeciéndole por vivir contigo esta cuenta regresiva incluso desde lejos."
  },
  {
    "day": 51,
    "title": "Lo logramos",
    "type": "Pero todavía falta un poquito",
    "text": "No significa que ya se vean. Es el final de esta experiencia: una carta sobre haber llegado hasta aquí y que el próximo regalo será finalmente poder abrazarse."
  }
];
