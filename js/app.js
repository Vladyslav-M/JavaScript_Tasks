 "use strict";

 let hello = alert("Hello!");
 let NumberOfFilms;

 function start(){
    NumberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");

    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)){
      NumberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");
    }
 }

 start();

 let PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
 };

 //  А теперь с помощью цикла for

function rememberMyFilms(){
   for (let i = 0; i < 2; i++){
      const
      a = prompt("Один из последних просмотреных фильмов?", ""),
      b = +prompt("На сколько оцените его?", "");
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         console.log('dates saved!');
      }
      else {
         i--;
      }
      PersonalMovieDB.movies[a] = b;
      
   }
}

rememberMyFilms();

 console.log(PersonalMovieDB);




 function ViewedFilms(){
   if (PersonalMovieDB["count"] < 10 && PersonalMovieDB["count"]){
      alert("Просмотрено мало фильмов");
   }

   else if (PersonalMovieDB["count"] < 30 && PersonalMovieDB["count"] > 9) {
      alert("Вы классический зритель");
   }

   else if (PersonalMovieDB["count"] == "" || PersonalMovieDB["count"] == null){
      alert("Произошла ошибка");
   }

   else {
      alert("Вы киноман");
   }
 }

 ViewedFilms();


 let str = "test";
 let word = "ATTENTION";
 let text = "Some programm text";
 console.log(str.toUpperCase());
 console.log(word.toLowerCase());
 console.log(word.indexOf("O"));
 console.log(text.slice(5, 13));
 console.log(text.slice(14));
 console.log(text.substring(14));
 console.log(text.substr(5, 8)); // Первый параметр указывает нам позицию, с которой мы начинаем вырезать текст, второй = кол-во символов, сколько мы хотим вырезать

let num1 = 13.2;
console.log(Math.round(num1));

let num2 = "15.5px";
console.log(parseInt(num2)); // округляет + преобразовует в число 
console.log(parseFloat(num2)); 

function showMyDB(hidden){
   if (!hidden){
      console.log(PersonalMovieDB);
   }
}

showMyDB(PersonalMovieDB.privat);


function inputGenres(){
   for (let i = 1; i <=3; i++){
      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      PersonalMovieDB.genres[i - 1] = genre;
   }
}

inputGenres();


// Callback - functions 

function learnJS(lang, callback){
   console.log(`Я учу ${lang}`);
   callback();
}

learnJS('JavaScript', function(){
   console.log('Я прошел этот урок!');
}, 900);


// Операторы Object

const options = {
   name: 'test',
   width: 1024,
   height: 720,
   colors: {
      border: 'black',
      bg: 'red',
   },
   makeTest: function() {
      console.log("Test");
   }
}

