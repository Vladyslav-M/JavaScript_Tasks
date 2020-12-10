 "use strict";
 let hello = alert("Hello!");
 let NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

 let PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
 };

 //  А теперь с помощью цикла for

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

let num = 13.2;
console.log(Math.round(num));

let num = "15.5px";
console.log(parseInt(num)); // округляет + преобразовует в число 
console.log(parseFloat(num)); 



 


