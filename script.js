let calculatorScreen = document.querySelector('.calculator-screen');
let currentInput = '';
let operation = '';
let firstNumber = '';

function appendNumber(number) {
    currentInput += number;
    calculatorScreen.value = currentInput;
}

function appendOperation(op) {
    if (currentInput !== '') {
        firstNumber = currentInput;
        operation = op;
        currentInput = '';
    }
}

function calculateResult() {
    if (currentInput !== '' && firstNumber !== '') {
        let result;
        switch (operation) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(currentInput);
                break;
        }
        calculatorScreen.value = result;
        currentInput = result.toString();
        firstNumber = '';
        operation = '';
    }
}

function clearScreen() {
    currentInput = '';
    operation = '';
    firstNumber = '';
    calculatorScreen.value = '';
}
