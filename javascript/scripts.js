let operacion = null;
let igual = null;
let num1 = null;
let num2 = null;
let numerofinal = null;
let display = null;

function press(element){
    
    let display = document.querySelector('#display');
    display.innerText = element;
    if( num1 === null){
        num1 = element;
    }else{
        num2 = element;
    }

}

function setOP(op){
    operacion = op;
}


function calculate(){
    let display = document.querySelector('#display');
    if (operacion != null && num1 != null & num2 != null){
        switch (operacion) {
            case '+':
                display.innerText = num1 + num2;
                break;
            case '-':
                display.innerText = num1 - num2;
                break;
            case '*':
                display.innerText = num1 * num2;
                break;
            case '/':
                display.innerText = num1 / num2;
                break;
                
        }

    }

    num1 = null;
    num2 = null;

    console.log("hola");
}

function clr (){

    let display = document.querySelector('#display');
    display.innerText = 0;
}