// 1
let checkb1= document.getElementById('checkb1'),
    btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2');
    
btn1.addEventListener('click',()=>{
    checkb1.checked = true;
})

btn2.addEventListener('click',()=>{
    checkb1.checked = false;
})

// 2
let checkb2= document.getElementById('checkb2'),
    btn3 = document.getElementById('btn3'),
    txt = document.getElementById('txt');

btn3.addEventListener('click', ()=>{
    if(checkb2.checked){
        txt.innerHTML = 'Привет!'
    }
    else{
        txt.innerHTML = 'Пока)'
    }
})

// 3

function fun3(){
    let ran = document.getElementById('ran'),
        txt = document.getElementById('p'),
        block = document.getElementById('block');
    
     block.style.width = ran.value + 'px'; 
     txt.style.fontSize = ran.value + 'px';

}

// 4
let ans = 0,
    txtRes = document.getElementById('ans')
    btnRes = document.getElementById('res'),
    inpr1 = document.getElementsByName('r1'),
    inpr2 = document.getElementsByName('r2'),
    inpr3 = document.getElementsByName('r3'),
    inpr4 = document.getElementsByName('r4'),
    inpr5 = document.getElementsByName('r5'),
    inpr6 = document.getElementsByName('r6');
    inpr7 = document.getElementsByName('r7'),
    inpr8 = document.getElementsByName('r8');

btnRes.addEventListener('click', ()=>{
    for(let i=0; i< inpr1.length; i++){
        if( inpr1[i].checked && inpr1[i].value == '5'){
            ans += 1;
           
        }
    }

    for(let i=0; i<inpr2.length; i++){
        if( inpr2[i].checked && inpr2[i].value == '5'){
            ans += 1;
            
        }
       
    }
    for(let i=0; i< inpr3.length; i++){
        if( inpr3[i].checked && inpr3[i].value == '100'){
            ans += 1;
           
        }
    }

    for(let i=0; i<inpr4.length; i++){
        if( inpr4[i].checked && inpr4[i].value == '6'){
            ans += 1;
            
        }
       
    }
    for(let i=0; i< inpr5.length; i++){
        if( inpr5[i].checked && inpr5[i].value == '100'){
            ans += 1;
           
        }
    }

    for(let i=0; i<inpr6.length; i++){
        if( inpr6[i].checked && inpr6[i].value == '3'){
            ans += 1;
            
        }
       
    }
    for(let i=0; i< inpr7.length; i++){
        if( inpr7[i].checked && inpr7[i].value == '100'){
            ans += 1;
           
        }
    }

    for(let i=0; i<inpr8.length; i++){
        if( inpr8[i].checked && inpr8[i].value == '120'){
            ans += 1;
            
        }
       
    }

    if(ans>=7){
        txtRes.innerHTML = 'Отличный результат! Вы молодец!'
    }
    else if(ans>=4 && ans <= 6){
        txtRes.innerHTML = "Хорошо! Вы постарались!"
    }
    else{
        txtRes.innerHTML = "Удовлетворительно. Попробуйте еще раз)"
    }
    
})    

