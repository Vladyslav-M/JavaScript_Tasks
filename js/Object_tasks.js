"use strict";
// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const PersonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        this.count = prompt("Сколько фильмов вы уже посмотрели?","");
    
        while (this.count == '' || this.count == null || isNaN(this.count)){
            this.count = prompt("Сколько фильмов вы уже посмотрели?","");
        }
     },
    ViewedFilms: function(){
        if (this.count < 10 && this.count){
           alert("Просмотрено мало фильмов");
        }
     
        else if (this.count < 30 && this.count > 9) {
           alert("Вы классический зритель");
        }
     
        else if (this.count == "" || this.count == null){
           alert("Произошла ошибка");
        }
     
        else {
           alert("Вы киноман");
        }
    },
     rememberMyFilms: function(){
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
           this.movies[a] = b;
           
        }
     },
     
      showMyDB: function(hidden){
        if (!hidden){
           console.log(PersonalMovieDB);
        }
     },
     writeYourGenres: function(){
        for (let i = 1; i <=3; i++){
           let genre = prompt(`Ваш любимый жанр под номером ${i}`);
           if (genre == '' || genre == null){
               console.log('lalalala');
               i--;
           }
           else {
            PersonalMovieDB.genres[i - 1] = genre;
           }
           
        }

        PersonalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
     },

     toggleVisibleMyDB: function(){
        if (this.privat){
            this.privat = false; 
        }
        else {
            this.privat = true;
        }
        console.log(PersonalMovieDB);
     },

 };

//  PersonalMovieDB.start();
//  PersonalMovieDB.ViewedFilms();
//  PersonalMovieDB.rememberMyFilms();
//  PersonalMovieDB.showMyDB();
 PersonalMovieDB.writeYourGenres();
//  PersonalMovieDB.toggleVisibleMyDB();
//  console.log(PersonalMovieDB);


