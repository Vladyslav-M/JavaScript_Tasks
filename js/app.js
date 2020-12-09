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
 const
     a = prompt("Один из последних просмотреных фильмов?", ""),
     b = +prompt("На сколько оцените его?", ""),
     c = prompt("Второй из последних просмотреных фильмов?", ""),
     d = +prompt("На сколько оцените его?", "");
    
 PersonalMovieDB.movies[a] = b;
 PersonalMovieDB.movies[c] = d;

 console.log(PersonalMovieDB);


