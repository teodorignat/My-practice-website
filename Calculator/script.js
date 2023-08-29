let output = document.querySelector('.output');
const btnInput = document.querySelectorAll('.btn-input');
const btnAc = document.querySelector('.btn-ac'); 
const btnDel = document.querySelector('.btn-del'); 
const btnOperator = document.querySelectorAll('.btn-operator'); 
const btnEqual = document.querySelector('.btn-equal');
let totalCalc = 0;

let displayOutput = (event) => {
    let operator = ['/', '*', '+' , '-'];
    let numbers = ['00','0', '1', '2', '3','4','5','6','7','8','9'];
    if (event.target.innerHTML.includes("(")) {
        if (output.innerHTML === '0' || output.innerHTML === '0.00') {
            return output.innerHTML = event.target.innerHTML;
        } else if (!operator.includes(output.innerHTML[output.innerHTML.length-1])) {
            alert("You need an operator before pharantesis!");
        } else {
            return output.innerHTML += event.target.innerHTML;
        }
    } else if (event.target.innerHTML.includes(")")) {
            if (operator.includes(output.innerHTML[output.innerHTML.length-1]) === true) {
            alert("You can't have an operator before closing the parantesis.");
            }  else if (output.innerHTML === '0' || output.innerHTML === '0.00') {
                return output.innerHTML = event.target.innerHTML;
            } else {
                return output.innerHTML += event.target.innerHTML;
            }
    } else if (numbers.includes(event.target.innerHTML)) {
            if (output.innerHTML[output.innerHTML.length-1] === ')') {
                alert ('You need an operator after closing pharantesis!')
            } else if (output.innerHTML === '0' || output.innerHTML === '0.00') {
                return output.innerHTML = event.target.innerHTML;
            } else {
                return output.innerHTML += event.target.innerHTML;
            }   
    } else {
        if (output.innerHTML === '0' || output.innerHTML === '0.00') {
            return output.innerHTML = event.target.innerHTML;
        } else {
            return output.innerHTML = output.innerHTML + event.target.innerHTML;
        }
    }
}

let operators = (event) => {
    let operator = ['/', '*', '+' , '-'];
    if (operator.includes(event.target.innerHTML)) {
        if (operator.includes(output.innerHTML[output.innerHTML.length-1])) {
            alert("You can't have two consecutive operators");
        } else {
            return output.innerHTML = output.innerHTML + event.target.innerHTML;
        }
    }
}

let acFunction = () => {
    totalCalc = 0;
    return output.innerHTML = '0';
}

let delFunction = () => {
    return output.innerHTML = output.innerHTML.substring(0,output.innerHTML.length-1);
}

let equalFunction = () => {
    if (output.innerHTML === '0' || output.innerHTML === '0.00') {
        return output.innerHTML = '0';
    } else { 
        totalCalc = eval(output.innerHTML);
        return output.innerHTML = totalCalc.toFixed(2); 
    }
}

btnInput.forEach((index) => {
    index.addEventListener('click', displayOutput);
})

btnOperator.forEach((index) => {
    index.addEventListener('click', operators);
})

btnAc.addEventListener('click', acFunction)
btnDel.addEventListener('click', delFunction);
btnEqual.addEventListener('click', equalFunction);

