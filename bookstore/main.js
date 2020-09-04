window.addEventListener("DOMContentLoaded", ()=>{

    const tabs = document.querySelectorAll('.tab__link'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tab__links');


    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.style.display = 'none'
        })

        tabs.forEach(item=>{
            item.classList.remove('tab__link_active')
        })
    }

    function showTabContent(i){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tab__link_active')
    }


    hideTabContent();
    showTabContent(0);  
    
    tabsParent.addEventListener('click', (event)=>{
        
        const target = event.target;
        console.log(target);
        if(target && target.classList.contains('tab__link')){
            tabs.forEach((item,i)=>{
                if(target ==item){
                hideTabContent();
                showTabContent(i)
                }
            })
        }
    })

    const modalTrigger = document.getElementById('btn'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('.modal__close')

    modalTrigger.addEventListener('click',()=>{
        modal.classList.add('show')
        modal.style.display = 'block'
    })     
    
    modalCloseBtn.addEventListener('click',()=>{
        modal.style.display = 'none'
        modal.classList.add('hide')
        modal.classList.remove('show')
    })

    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current')

    let slideIndex = 1

    showSlides(slideIndex)


    if(slides.length < 10){
        total.textContent = `0${slides.length}`
    }
    else{
        total.textContent = slides.length;
    }

    function showSlides(n){
    if(n>slides.length){
        slideIndex = 1
    }
    if(n<1){
        slideIndex = slides.length;
    }

    slides.forEach(item => {
    item.style.display = "none"
    });

    slides[slideIndex - 1].style.display = "block"


    if(slides.length<10){
        current.textContent = `0${slideIndex}`
    }
    else{
        current.textContent = slideIndex;
    }
    }



    function plusSlides(n){
        showSlides(slideIndex+=n)
    }

    prev.addEventListener('click',()=>{
        plusSlides(-1)
    })

    next.addEventListener('click',()=>{
        console.log('fghjk')
        plusSlides(1)
    })


})