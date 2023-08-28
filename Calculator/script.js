let output = document.querySelector('.output');
const btnInput = document.querySelectorAll('.btn-input');
const btnAc = document.querySelector('.btn-ac'); 
const btnDel = document.querySelector('.btn-del'); 
const btnOperator = document.querySelectorAll('.btn-operator'); 
const btnEqual = document.querySelector('.btn-equal');
let totalCalc = 0;

let displayOutput = (event) => {
    let operator = ['/', '*', '+' , '-',];
    if (event.target.innerHTML.includes("(")) {
        if (operator.includes(output.innerHTML[output.innerHTML.length-2]) === false) {
            alert("You need an operator before pharantesis!");
        }  else {
            if (output.innerHTML === '0' || output.innerHTML === '0.00') {
                output.innerHTML = event.target.innerHTML;
            } else {
                return output.innerHTML = output.innerHTML + event.target.innerHTML;
            }
        }
    } else if (event.target.innerHTML.includes(")")) {
        if (operator.includes(output.innerHTML[output.innerHTML.length-2]) === true) {
            alert("You can't have an operator before closing the parantesis.");
        }  else {
            if (output.innerHTML === '0' || output.innerHTML === '0.00') {
                output.innerHTML = event.target.innerHTML;
            } else {
                return output.innerHTML = output.innerHTML + event.target.innerHTML;
            }

        }
    } else {
        if (output.innerHTML === '0' || output.innerHTML === '0.00') {
            output.innerHTML = event.target.innerHTML;
        } else {
            return output.innerHTML = output.innerHTML + event.target.innerHTML;
        }
    }
}

let operators = (event) => {
    let operator = ['/', '*', '+' , '-'];
    if (operator.includes(event.target.innerHTML)) {
        if (operator.includes(output.innerHTML[output.innerHTML.length-2])) {
            alert("You can't have two consecutive operators");
        } else if (output.innerHTML[output.innerHTML.length-2] === "(" ) {
            alert("You can't have operator after pharantesis.")
        } else {
            return output.innerHTML = output.innerHTML + ' ' + event.target.innerHTML + ' ';
        }
    }
}

let acFunction = () => {
    totalCalc = 0;
    return output.innerHTML = '0';
}

let delFunction = () => {
    let operator = ['/', '*', '+' , '-'];
    if (operator.includes(output.innerHTML[output.innerHTML.length-2])) {
        return output.innerHTML = output.innerHTML.substring(0,output.innerHTML.length-3);
    } else {
        return output.innerHTML = output.innerHTML.substring(0,output.innerHTML.length-1);
    }
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

