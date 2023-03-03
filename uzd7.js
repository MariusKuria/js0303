// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
// Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

const randomNo = () => Math.floor((Math.random()) * 4);

function raides100() {
    let letterArray = [];
    const letetrs = ['A', 'B', 'C', 'D'];
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    for (i = 1; i <= 100; i++) {
        if (randomNo() == 0) { letterArray.push(letetrs[0]); a++ }
        else if (randomNo() == 1) { letterArray.push(letetrs[1]); b++ }
        else if (randomNo() == 2) { letterArray.push(letetrs[2]); c++ }
        else { letterArray.push(letetrs[3]); d++ }
    }
    return ` Raidziu kiekis siame masyve => [${letterArray}] yra sekantis: A = ${a}; B = ${b}; C = ${c}; D = ${d};`
}
console.log(raides100());

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);