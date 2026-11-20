let numSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    // Agregar eventos de click a los cuadrados
    squares[i].addEventListener("click", function () {
      // Guardar el color del cuadrado clickeado
      let clickedColor = this.style.backgroundColor;

      // Comparar con pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "¡Correcto!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Intentalo Nuevamente";
      }
    });
  }
}

function reset() {
  // Generar nuevos colores
  colors = generateRandomColors(numSquares);
  // Elegir un nuevo color ganador del arreglo
  pickedColor = pickColor();
  // Cambiar colorDisplay para que coincida con el color ganador
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "Nuevos Colores";
  messageDisplay.textContent = "";

  // Cambiar los colores de los cuadrados
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  // Iterar sobre todos los cuadrados y asignarles el color ganador
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // Crear un arreglo vacío
  let arr = [];
  // Repetir num veces
  for (let i = 0; i < num; i++) {
    // Obtener un color aleatorio y agregarlo al arreglo
    arr.push(randomColor());
  }
  // Devolver el arreglo
  return arr;
}

function randomColor() {
  // Elegir "red" de 0 a 255
  let r = Math.floor(Math.random() * 256);
  // Elegir "green" de 0 a 255
  let g = Math.floor(Math.random() * 256);
  // Elegir "blue" de 0 a 255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
