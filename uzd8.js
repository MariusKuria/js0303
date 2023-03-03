// 8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti 
// arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.
// Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(a, b) {
    const d = a + b;
    const e = a.length + b.length;
    if (typeof a === typeof b && typeof a === 'number') {
        if ((d) % 2 === 0) { return d } else { return `${d}, suma nelygine` }
    } else if (typeof a === typeof b && typeof a === 'object') {
        if ((e) % 2 === 0) { return e } else { return `${e}, suma nelygine` }
    } else { return 'Wrong input' }
}

console.log(lygineSuma(50, 6));

