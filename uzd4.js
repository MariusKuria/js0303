// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

function rand(x) {
    for (let i = 1; i <= x; i++) {
        console.log(Math.floor(Math.random() * 10 + 1))
    };
    return ''
};
console.log(rand(5));

//return Math.floor(Math.random() * (max - min + 1) + min);