delete options.name; // Удаляет первое свойство в об'екте
console.log(options);
let counter = 0;
for (let key in options){
   if (typeof(options[key]) === 'object') {
      for (let i in options[key]){
         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
         counter++;
      }
   }

   else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`); // Возвращает все ключ-значения в об'екте
      counter++;
   }
   
   
}
console.log(counter);

console.log(Object.keys(options)); // Создает массив из ключей выбранного об'екта
console.log(Object.keys(options).length); // Считает кол-во ключей об'екта

options.makeTest();


// Деструктуризация об'ектов 

const {border, bg} = options.colors; // Позволяет нам вытащить свойство из вложенных об'ектов
console.log(border); 


// Массивы 
let arr = [2, 5, 7, 12, 35, 4]

arr.pop(); // Удаляет последний елемент в массиве
arr.push(8); // Добавляет елемент 8 в конец массива
console.log(arr);
 


for (let i = 0; i < arr.length; i++){ // Перебираем все елементы в массиве
   console.log(arr[i]);
}

for (let value of arr){
   console.log(value);
}


arr.forEach(function(item, i, arr){   // item -елемент, который мы перебираем; i - номер по порядку; arr - ссылка на массив, который мы перебираем
   console.log(`${item}: ${i} внутри массива ${arr}.`);
});

let mas = prompt("", "");
let products = mas.split(", ");
console.log(products.join('; '));
arr.sort();  // Сортирует, как строки, числа по-алфавиту



const firstObj = {
   a: 10,
   b: 15,
}; 

const firstObjCopy = firstObj;

firstObjCopy.a = 20;
console.log(firstObjCopy); // { a: 20, b: 15 } Идет передача по ссылке
console.log(firstObj); // { a: 20, b: 15 }


function copyObj(mainObj){
   let CloneObj = {};
   let key;
   for (key in mainObj){
      CloneObj[key] = mainObj[key];
   }
   return CloneObj;
}

const numbers = {
   a: 10,
   b: 4,
   c: 6,
   d: {
      e: 5,
      f: 17,
   }
}

const copyNumbers = copyObj(numbers);
copyNumbers['a'] = 7;
copyNumbers['d']['f'] = 14;
console.log(numbers);
console.log(copyNumbers); // Произошло поверхностное копирование numbers

const add = {
   g: 53,
   k: 124,
   j: {
      x: 77,
      y: 61,
   }
}

const clone = Object.assign({}, add); // клонирует данные из add в clone
clone['k'] = 33;
clone['j']['x'] = 45;
console.log(clone);
console.log(add);



// Spread метод

const browsers = ['Internet Explorer', 'Chrome', 'Firefox'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...browsers, ...blogs, 'vk', 'facebook'];

      console.log(internet);


function log(a, b, c){
   console.log(a);
   console.log(b);
   console.log(c);
}      

const threeParams = [2, 4, 6];
log(...threeParams);

const oldObj = {
   one: 1,
   two: 2,
},
newObj = {...oldObj}
newObj['one'] = 0;
newObj['two'] = 1;
console.log(oldObj);
console.log(newObj);

// Об'ективно-ориентированное наследование

const soldier = {
   health: 400,
   armor: 100,
   sayHello: function(){
      console.log("Hello");
   },
};

const John = {
   health: 100,
};

// John.__proto__ = soldier; // Это устаревший способ, его не рекоммендуется использовать
// console.log(John.armor);

Object.setPrototypeOf(John, soldier); // Устанавливает прототип soldier для John

console.log(John.armor);


const car = {
   wheels: 4,
   doors: 4,
   trunk: true,
}

const myCar = Object.create(car); // Создает об'ект и присваевает ему car как "родительский" елемент
console.log(myCar.wheels);

console.log(false + [] - null + true);

// Задачки на понимание

let y = 1;
let x = y = 2; // присваивание справа налево 
console.log(x); // 2

console.log([] + 2 + 1); // 21, пустой массив преобразовуется в строку

console.log("Ivan Sasha Misha"[11]); // M

console.log("1" && "2" && null && 0 && undefined); // null, && запинается на лжи

console.log(!!(2 && 3) === (2 && 3)); // false, в первом случае будет ответ true, а во втором - 3

console.log(null || 2 && 3 || "1" || undefined); // Ответ - 3. Также у И приоритет выше, чем у И

console.log("Ёжик" > "яблоко"); // false, смотреть таблицу символов 0Юникода

console.log(+"Infinity" + +"2");

// Получение елементов со страницы

let button = document.querySelector(".intro__btn");
console.log(button);

let links = document.getElementsByTagName("a");
console.log(links);

console.log(links[1]); // Выведет второй елемент массива links

// Также мы не можем напрямую взаимодействовать с елементом массива, стилизовать его, даже если он один в массиве

let circles = document.getElementsByClassName('circle');

console.log(circles);

let squares = document.querySelectorAll('.square'); // Внутрь помещается css - селектор, поддержиет id, class, вложенные елементы, псевдоелементы, лучше всего использовать именно 
// эту комманду для получения елементов со страницы, также у него есть метод ForEach
squares.forEach(item => {
console.log(item);
});

let oneSquare = document.querySelector('.square'); // выводится первый елемент с html документа
console.log(oneSquare);

console.dir(oneSquare);

// действия с елементами на странице

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


