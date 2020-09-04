let table = document.querySelector('table'),
    inpName= document.getElementById('name'),
    inpSName= document.getElementById('surname'),
    btn = document.getElementById('addBtn');


table.addEventListener('click', (e)=>{
    if(e.target && e.target.tagName == 'TD'){
       let val = prompt();
       val == e.target.textContent;
       e.target.textContent = val;
    }
})

btn.addEventListener('click', ()=>{

    // var newRow = table.insertRow(table.rows.length);
    //     console.log(table.rows.length);
    //     var cell1 = newRow.insertCell(0);
    //     var cell2 = newRow.insertCell(1);
    //     console.log(inpName.textContent);
    //     cell1.innerHTML = inpName.textContent;
    //     cell2.innerHTML = inpSName.textContent;
    //     table.insertRow(table.rows.length);

    
    console.log(table.rows.length);
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        
        td1.textContent = inpName.value;
        td2.textContent = inpSName.value;

        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);    

})



// form.addEventListener('click', (event)=()=>{

//     if(event.target && event.target.tagName == 'BUTTON'){
        
//         // var row = table.insertRow(0);
//         // var cell1 = row.insertCell(0);
//         // var cell2 = row.insertCell(1);
//         // cell1.innerHTML = inpName.value;
//         // cell2.innerHTML = inpSName.value;
//         //   table.insertRow(0)
          
//        }
// })