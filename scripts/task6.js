'use strict';

let text = 'Потом Филип подошел к ее сестре и простился с ней Одна из незнакомых дам спросила можно ли ей тоже его поцеловать и он степенно разрешил У него хоть и текли слезы но ему очень нравилось что он причина такого переполоха он с удовольствием побыл бы еще чтобы его опять приласкали но почувствовал что мешает и сказал что Эмма наверно его дожидается Мальчик вышел из комнаты';
let arrText = text.split(" ");

let words = {};

arrText.forEach( word => {
    if(words[word]) {
        words[word]++;
    } else {
        words[word] = 1;
    }
});

let newArr = [];

let wordsLength = Object.keys(words).length;

for(let i = 0; i < wordsLength; i++) {

    let key;
    let max = 0;

    Object.keys(words).forEach(word => {

        if( words[word] > max ) {
            max = words[word];
            key = word;
        }
    });

    newArr.push(key);
    delete words[key];
}

console.log(newArr);

