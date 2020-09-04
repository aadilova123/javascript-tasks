// localStorage.setItem('number',5)
// // localStorage.removeItem('number')

// localStorage.clear();
// console.log(localStorage.getItem('number'))


const name = document.getElementById('name'),
    email = document.getElementById('email'),
    form = document.querySelector('#form1'),
    form2 = document.querySelector('#form2'),
    btnSign = document.getElementById('sign_in')
    btnLogin = document.querySelector('#login')




btnSign.addEventListener('click',()=>{
    
    localStorage.setItem('name', name.value)
    localStorage.setItem('email', email.value)
   

})    

btnLogin.addEventListener('click' , ()=>{
    if(localStorage.getItem('name')=="Аяна" && localStorage.getItem('email')=="adilova-ayana@mail.ru"){
        console.log("Success")
    }
})