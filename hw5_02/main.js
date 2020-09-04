const content = document.getElementById('content'),
        btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', 'ajax.json');
    request.setRequestHeader('Content-type', 'application/json;charset-UTF8')
    request.send();
    let ul = document.createElement('ul');

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status == 200){           
            content.append(ul);
            const data = JSON.parse(request.response)
            const arr = data.arr;
          
            for(let i = 0; i < arr.length; i++){
                console.log(arr[i]);
                let li = document.createElement('li');
                li.innerText = arr[i]
                ul.append(li); 
                console.log(li.innerHTML)               
            }
            
        }
       
    })

})
