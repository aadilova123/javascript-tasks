let ul = document.getElementById('myUl');
    li = document.querySelector('li')

    
ul.addEventListener('click', (e)=>{
    if(e.target && e.target.tagName == 'BUTTON'){
        let li = document.createElement("LI")
        li.innerHTML = "пункт"
        ul.appendChild(li)
    }
    if(e.target && e.target.tagName == 'LI'){
        let val = e.target.textContent;
            val += '!'
        var value = val;    
        value == e.target.textContent;
        e.target.textContent = value;
    }
})  