"use strict";
let circleswrap = document.querySelector('.circles');
let circles = circleswrap.querySelectorAll('.circle');
let squareswrap = document.querySelector('.squares');
let squares = squareswrap.querySelectorAll('.square'); // Внутрь помещается css - селектор, поддержиет id, class, вложенные елементы, псевдоелементы, лучше всего использовать именно 
let button = document.querySelector(".intro__btn");
console.log(button);
const intro = document.querySelector('.intro');

let links = document.getElementsByTagName("a");
console.log(links);

console.log(links[1]); // Выведет второй елемент массива links

// Также мы не можем напрямую взаимодействовать с елементом массива, стилизовать его, даже если он один в массиве



console.log(circles);


// эту комманду для получения елементов со страницы, также у него есть метод ForEach
squares.forEach(item => {
console.log(item);
});

let oneSquare = document.querySelector('.square'); // выводится первый елемент с html документа
console.log(oneSquare);

console.dir(oneSquare);

// действия с елементами на странице

// inline стили (style), которые имеют больший приоритет, чем стили в css
oneSquare.style.backgroundColor = 'purple'; // цвет первого квадрата был изменен на желтый
oneSquare.style.width = '200px'; // ширина первого квадрата была изменена на 200px
// circles.style.backgroundColor = 'pink'; // будет ошибка, правильней будет вот так:
circles[0].style.backgroundColor = 'pink'; // правильный вариант!

squares.forEach(item => {
    item.style.backgroundColor = 'brown';
});

const div = document.createElement('div'); // создает елемент, но не добавляет его на страницу, ('div') - это тип елемента, который будет на странице, может быть a, header и т.д
const text = document.createTextNode('Some text') // создает текст
div.classList.add('black');
// squares[1].before(div);
circleswrap.append(div); // используется для  добавления елемента div в конец его нового родителя circleswrap
// circleswrap.prepand(div); // используется для  добавления елемента div в начало его нового родителя circleswrap
// // const circleswrap = document.querySelector('.circles').append(div); // используется для одноразового добавления елемента div в начало его нового родителя circleswrap
// circles[1].before(div); // добавляет елемент div перед вторым елементом circles
// circles[1].after(div); // добавляет елемент div после вторым елементом circles

// circles[0].remove();
// circles[1].replaceWith(squares[1]); // заменяет circles[1] на squares[1]

            // Устаревшие комманды:

// circleswrap.appendChild(div);
// squareswrap.insertBefore(div, squares[2]);
// circleswrap.removeChild(circles[2]); // удаляет третий елемент circles внутри родителя circleswrap
// squareswrap.replaceChild(circles[2], squares[2]); // заменяет squares[2] на circles[2]  

// Ввод текста в созданный div при помощи скриптов js

div.innerHTML = "<h1>Hello, World</h1>"; // могут быть применены html - теги
// div.textContent = "Hello"; // применить html - теги невозможно

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>')
// - beforebegin - вставяет выбраный елемент перед div
// - afterbegin -  вставяет выбраный елемент в начале div
// - beforeend -  вставяет выбраный елемент в конце div
// - afterend -  вставяет выбраный елемент после div