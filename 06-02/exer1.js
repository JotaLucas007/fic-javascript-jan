/*
    - Armazene a palavra 'Tom' em uma let "tom";
    -Armazene a palavra 'Hanks' em uma let "firstTom";
    -Armazee a palavra 'Cruise' em uma let "secondTom"
    -Declare uma let "myFavoriteTom" que recebe nome, 
      espaço, o sobrenome do Tom que você mais gosta;
    - Exiba a "myFavoriteTom" no console do browser.
*/

let tom = "Tom";
let firstTom = "Hanks";
let secondTom = "Cruise";

// let myFavoriteTom = ' tom + ' ' + firstTom + ' ' + secondTom;
let myFavoriteTom = `${tom} + ' ' + ${firstTom} + ' ' + ${secondTom}`;
console.log(myFavoriteTom);
