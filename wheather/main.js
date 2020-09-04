
const ul = document.querySelector('ul')

let li1 = document.createElement('li');
wheather =()=>{  fetch('http://api.weatherstack.com/forecast?access_key=d7227c33ba34f757ffff2e1d6e821e9b&query=Almaty')
     .then(response => response.json())
     .then(data => {                 
            
            li1.innerHTML = data.current.temperature;           
            ul.append(li1);
            console.log('qwerty')
            
        })
            
    }
setInterval(wheather,1000)