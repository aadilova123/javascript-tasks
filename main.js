const ul = document.querySelector('ul')

fetch('https://jsonplaceholder.typicode.com/photos')
     .then(response => response.json())
     .then(data => {
         data.map(item => {
            let img = document.createElement('img'),
                li = document.createElement('li');
            li.innerHTML = item.title
            img.src = item.url
            console.log(item.url)
            ul.append(li);
            ul.append(img);
            
         })
            
        
     })