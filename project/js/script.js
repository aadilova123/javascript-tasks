/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Аквамен",
        "Мстители",
        "Адвокат дьявола"       
    ]
};


// 1
let promo_adv = document.querySelector('.promo__adv')
promo_adv.remove()

// 2
let promo_genre = document.querySelector('.promo__genre')
promo_genre.innerHTML = "ДРАМА"

// 3 
document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")'

// 4-5 
let ul = document.querySelector('.promo__interactive-list')

movieDB.movies.sort()

// for(let i = 0; i < movieDB.movies.length; ++i){
//     let li = document.createElement('li')
//     li.classList.add("promo__interactive-item")
//     let divDelete = document.createElement('div')
//     divDelete.classList.add("delete") 
//     li.appendChild(divDelete)
//         li.textContent = i+1 + ". " + movieDB.movies[i]
//         ul.appendChild(li)
       
        
// }

movieDB.movies.forEach((item, i)=>{
    ul.innerHTML += `
        <li class="promo__interactive-item"> ${i+1} ${item}  
            <div class = "delete"></div>
        </li>
    `
})