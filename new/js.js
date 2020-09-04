
// function fun(){
//     let ran = document.getElementById('one'),
//         inp = document.getElementById('txt');

//     console.log('dfgh')
//     inp.value = ran.value;
// }    

function fun(){
    let ran = document.getElementById('one'),
        block = document.getElementById('block');
    
     block.style.width = ran.value + 'px'; 
}



let ul = document.querySelector('ul'),
    btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    let sel = document.getElementById("select").selectedIndex,
        options = document.getElementById("select").options;
    
    let li = document.createElement('LI');
    li.innerHTML = options[sel].text;
    ul.appendChild(li);
})

    
let btnREs = document.getElementById('btn'),
    inpr1 = document.getElementsByName('r1'),
    inpr2 = document.getElementsByName('r2');

let x = 0;    
btnREs.addEventListener('click', ()=>{
    for(let i=0; i<inpr1.length; i++){
        if( inpr1[i].checked && inpr1[i].value == 'Nursultan'){
            x += 1;
           
        }
    }

    for(let i=0; i<inpr2.length; i++){
        if( inpr2[i].checked && inpr2[i].value == '2'){
            x += 1;
            
        }
       
    }

    console.log(x);
})    