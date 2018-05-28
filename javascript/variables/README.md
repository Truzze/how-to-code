# Variablen

Eine Variable ist ein Behälter welcher einen gewünschten Wert halten kann. Sie kann dafür benutzt werdem um einen String (Zeichenkette) oder eine Zahl zu halten. Aber auch Arrays, Funktionen, Objekte und vieles mehr. Eine Variable wird in Javascript durch ein Vorwort (var, let oder const) folgend von dem gewünschten Namen definiert.

```Javascript
// 3 Möglichkeiten die Veriable name zu definieren
var name;
let name;
const name;
```

| statement | Beschreibung |
| :-------: | ------------ |
| ``var`` | Die in ES6 (ECMAScript 2015) veraltete variaten eine Variable zu definieren. Sollte in neuem Javascript immer durch ``let`` oder ``const`` ersetzt werden. [Weitere Informationen](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/var) |
| ``let`` | Definiert eine Variable im Gültigkeitsbereich des lokalen Blocks. Kann innerhalb eines anderen Gültigkeitsbereichs neu definiert oder auch überschrieben werden. [Weitere Informationen](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/let) |
| ``const`` | Definiert eine Konstante Variable. Gleich wie bei der ``let``-Deklaration ist der Gültigkeitsbereich auf den lokalen Block begrenzt. Sie kann nicht innerhalb des Gültigkeitsbereich überschrieben oder verändert werden. [Weitere Informationen](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/const) |

Einer Variable kann beim Definieren auch gleich ein Wert zugewiesen werden. Hierfür wird nach dem Vorwort und dem Namen der Variable durch ein Gleichheitszeichen (=) ein Wert wie z.b. einen String oder eine Nummer zugewiesen.

```Javascript
// Direkte zuweisung eines Wertes nach dem definierung einer Variable
let name = "Mike";
let age = 21;

// Weitere möglichkeit: Variable definieren und später Wert zuweisen
let name;
let age;

name = "Mike";
age = 21;
```

**Durch das einzelne Gleichheitszeichen (=) wird in Javascript etwas zugewiesen. Weitere Möglichkeiten sind 2 (==) oder auch 3 (===) hintereinander liegende Gleichheitszeichen, diese sind um Werte zu vergleichen.**

---
### Verwendung von Operatoren beim Definieren einer Variable
Einer Variable kann auch das Ergebnis einer Rechnung oder Funktion zugewiesen werden.

```Javascript
let a = 1 + 1; // 2
let b = 5 - 4; // 1
let c = 5 * 5; // 25
let d = 10 / 2; // 5

// Oder auch mehr Komplexe Rechnungen
let e = 3 * (2 + 5); // 21
```

Einer Variable kann auch der Wert einer anderen Variable oder der eigene Wert zugewiesen werden.

```Javascript
let a = 5;
let b = a + 5; // 10
let c = a + b; // 15

// Variable das Ergebnis einer Rechnung mit dem eigenen Wert zuweisen
a = a + 1; // 6
b = b - a; // 4
```

**Shorthand** um das Ergebnis einer Rechnung mit dem eigenen Wert oder dem Wert einer anderen Variable zuweisen zu können.

```Javascript
let a = 5;
let b = 10;

a += 1; // 6
// Gleich wie: a = a + 1;

b -= a; // 4
// Gleich wie: b = b - a;
```

Wenn eine Variable nur um 1 erhöht oder verkleinert werden muss, kann auch eine weitere **Shorthand** variante angewendet werden.

```Javascript
let a = 1;
let b = 5;

a++; // 2
b--; // 4
```

---

### Erweitern einer String Variable

Eine Variable welcher ein String zugewiesen wurde, kann durch das Plus (+) Zeichen Erweitert (concatenated/verkettet) werden.

```Javascript
let sentence = "Mein Name ist " + "Mike Pancake."; // Mein Name ist Mike Pancake.
```

Ein String kann auch mit dem Wert einer Variable erweitert werden.

```Javascript
let name = "Mike";
let lastname = "Pancake";
let fullname = name + " " + lastname;

let sentence = "Hallo mein Name ist " + fullname + "."; // Hallo mein Name ist Max Musterman.
```

Die String Variable kann auch mit dem Wert einer Int (Zahl) Variable erweitert werden.

```Javascript
let name = "Mike Pancake";
let age = 21;
let sentence = "Hallo mein Name ist " + name + ", Ich bin " + age + " Jahre alt."; // Hallo mein Name ist Max Musterman, Ich bin 21 Jahre alt.
```
