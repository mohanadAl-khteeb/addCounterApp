
let scoreEl = document.querySelectorAll('.score');
let counterOne = 0;
let countertwo = 0;

function addOneToHome(){

    counterOne+=1;
    scoreEl[0].textContent = counterOne;
}
function addTwoToHome(){

    counterOne+=2;
    scoreEl[0].textContent = counterOne;
}
function addThreeToHome(){
    counterOne+=3;
    scoreEl[0].textContent = counterOne;
}

function addOneToGuest(){
    countertwo+=1;
    scoreEl[1].textContent = countertwo;
}
function addTwoToGuest(){
    countertwo+=2;
    scoreEl[1].textContent = countertwo;
}
function addThreeToGuest(){
    countertwo+=3;
    scoreEl[1].textContent = countertwo;
}

function resetCounterOne(){
    counterOne = 0;
    scoreEl[0].textContent = counterOne;
}
function resetCounterTwo(){
    countertwo = 0;
    scoreEl[1].textContent = counterOne;
}
