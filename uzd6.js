// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, 
// NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let array = [];
let newArray = [];

for (let i = 0; i < getRandomIntInclusive(20, 30); ++i) {
    array[i] = getRandomIntInclusive(10, 30);
    newArray.push(array[i]);
}

newArray = newArray.sort();  //be sort nesigauna!!!!
let max = newArray[0];
for (let i = 1; i < newArray.length; i++) {
    if (max < newArray[i]) {
        max = newArray[i];
    }
}
console.log('Maksimalus skaicius = ', max);
