let addBtn = document.getElementById('btnAdd')
    ul = document.getElementById('mytasks')
    input = document.querySelector('input')
    del = document.getElementsByClassName("delete");

addBtn.addEventListener('click',()=>{

    let li = document.createElement('li');    
    li.innerHTML = input.value;
    if(input.value === ''){
        alert("Sorry, you must write something.")
    }
    else{        
        ul.appendChild(li)
    }
    input.value = ''; 
   
    var span = document.createElement("SPAN");
    var img = document.createElement('img');
   
    img.src = 'tr.png'
    span.className = "delete";
    span.appendChild(img);
   
    li.appendChild(span);  
    
    
})



ul.addEventListener('click',(event)=>{
    if(event.target && event.target.tagName == 'LI'){
        event.target.style.backgroundColor = '#ccd7ff'
        event.target.style.textDecoration = 'line-through'
    } 
    else if(event.target && event.target.tagName == "IMG"){
       console.log(event)
    }  

    var i;
    for (i = 0; i < del.length; i++) {
      del[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    
})



let list = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < list.length; i++) {
    var span = document.createElement("SPAN");
    var img = document.createElement('img');
    img.src = 'tr.png'
    span.className = "delete";
    span.appendChild(img);
    list[i].appendChild(span);
}