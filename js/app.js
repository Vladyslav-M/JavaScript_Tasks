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



 


