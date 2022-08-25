

/*
onclick
setInterval
clearInterval
if, else if
querySelector
*/

let i = 100;
const btn = document.querySelector('button');
let percentage = document.getElementsByClassName('zeit');
let myInterval2;

const fnStart = () => {
    myInterval = setInterval(myTimer, 125);
    console.log(percentage[0]);
}


function myTimer() {
    console.log(i);
    if (i <= 100 && i >= 0) {
        percentage[0].innerHTML = i + '%';

    } else {
        clearInterval(myInterval);
    }
    i--;
}


