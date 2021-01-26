const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector()

let login = '';
function toggleModalAuth(){
  modalAuth.classList.toggle('is-open')
}




function authorized(){
  console.log("authorized")
  buttonAuth.style.display = 'none'
}

function (notAuthorized){

  function logIn(event){
    event.preventDefault()
    login = loginInput.value;
    toggleModalAuth();
    checkAuth();
  }
  buttonAuth.addEventListener('click',toggleModalAuth);
  closeAuth.addEventListener('click',toggleModalAuth);
  loginForm.addEventListener('submit',logIn )
}

function checkAuth(){
      if(login){
        authorized();
      }
      else{
        notAuthorized();
      }
}

checkAuth();
