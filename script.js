function generarGrilla(document, filas, columnas, ancho, alto) {
  let destacado = null;
  let timerId = null;
  const grilla = document.getElementById("grilla");
  let tiempo = 10000;
  let vidas = 3;
  let contadorRondas = 0;
  grilla.style.display = "grid";
  // Posicionar la cuadrícula en el centro de la página
  grilla.style.position = "absolute";
  grilla.style.top = "50%";
  grilla.style.left = "50%";
  grilla.style.transform = "translate(-50%, -50%)";
  // Definir la cuadrícula
  grilla.style.gridTemplateColumns =
    "repeat(" + columnas + ", " + ancho + "px)"; // Definir el número de columnas y el ancho de cada columna
  grilla.style.gap = "5px"; // Gap entre los botones
  const botones = [];
  for (let i = 0; i < filas * columnas; i++) {
    const boton = document.createElement("button");
    botones.push(boton);
    boton.style.width = ancho + "px";
    boton.style.height = alto + "px";
    boton.style.borderRadius = "10px";
    boton.style.cursor = "pointer";
    boton.classList.add("boton");
    boton.classList.add("normales");
    boton.addEventListener("mouseenter", function () {
      boton.style.transform = "scale(1.1)";
    });
    boton.addEventListener("mouseleave", function () {
      boton.style.transform = "scale(1)";
    });
    boton.addEventListener("click", function () {
      if (boton.classList.contains("normales")) {
        boton.classList.add("tocados");
        setTimeout(function () {
          boton.classList.remove("tocados");
          perderVida();
        }, 400);
      } else if (boton.classList.contains("destacado")) {
        contadorRondas++;
        mostrarRondas();
        if (tiempo > 500) {
          tiempo = tiempo - 200;
        }
      }
    });
    grilla.appendChild(boton);
  }

  function elegirAlAzar(botones) {
    if (destacado !== null) {
      destacado.classList.remove("destacado");
      destacado.classList.add("normales");
      destacado.onclick = null;
      clearTimeout(timerId);
    }
    let nuevo = destacado;
    while (nuevo === destacado) {
      const indice = Math.floor(Math.random() * botones.length);
      nuevo = botones[indice];
    }
    destacado = nuevo;
    destacado.classList.add("destacado");
    destacado.classList.remove("normales");
    destacado.onclick = function () {
      elegirAlAzar(botones);
    };
    timerId = setTimeout(function () {
      perderVida();
      elegirAlAzar(botones);
    }, tiempo);
  }

  function mostrarVidas() {
    if (vidas > 0) {
      const elemento = document.getElementById("vidas");
      elemento.textContent = "Vidas restantes: " + "❤️".repeat(vidas);
    } else {
      const elemento = document.getElementById("vidas");
      elemento.textContent = "No tienes mas vidas :((" + "💔";
    }
  }

  function mostrarRondas() {
    const elemento = document.getElementById("rondas");
    elemento.textContent = "Rondas completadas: " + contadorRondas;
  }
  mostrarVidas();
  mostrarRondas();
  elegirAlAzar(botones);

  function perderVida() {
    vidas--;
    mostrarVidas();
    if (vidas <= 0) {
      setTimeout(function () {
        alert(
          "¡Haz perdido! Intenta de nuevo." +
            " Rondas completadas: " +
            contadorRondas,
        );
        vidas = 3;
        contadorRondas = 0;
        tiempo = 10000;
        mostrarVidas();
        mostrarRondas();
        elegirAlAzar(botones);
      }, 50);
    }
  }
}

generarGrilla(document, 4, 4, 50, 50);
