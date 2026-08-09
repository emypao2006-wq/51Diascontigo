# 51 días contigo — base completa

Esta versión ya contiene una tarjeta/base para los 51 días para que podamos ir puliendo cada uno en el mismo proyecto.

## Idea de funcionamiento

- Hay un solo link.
- La fecha controla qué día puede abrirse.
- `LAST_PUBLISHED_DAY` controla hasta qué día quieres considerar terminado/publicado.
- Puedes preparar días futuros sin que él los vea antes de su fecha.
- El rompecabezas revela una parte adicional por cada día abierto.

## Archivo importante para editar
`days.js` contiene la idea base y el texto de los 51 días.

`script.js` contiene:
- fecha de inicio,
- último día publicado,
- lógica de bloqueo,
- rompecabezas.

## Cambiar fecha de inicio
En `script.js`:

```js
const START_DATE = new Date("2026-08-08T00:00:00");
```

## Publicar solo hasta cierto día
Por ejemplo, si solo quieres que estén oficialmente listos los días 1 y 2:

```js
const LAST_PUBLISHED_DAY = 2;
```

Aunque hayas escrito ya el Día 3, él no podrá verlo hasta que:
1. llegue la fecha del Día 3, y
2. `LAST_PUBLISHED_DAY` sea 3 o mayor.

## Probar sin esperar
Usa:

```js
const TEST_DAY = 12;
```

y vuelve a `null` antes de subir la versión final.

## Base actual
Ya están incluidos los 51 conceptos acordados en el chat, incluyendo:
- Día 12: disco / dos meses.
- Día 13: “Mi lugar favorito”.
- Día 16: bingo de la distancia.
- Día 18: amuleto de suerte.
- Día 27: pistas de una sorpresa.
- Día 29: teletransportarme 5 minutos.
- Día 32: mapa de sueños.
- Día 33: cita a distancia.
- Día 38: elección de cita/reto.
- Día 51: “Lo logramos”, aunque todavía no se vean.

## Calendario real añadido
- Día 1 = 8 de agosto de 2026.
- Se muestran agosto y septiembre.
- Cada fecha que ya pasó se tacha automáticamente.
- El día actual se resalta.
- El calendario permanece visible durante toda la experiencia.
- Los 51 días terminan el 27 de septiembre de 2026.

## Interacciones añadidas
- Día 1: primero aparece un sobre cerrado. Al tocarlo, se anima y aparece la carta.
- Después de la carta se puede saltar al calendario.
- Cada día tiene un botón "Aplasta aquí para descubrir tu pieza".
- Las piezas anteriores permanecen visibles.
- La pieza del día actual permanece tapada hasta tocar el botón.
- El descubrimiento se recuerda en el navegador con localStorage.

## Animación de pieza mejorada
Al descubrir la pieza del día:
1. La pieza sale visualmente de la foto.
2. Flota y gira un poco.
3. Vuelve a bajar y encaja en su posición.
4. Aparecen pequeños destellos/corazones.
5. La pieza queda revelada permanentemente en ese navegador.

## Cómo probar cualquier día
Abre `script.js` y busca:

```js
const TEST_DAY = null;
```

Para probar, por ejemplo, el Día 16:

```js
const TEST_DAY = 16;
```

Guarda el archivo y recarga `index.html`.

Antes de publicar la página real, vuelve a:

```js
const TEST_DAY = null;
```

Así la web usará la fecha real.

## Dos modos separados: prueba y novio

No hacen falta cuentas reales.

### Link de tu novio
Usa el enlace normal, sin parámetros:

`https://TU-SITIO.com/`

Ese modo:
- respeta la fecha real;
- bloquea días futuros;
- guarda sus sobres/piezas con datos separados.

### Tu link de prueba
Añade:

`?modo=prueba&dia=1`

Ejemplo para Día 16:

`https://TU-SITIO.com/?modo=prueba&dia=16`

En modo prueba:
- puedes abrir cualquiera de los 51 días;
- aparece un panel para cambiar de día;
- puedes reiniciar tus pruebas;
- lo que abras NO afecta lo que verá tu novio.

Esto usa un espacio de almacenamiento distinto (`preview-` frente a `novio-`).

## Foto rotada sin recorte
La foto ya no se recorta para hacerla horizontal.
Ahora se gira 90 grados completa dentro del rompecabezas, manteniendo toda la imagen visible.

