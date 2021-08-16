function simpleCalculator() {
  document.getElementById('buttonScientific1').disabled = true;
  document.getElementById('buttonScientific2').disabled = true;
  document.getElementById('buttonScientific3').disabled = true;
  document.getElementById('buttonScientific4').disabled = true;
}

function scientificCalculator() {
  document.getElementById('buttonScientific1').disabled = false;
  document.getElementById('buttonScientific2').disabled = false;
  document.getElementById('buttonScientific3').disabled = false;
  document.getElementById('buttonScientific4').disabled = false;
}

//Criando uma variável que guarde o primeiro número inserido
var firstNumber = '';
var secondNumber = '';
var operator = '';
var isFirstNumber = true;

//Otimizando o código, criando uma função para ser chamada sempre que quiser exibir na tela 
function displayNumber(number) {
  document.getElementById('screen').innerHTML = number;
}

//Função para inserir o número e mostrar na screen
function insertNumber(number) {
  if (isFirstNumber) {
    firstNumber = firstNumber.concat(number);
    displayNumber(firstNumber);
  } else {
    secondNumber = secondNumber.concat(number);
    displayNumber(secondNumber);
  }
}

function operation(operatorChoose) {
  isFirstNumber = false;
  operator = operatorChoose;
}

function sum(num1, num2) {
  return (num1 + num2);
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function squareroot(num1) {
  return Math.sqrt(num1);
}

function pi() {
  return Math.PI;
}

function squared(num1) {
  return Math.pow(num1, 2);
}

function cubed(num1) {
  return Math.pow(num1, 3);
}

function resultsquareroot() {
  displayNumber(squareroot(firstNumber));
}

function resultpi() {
  displayNumber(pi());
}

function resultsquared() {
  displayNumber(squared(firstNumber));
}

function resultcubed() {
  displayNumber(cubed(firstNumber));
}

function result() {
  var response = 0; //Como pode ter várias saídas, a variável response armazena o resultado de acordo com a função a ser utilizada
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  if (operator == 'sum') {
    response = sum(firstNumber, secondNumber);
  } else if (operator == 'division') {
    response = division(firstNumber, secondNumber);
  } else if (operator == 'subtraction') {
    response = subtraction(firstNumber, secondNumber);
  } else if (operator == 'multiplication') {
    response = multiplication(firstNumber, secondNumber);
  }

  firstNumber = response.toString();
  secondNumber = '';
  isFirstNumber = true;

  displayNumber(response);
}


function clearCalc() {
  displayNumber(0);
  firstNumber = '';
  secondNumber = '';
  operator = '';
  isFirstNumber = true;
}

function cancelEntry() {
  if (isFirstNumber) {
    firstNumber = firstNumber.substr(0, firstNumber.length - 1);
    displayNumber(firstNumber);
  } else if (secondNumber) {
    secondNumber = secondNumber.substr(0, secondNumber.length - 1);
    displayNumber(secondNumber);
  }
}