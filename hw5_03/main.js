let ul = document.querySelector('ul');
    

    ul.addEventListener('click', (e)=>{
        if(e.target && e.target.tagName == 'LI'){
           let val = prompt();
        //    if(val != null){
        //      val = prompt();
        //    }
        //    else{
        //     alert('please write correct data')
           
        //    }
           val == e.target.textContent;
           e.target.textContent = val;
           var span = document.createElement("SPAN");
           var img = document.createElement('img');

            img.src = 'tr.png'
            span.className = "delete";
            span.appendChild(img);

            e.target.appendChild(span);
        }
        if(e.target && e.target.tagName == 'BUTTON'){
            let li = document.createElement('li')
            let val = prompt();
            li.innerHTML = val;
            console.log(li.innerHTML);
            ul.append(li);
            var span = document.createElement("SPAN");
            var img = document.createElement('img');
   
            img.src = 'tr.png'
            span.className = "delete";
            span.appendChild(img);
        
            li.appendChild(span);
        }
        if(e.target && e.target.tagName=='IMG'){
            e.target.remove();
            console.log(e.currentTarget)        
            
        }
    })


    // сделать цикл на картинку 
class Person{
    

    constructor(name, surname){
        this.name = name
        this.surname = surname
    }

    get name() {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }

    get surname() {
        return this._surname;
    }
    
    set surname(value) {
        this._surname = value;
    }

    toString(){
        return this.name + " " + this.surname;
    }
  
}


let Person1 = new Person("Ayana", "Adilova");
let Person2 = new Person("Aldiyar", "Laubayev");
let Person3 = new Person("Alexandra", "Kim");
let Person4 = new Person("Kuanysh", "Omarbek");

let data = []
data.push(Person1)
data.push(Person2)
data.push(Person3)
data.push(Person4)


for(let i = 0; i < data.length; i++){
    let li = document.createElement('li')
    li.innerHTML = data[i].toString()
    ul.append(li)
    var span = document.createElement("SPAN");
    var img = document.createElement('img');

    img.src = 'tr.png'
    span.className = "delete";
    span.appendChild(img);

    li.appendChild(span);  

}