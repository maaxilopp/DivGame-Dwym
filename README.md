# DivGame

[![Maximiliano López](https://img.shields.io/badge/GitHub-Maximiliano_López-B7E3FF?logo=github&logoColor=black)](https://github.com/maaxilopp)

Un juego de reflejos hecho con HTML, CSS y JavaScript puro. Se genera una grilla de botones dinámicamente y uno de ellos se destaca al azar: hay que clickearlo antes de que el tiempo se agote o cambie solo a otro.

<img width="1915" height="942" alt="image" src="https://github.com/user-attachments/assets/3c250951-1d13-4bdf-9187-f5122ec0209b" />



## Cómo se juega

- Al iniciar, un botón se pinta de verde (el **destacado**).
- Hacé click en el botón verde antes de que se acabe el tiempo.
- Si clickeás un botón que **no** es el verde, perdés una vida (el botón parpadea en rojo).
- Si se agota el tiempo sin que lo clickees, también perdés una vida.
- Cada acierto suma una ronda **y el juego se acelera un poco**.
- Cuando te quedás sin vidas, el juego se detiene y muestra cuántas rondas completaste.

## Características

- Grilla de botones generada dinámicamente desde JavaScript (solo se usa `document`; el resto de los valores entran por parámetros).
- Botones cuadrados con bordes redondeados que crecen levemente al pasar el mouse.
- Selección aleatoria del botón destacado con `Math.random()`, evitando repetir el mismo dos veces seguidas.
- Temporizador con `setTimeout` que cambia el botón solo si no se clickea a tiempo.
- Sistema de vidas mostrado con corazones.
- Contador de rondas completadas.
- Dificultad progresiva: el tiempo disponible se reduce con cada acierto.

## Estructura del proyecto

- `ejercicio2.html` — estructura de la página.
- `ejercicio2.css` — estilos (grilla, colores, franja superior).
- `script.js` — toda la lógica del juego.

## Cómo ejecutarlo

Abrí `ejercicio2.html` en el navegador (o usá la extensión Live Server de VS Code).

## Tecnologías

- HTML
- CSS
- JavaScript (sin librerías)

## Datos académicos

- **Autor:** Maximiliano López
- **Asignatura:** Desarrollo Web y Mobile
- **Profesores:** Leonardo Val, Michel Sampil
- **Período:** Segundo Semestre de 2026
- **Institución:** Facultad de Ingeniería y Tecnologías de la Universidad Católica del Uruguay
