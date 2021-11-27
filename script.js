// calculator operations
function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

// 
function operate(op, opd1, opd2){
    let result = 0;

    switch(op) {
        case "+": result = add(opd1, opd2);
            break;
        case "-": result = subtract(opd1, opd2);
            break;
        case "*": result = multiply(opd1, opd2);
            break;
        case "/": result = divide(opd1, opd2);
            break;
    }
}