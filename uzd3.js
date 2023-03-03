// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.(5 taškai)

function kasAntras(x) {
    for (let i = 0; i <= x; i++) {
        if (i === 0) {
            console.log(i)
        } else if (i % 2 === 0) { console.log(i) }
    }; return ''
};
console.log(kasAntras(10));