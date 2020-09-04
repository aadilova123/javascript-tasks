let btn = document.querySelector('button'),
    p = document.querySelector('p');


let timer = setInterval(fun, 1000);

function fun(){

    p.innerHTML -= 1;
    if(p.innerHTML == 0){
        clearInterval(timer);
    }
}