// const inp1 = document.getElementById('inp1'),
//       inp2 = document.getElementById('inp2'),
//       inp3 = document.getElementById('inp3'),
//       btn = document.querySelector('button'),
//       body = document.querySelector('body');

// let str 
// btn.addEventListener('click', function(){
//     str = parseInt(inp1.value)+ parseInt(inp2.value)+ parseInt(inp3.value)
//     console.log(str)
//     if(str>0){
//         let Newbtn = document.createElement('button')
//         body.appendChild(Newbtn)
//         const text = document.createTextNode(str)
//         Newbtn.appendChild(text)
//     }
// })


// let input = document.querySelector('#inp1'),
//     btn = document.querySelector('button');
//     ul = document.querySelector('ul')


/// счетчик
let  p = document.querySelector('p')
    btn = document.querySelector('button');
let n = parseInt(p.textContent);

btn.onclick=()=>{    
    n++;
    n == p.textContent;
    p.textContent = n;
}

let inp = document.querySelector('input')
let btn2 = document.getElementById('b')

btn2.onclick = ()=>{
    alert(Math.pow(inp.value, 2))
}





// btn.addEventListener('click',()=>{
//     let li = document.createElement('li');
//     li.innerHTML = input.value;
//     input.value = '';
//     ul.appendChild(li)

// })


// ul.addEventListener('click', (event) =>{
//     if(event.target && event.target.tagName == 'LI'){
//         event.target.style.textDecoration = 'line-through'
//     }
// })