## Sorpresa del rompecabezas corregida
- La foto está girada en la dirección correcta.
- Las piezas cerradas son completamente opacas.
- No se ve la foto por debajo antes de descubrir una pieza.
- Solo las piezas ya descubiertas dejan ver la imagen.

## Piezas en orden aleatorio
Las 51 posiciones ahora se descubren en un orden mezclado fijo.

Esto significa que:
- Día 1 puede revelar una esquina.
- Día 2 puede revelar una pieza del centro.
- Día 3 puede revelar una zona inferior.
- No se va completando de izquierda a derecha.

El orden queda fijo para que las pruebas y el enlace real sean consistentes.

El rompecabezas también se amplió para ocupar mucho más espacio en pantalla.

## Piezas solo sobre la foto
- El rompecabezas queda centrado.
- El marco se ajusta al tamaño de la foto rotada.
- Las piezas cubren solo la imagen, no el fondo alrededor.

## Rompecabezas restaurado
Se eliminó el cálculo dinámico que podía dejar el marco sin tamaño.
Ahora:
- la foto completa aparece girada correctamente,
- el rompecabezas vuelve a mostrarse siempre,
- la imagen no se recorta,
- las piezas cubren únicamente la foto,
- el conjunto queda centrado.

## Día 2 interactivo
El Día 2 ya tiene una experiencia propia:
- botón para descubrir algo que te recuerda a él;
- tarjeta tipo Polaroid;
- espacio listo para colocar la foto/objeto/canción exacta;
- texto romántico base.

## Pieza real al pulsar
Ahora el botón del rompecabezas genera con canvas el fragmento real de la foto correspondiente a ese día.
La pieza aparece primero flotando y ampliada, luego baja y encaja en su posición.

## Fix del botón de pieza
Se eliminó la dependencia de canvas para crear la mini pieza.
Ahora la animación usa una copia directa de la foto dentro de una ventana recortada,
por lo que funciona también al abrir `index.html` localmente.
En modo prueba, el botón permite repetir la animación aunque la pieza ya haya sido descubierta.

## Estado dinámico por día
- Al abrir Día 6, el encabezado cambia a `Día 6` y `45 días`.
- Al abrir Día 20, cambia a `Día 20` y `31 días`.
- El cálculo siempre usa 51 como total.
- En modo prueba, la pieza del día actual empieza siempre tapada, aunque ya la hayas probado antes.
- La pieza solo aparece/revela después de tocar el botón.
- En el enlace real de tu novio sí se recuerda si ya la descubrió.

## Solo aparece la pieza
La animación ya no usa una copia de la foto completa.
Se generaron 51 imágenes independientes dentro de la carpeta `pieces/`.
Cuando se pulsa el botón:
1. la foto completa sigue tapada;
2. aparece únicamente la pieza correspondiente al día;
3. la pieza flota y baja;
4. al final se revela solo su posición dentro del rompecabezas.

## Optimización de carga
- Las 51 mini piezas fueron comprimidas y reducidas.
- La página NO carga las 51 piezas al iniciar.
- Solo precarga la pieza correspondiente al día que se está viendo.
- La animación fue reducida a aproximadamente 1 segundo.

## Pieza individual sin revelar la foto final
- Al pulsar el botón aparece únicamente la pieza del día.
- La foto completa permanece totalmente tapada.
- No se revela el hueco correspondiente dentro del rompecabezas.
- La pieza aparece de inmediato, sin cargar las 51 mini imágenes.

## Pieza colocada en el tablero
Ahora el flujo es:
1. pulsas el botón;
2. aparece solo la pieza del día;
3. la pieza se mueve hacia el tablero;
4. encaja en su posición;
5. esa parte de la foto queda visible;
6. el resto de la foto sigue tapado.

## Mapeo exacto de piezas
Se corrigió la diferencia entre la pieza mostrada y el lugar donde se colocaba.
Cada una de las 51 posiciones ahora tiene un recorte exacto pre-generado de la foto rotada.
La vista previa usa ese recorte y la pieza viaja a la misma celda correspondiente.

## Revelado directo en el tablero
Se eliminó la vista previa de la pieza y la animación de traslado.
Ahora al pulsar el botón, la pieza aparece directamente en su posición del rompecabezas.
Esto evita cualquier diferencia entre una pieza mostrada previamente y su ubicación final.
