const screen = document.getElementById("text");
let num1;
let num2;
let num2_start = false;
let operation ;
let newInput = false;

const buttons = document.querySelectorAll(".button");
buttons.forEach(button =>{
    const item = button.innerHTML;
    if(!isNaN(item)){
        button.addEventListener("click", e=>{insertNumber(item)});
    }
    if(item == "AC")
        button.addEventListener('click', eraseAll);
    else if(item == "+")
        button.addEventListener('click', e =>{
            operation = "+";
            newInput = true;
            num2_start = true;
        })
    else if(item == '-')
        button.addEventListener('click', e =>{
            operation = "-";
            newInput = true;
            num2_start = true;
        });
    else if(item == 'X')
        button.addEventListener('click', e =>{
            operation = "X";
            newInput = true;
            num2_start = true;
        })
    else if(item =='/')
        button.addEventListener('click', e=>{
            operation = "/";
            newInput = true;
            num2_start = true;
        })
    else if(item == "=")
        button.addEventListener('click', equals);
})

function insertNumber(num){
    if(newInput == true){
        num1 = screen.innerHTML;
        screen.innerHTML = '';
        newInput = false;
    }
    screen.innerHTML+=num;
}

function eraseAll(){
    screen.innerHTML = '0';
}

function equals(){
    if(num2_start){
        num2 = screen.innerHTML;
        num2_start = false;
    }
    if(operation == '+')
        addition();
    else if(operation == '-')
        subtraction();
    else if(operation == 'X')
        multiplication();
    else if(operation == '/')
        division();
    }

// --------------------------------------------------------------------------------------------------
function addition(){
    console.log(num2);
    screen.innerHTML = parseInt(num1) + parseInt(num2);
    num1 = screen.innerHTML;
}
function subtraction(){
    screen.innerHTML = parseInt(num1)- parseInt(num2);
    num1 = screen.innerHTML;
}
function multiplication(){
    screen.innerHTML = parseInt(num1) * parseInt(num2);
    num1 = screen.innerHTML;
}
function division(){
    screen.innerHTML = parseInt(num1) / parseInt(num2);
    num1 = screen.innerHTML;
}