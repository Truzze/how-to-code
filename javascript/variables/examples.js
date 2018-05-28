// == Aufgabe 1 ==========
// a) Erstell die Variable name
// b) Weise der Variable name deinen Vornamen als String zu.

let name;
name = "Mike";

// == Aufgabe 2 ==========
// a) Erstell eine Variable mit dem Namen lastname und weise dieser deinen Nachnamen als String zu.

let lastname = "Pancake";


// == Aufgabe 3 ==========
// a) Erstell eine Variable mit dem Namen fullname
// b) Weise der Variable den Inhalt beider Variablen name und lastname zu.
// c) Füge einen Abstand zwischen den Vornamen und dem Nachnamen hinzu.

let fullname = name + " " + lastname;


// == Aufgabe 4 ==========
// a) Erstell eine Variable mit dem Namen greeting
// b) Weise der Variable den folgenden String zu "Hallo mein Name ist Max Musterman." (Anstatt "Max Musterman" den Inhalt der variable fullname)

let greeting = "Hallo mein Name ist " + fullname + ".";


// == Aufgabe 5 ==========
// a) Erstell eine Variable mit dem Namen age
// b) Weise der Variable dein Alter als Zahl (nicht als String) zu.

let age = 21;


// == Aufgabe 6 ==========
// a) Erweitere die Variable greeting mit dem folgenden String " Ich bin X Jahre alt." (Anstatt "X" den Inhalt der Variable age)

greeting = greeting + " Ich bin " + age + " Jahre alt.";


// == Aufgabe 7 ==========
// a) Erhöhe die Variable age um 1.

age++;
// age = age + 1;
// age += 1;


// == Aufgabe 8 ==========
// a) Erweitere die Variable greeting mit dem folgenden String " Bis Ich X Jahre alt bin, möchte Ich vollwertiger Javascript Entwickler sein." (Anstatt "X" den Inhalt der Variable age)
// b) Verwende die Shorthand variante um die Variable greeting zu Erweitern

greeting += " Bis Ich " + age + " Jahre alt bin, möchte Ich vollwertiger Javascript Entwicklet werden.";


// == Aufgabe 9 ==========
// a) Log die Variable greeting zur Console mit der Funktion console.log(X) (Anstatt "X" den Namen der Variable)

console.log(greeting);