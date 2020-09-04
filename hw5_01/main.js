const content = document.getElementById('content'),
        btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', 'ajax.html');
    request.setRequestHeader('Content-type', 'application/json;charset-UTF8')
    request.send();


    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status == 200){
            document.getElementById('content').innerHTML = request.response;
            
        }
       
    })

})

