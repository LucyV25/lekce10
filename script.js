/*const jmeno = "Michal"
//       012345
const jmenoPole = ["M", "i", "c", "h", "a", "l"]
//            0    1    2    3    4    5

console.log(jmenoPole[2])
console.log(jmenoPole[5])

console.log(jmeno[2])
console.log(jmeno[5])

const teploty = [10, 11, 12, 15, 20.2, 25, 31.3, 20, 15, 5, -10]

console.log(teploty[3])

const mesta = [
    ["Praha", 1000000], // 0
    //  0         1
    ["Brno", 300000], // 1
    //  0        1
    ["Ostrava", 100000] // 2
    //  0        1
]

console.log(mesta[1][1])
console.log(mesta[2][0])

const knihy = [
    {nazev: "Kniha 1", cena: 100, jazyk: "CZ"},
    {nazev: "Kniha 2", cena: 200, jazyk: "CZ", naSklade: true, rozvoz: true},
    {nazev: "Kniha 3", cena: 300, jazyk: "CZ"}
]

const kniha = ["Kniha 1", 200, "CZ", 16000, true, true]

console.log(knihy[2].nazev)
const teploty = [10, 11, 12, 15, 20.2, 25, 31.3, 20, 15, 5, -10]

console.log(teploty.length)
console.log(teploty.reverse()) // obraceni pole

teploty.push(100) // prida prvek na konec pole
console.log(teploty)

teploty.pop() // smaze posledni prvek v poli
console.log(teploty)

teploty.unshift(200) // prida prvek na zacatek pole
console.log(teploty)

teploty.shift() // smaze prvni prvek v poli
console.log(teploty)

teploty.sort((a, b) => a - b) // seradi pole
console.log(teploty)

const jmena = ["Michal", "Jana", "Martina"]

console.log(jmena.join(",")) // spoji hodnoty a vytvori jeden retezec

const jmena2 = ["Michal", "Jana", "Martina"]

const vsechnaJmena = jmena.concat(jmena2) // spoji dve pole dohromady

console.log(vsechnaJmena)

console.log(vsechnaJmena.indexOf("Michal")) // najde a vrati prvni index hledane hodnoty
const knihy = [
    {nazev: "Kniha 1", cena: 100, jazyk: "CZ"},
    {nazev: "Kniha 2", cena: 200, jazyk: "CZ"},
    {nazev: "Kniha 3", cena: 300, jazyk: "CZ"},
    {nazev: "Kniha 4", cena: 400, jazyk: "CZ"},
    {nazev: "Kniha 5", cena: 500, jazyk: "CZ"},
    {nazev: "Kniha 6", cena: 600, jazyk: "CZ"},
    {nazev: "Kniha 7", cena: 700, jazyk: "CZ"},
    {nazev: "Kniha 8", cena: 800, jazyk: "CZ"},
    {nazev: "Kniha 9", cena: 900, jazyk: "CZ"},
    {nazev: "Kniha 10", cena: 1000, jazyk: "CZ"},
    {nazev: "Kniha 11", cena: 1100, jazyk: "CZ"},
    {nazev: "Kniha 12", cena: 1200, jazyk: "CZ"},
    {nazev: "Kniha 13", cena: 1300, jazyk: "CZ"},
    {nazev: "Kniha 14", cena: 1400, jazyk: "CZ"},
    {nazev: "Kniha 15", cena: 1500, jazyk: "CZ"},
    {nazev: "Kniha 16", cena: 1600, jazyk: "CZ"},
    {nazev: "Kniha 17", cena: 1700, jazyk: "CZ"},
    {nazev: "Kniha 18", cena: 1800, jazyk: "CZ"},
    {nazev: "Kniha 19", cena: 1900, jazyk: "CZ"},
    {nazev: "Kniha 20", cena: 2000, jazyk: "CZ"},
    {nazev: "Kniha 21", cena: 2100, jazyk: "CZ"},
    {nazev: "Kniha 22", cena: 2200, jazyk: "CZ"},
    {nazev: "Kniha 23", cena: 2300, jazyk: "CZ"},
    {nazev: "Kniha 24", cena: 2400, jazyk: "CZ"},
    {nazev: "Kniha 25", cena: 2500, jazyk: "CZ"},
    {nazev: "Kniha 26", cena: 2600, jazyk: "CZ"},
    {nazev: "Kniha 27", cena: 2700, jazyk: "CZ"},
    {nazev: "Kniha 28", cena: 2800, jazyk: "CZ"},
    {nazev: "Kniha 29", cena: 2900, jazyk: "CZ"},
    {nazev: "Kniha 30", cena: 3000, jazyk: "CZ"}
]

knihy.forEach(item => {
    document.body.innerHTML += `
    <h2>${item.nazev}</h2>
    <p>Cena: ${item.cena}, Jazyk: ${item.jazyk}</p>
    `
})





const napoje = [
    { nazev: 'Pivo', cena: 12, skladem: true },
    { nazev: 'Rum', cena: 120, skladem: false },
    { nazev: 'Víno', cena: 85, skladem: true },
    { nazev: 'Whisky', cena: 450, skladem: true },
    { nazev: 'Vodka', cena: 280, skladem: false },
    { nazev: 'Becherovka', cena: 210, skladem: true },
    { nazev: 'Kofola', cena: 40, skladem: true },
    { nazev: 'Voda', cena: 15, skladem: false },
]

// ["Pivo", "Rum", "Vino"]

const pojmenovaniNapoju = napoje.map(polozka => polozka.nazev)
const pojmenovaniNapoju2 = napoje.map(function(polozka) { 
    return polozka.nazev
})

console.log(pojmenovaniNapoju)



const selectSmiley = (event) => {
    event.target.classList.add('btn-smiley--selected');
};

const btns = document.querySelectorAll(".btn-smiley")

btns.forEach(btn => { btn.addEventListener("click", selectSmiley) })

// Jeste kratsi varianta - document.querySelectorAll(".btn-smiley").forEach(btn => { btn.addEventListener("click", selectSmiley) })
*/
/*
//Pole v divadle
// Vytvoření pole s počty diváků
let divaci = [150, 200, 175, 160, 180]; // Pole s počty diváků na několika představeních

// Přidání počtu diváků na nové představení
divaci.push(190); // Příklad: na novém představení bylo 190 diváků

// Výpis pole do konzole pro kontrolu
console.log(divaci);
// Vytvoření pole s desetinnými čísly (zaplněnost divadla v procentech)
let zaplnenost = [0.75, 0.85, 0.90, 0.65, 0.80]; // Zaplněnost pro několik představení

// Odstranění poslední hodnoty v poli
zaplnenost.pop();

// Výpis pole do konzole pro kontrolu
console.log(zaplnenost);
// Vytvoření pole řetězců s názvy divadelních představení
let plays = ["Hamlet", "Romeo a Julie", "Král Lear", "Othello", "Macbeth"];

// Uložení druhé položky z pole do nové proměnné
let secondPlay = plays[1];

// Výpis obou proměnných do konzole pro kontrolu
console.log(plays);         // Výpis celého pole
console.log(secondPlay);    // Výpis druhé položky
// Vytvoření pole recenzí pro divadelní hru Plyšáci na útěku
let reviews = [
    { magazine: "Divadelní recenze", rating: 8 },
    { magazine: "Kritikův výběr", rating: 7 },
    { magazine: "Kulturní měsíčník", rating: 9 },
    { magazine: "Recenze dnes", rating: 6 },
    { magazine: "Umělecký přehled", rating: 8 }
];

// Výpis pole do konzole pro kontrolu
console.log(reviews);


//Práce s indexy
// Funkce first - Vrátí první prvek pole nebo undefined, pokud je pole prázdné
function first(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}

// Testy pro funkci first
console.log(first([3, 2, 1])); // ⟶ 3
console.log(first([])); // ⟶ undefined


// Funkce last - Vrátí poslední prvek pole nebo undefined, pokud je pole prázdné
function last(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

// Testy pro funkci last
console.log(last([3, 2, 1])); // ⟶ 1
console.log(last([])); // ⟶ undefined


// Funkce middle - Vrátí prvek uprostřed pole, nebo undefined, pokud je pole prázdné
// Pokud je počet prvků sudý, vrátí prvek vlevo od středu
function middle(arr) {
    if (arr.length === 0) return undefined;
    const middleIndex = Math.floor((arr.length - 1) / 2);
    return arr[middleIndex];
}

// Testy pro funkci middle
console.log(middle([3, 2, 1])); // ⟶ 2
console.log(middle([3, 2, 1, 0])); // ⟶ 2
console.log(middle([])); // ⟶ undefined


// Funkce middleMean - Vrátí prvek uprostřed pole, nebo undefined, pokud je pole prázdné
// Pokud je počet prvků sudý, vrátí průměr dvou středních prvků
function middleMean(arr) {
    if (arr.length === 0) return undefined;
    const middleIndex = Math.floor((arr.length - 1) / 2);

    // Pokud je počet prvků sudý, vrátí průměr dvou prostředních prvků
    if (arr.length % 2 === 0) {
        return (arr[middleIndex] + arr[middleIndex + 1]) / 2;
    } else {
        return arr[middleIndex];
    }
}

// Testy pro funkci middleMean
console.log(middleMean([3, 2, 1])); // ⟶ 2
console.log(middleMean([3, 2, 1, 0])); // ⟶ 1.5
console.log(middleMean([])); // ⟶ undefined


// Funkce insert - Zkontroluje, zda pole obsahuje danou hodnotu
// Pokud ne, vloží hodnotu na konec pole a vrátí true, jinak vrátí false
function insert(arr, value) {
    if (arr.includes(value)) {
        return false;
    } else {
        arr.push(value);
        return true;
    }
}

// Testy pro funkci insert
const arr1 = [3, 2, 1];
console.log(insert(arr1, 4)); // ⟶ true (pole bude [3, 2, 1, 4])
console.log(arr1); // Pro kontrolu obsahu po přidání

console.log(insert(arr1, 3)); // ⟶ false (hodnota 3 už v poli je)
console.log(arr1); // Pole zůstane beze změny

*//*
//Počítání oveček
// Pole s jmény oveček
const ovciJmena = [
    'Bětuška',
    'Cína',
    'Dolly',
    'Heidy',
    'Líza',
    'Belinda',
    'Celia',
    'Elvíra',
    'Karla',
    'Otýlie',
    'Škraboška',
    'Kopretinka',
    'Berta',
    'Růženka',
    'Bobinka',
    'Žofka',
    'Dášenka',
    'Vlnka',
    'Květuše',
    'Pampeliška',
  ];
  
  // Získáme element, kam budeme vkládat příběh
  const storyElement = document.querySelector("#story");
  
  // Funkce pro vygenerování příběhu
  function countSheep() {
      // Použijeme forEach k vygenerování vět
      ovciJmena.slice(0, 10).forEach((jmeno, index) => {
          // Vytvoření věty pro každou ovečku
          const veta = `Ovečka ${jmeno} jako ${index + 1}. přeskočila přes plot.`;
          
          // Vložení věty do divu na stránce
          const pElement = document.createElement('p');
          pElement.textContent = veta;
          storyElement.appendChild(pElement);
      });
  }
  
  // Zavoláme funkci pro vytvoření příběhu
  countSheep();
  

  //Metody forEach a map
  const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
const zvirata = [
  'pes',
  'kočka',
  'králík',
  'had',
  'andulka',
  'morče',
  'krkavec',
];
const napoje = [
  { nazev: 'Pivo', cena: 12, skladem: true },
  { nazev: 'Rum', cena: 120, skladem: false },
  { nazev: 'Víno', cena: 85, skladem: true },
  { nazev: 'Whisky', cena: 450, skladem: true },
  { nazev: 'Vodka', cena: 280, skladem: false },
  { nazev: 'Becherovka', cena: 210, skladem: true },
  { nazev: 'Kofola', cena: 40, skladem: true },
  { nazev: 'Voda', cena: 15, skladem: false },
];
// 1. Vytvořte nové pole, které bude obsahovat všechna čísla z pole cisla vynásobená dvěma.
const cislaVynasobenaDvou = cisla.map((cislo) => cislo * 2);
console.log("Čísla vynásobená dvěma:", cislaVynasobenaDvou);
const delkyZvirat = zvirata.map((zvire) => zvire.length);
console.log("Délky názvů zvířat:", delkyZvirat);
const nazvyNapoju = napoje.map((napoj) => napoj.nazev);
console.log("názvy nápojů:", nazvyNapoju);
const sklademNapoj = napoje.map((napoj) => napoj.skladem ? napoj.nazev : "Není skladem");
console.log("Dostupnost nápojů:", sklademNapoj);
*/
//Nezaplacené objednávky
// Pole pro identifikátory a emaily
const identifikatory = [];
const emaily = [];

// Předpokládáme, že nezaplaceneObjednavky obsahují objednávky ve formátu výše
const nezaplaceneObjednavky = [
  {
    id: 123,
    zakaznik: {
      jmeno: "Jan Novák",
      email: "jan.novak@email.cz"
    }
  },
  {
    id: 456,
    zakaznik: {
      jmeno: "Petr Černý",
      email: "petr.cerny@email.cz"
    }
  }
];

// Použití map pro získání identifikátorů a e-mailů
// 1. Pole identifikátorů
identifikatory.push(...nezaplaceneObjednavky.map((objednavka) => objednavka.id));

// 2. Pole emailů ve formátu "Jméno <jmeno@server.cz>"
emaily.push(...nezaplaceneObjednavky.map((objednavka) => `${objednavka.zakaznik.jmeno} <${objednavka.zakaznik.email}>`));

// Výstupy pro kontrolu
console.log("Identifikátory:", identifikatory);
console.log("Emaily:", emaily);

// Tady by následovalo volání předpřipravených funkcí
processEmails(emaily);
processIdentifiers(identifikatory);
