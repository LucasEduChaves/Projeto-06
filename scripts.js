// funções
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if ( e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
})

// funções callback
function handleClick(event) {
  event.preventDefault(); // Não faça o padrão
  
  const inputNumber = document.querySelector("#inputNumber");
  const enteredNumber = Number(inputNumber.value);
  
  if (isNaN(enteredNumber) || enteredNumber < 0 || enteredNumber > 10) {
    alert("Digite um número entre 0 e 10.");
  } else if (enteredNumber === randomNumber) {
    toggleScreen();
    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`;
  } else {
    notCountEnter();
  }
  
  inputNumber.value = "";
}

function handleResetClick() {
  randomNumber = Math.round(Math.random() * 10)
  
  toggleScreen()
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function notCountEnter() {
  let inputNumber = document.querySelector("#inputNumber")

  if (inputNumber.value !== "") {
  xAttempts++
  }
}