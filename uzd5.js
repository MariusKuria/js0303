// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.(7 taškai)

let number = 0;
while (number != 5) {
    number = Math.floor(Math.random() * 10 + 1);
    console.log(number);
};

//return Math.floor(Math.random() * (max - min + 1) + min);