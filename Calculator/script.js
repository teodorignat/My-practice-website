let output = document.querySelector('.output');
const btnInput = document.querySelectorAll('.btn-input');
const btnAc = document.querySelector('.btn-ac'); 
const btnDel = document.querySelector('.btn-del'); 
const btnDiv = document.querySelector('.btn-divide'); 
const btnMultiply = document.querySelector('.btn-multiply'); 
const btnPlus = document.querySelector('.btn-plus'); 
const btnMinus = document.querySelector('.btn-minus'); 
const btnEqual = document.querySelector('.btn-equal'); 
let totalCalc = 0;

let displayOutput = (event) => {
    if (output.innerHTML === '0') {
        output.innerHTML = event.target.innerHTML;
    } else {
        return output.innerHTML = output.innerHTML + event.target.innerHTML;
    }
}

let acFunction = () => {
    totalCalc = 0;
    return output.innerHTML = '0';
}

let divFunction = () => {
        return output.innerHTML = output.innerHTML + ' ' + btnDiv.innerHTML + ' ';
}

let multiplyFunction = () => {
        return output.innerHTML = output.innerHTML + ' ' + btnMultiply.innerHTML + ' ';

}

let addFunction = () => {
        return output.innerHTML = output.innerHTML + ' ' + btnPlus.innerHTML + ' ';
}


let minusFunction = () => {
        return output.innerHTML = output.innerHTML + ' ' + btnMinus.innerHTML + ' ';
}

let equalFunction = () => {
    if (output.innerHTML === '0') {
        return output.innerHTML = '0';
    } else { 
        totalCalc = eval(output.innerHTML);
        return output.innerHTML = totalCalc.toFixed(2); 
    }
}

btnInput.forEach((index) => {
    index.addEventListener('click', displayOutput);
})

btnAc.addEventListener('click', acFunction)
btnDiv.addEventListener('click', divFunction);
btnMultiply.addEventListener('click', multiplyFunction);
btnPlus.addEventListener('click', addFunction);
btnMinus.addEventListener('click', minusFunction);
btnEqual.addEventListener('click', equalFunction);

