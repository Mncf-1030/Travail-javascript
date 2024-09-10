// Exercice 1: Variables

const monPrenom = "Moncef";
let monAge = 19;

console.log(monPrenom);
// alert(monAge)

console.log(30 * monAge);
// alert(45 * monAge);


let num1 = "8"
let num2 = "6"
console.log("num1 est " + num1);
console.log("num2 est " + num2);

// Exercice 2: Data-types

console.log(typeof num1);
console.log(typeof monPrenom);

// Exercice 3: Strings

let chaussure = "bottes"
console.log(chaussure.length);

console.log(chaussure[2]);
console.log(chaussure[0]);
console.log(chaussure.slice(0,2));
console.log(chaussure.replace("t", "i"));

console.log(`hello je m'appelle ${monPrenom} et j'ai actuellement ${monAge} ans `);
console.log(chaussure.toUpperCase());
console.log(monPrenom.toLowerCase());
console.log(chaussure.indexOf());
console.log(chaussure.lastIndexOf());
console.log(chaussure.trim());

// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
console.log(message.toLowerCase().trim());
console.log(chaussure.lastIndexOf());
console.log(chaussure.charAt());
console.log(chaussure.substring());
console.log(chaussure[chaussure.length - 1]);

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialhair = word.replace("o","e")
console.log(facialhair);

// Exercice 4: Numbers


let op1 = 5
let op2 = 7
console.log(op1 + op2);
console.log(Math.round(8.5435242));
console.log(Math.round(8.1235455));
console.log(Math.floor(8.5435242));
console.log(Math.ceil(6.12));

let op3 = Math.floor(Math.random() * 10)+ 1 ;
console.log(op3);

let op4 = 9.5165454
console.log(op4.toFixed(2));

console.log(4 * "4");
console.log("3" + "9");

let op5 = "7.2542";

console.log(parseFloat(op5));
console.log(parseInt(op5));


const ville = "Bruxelles";
let climat = "pluvieux";
let temperature = 17.569856;

const presentationMeteo = `Voici la météo à ${ville}. le climat y est ${climat} et il y fait ${parseInt(temperature)} degrés `

console.log(presentationMeteo);

// let nom = prompt("Quel est ton nom?")
// alert(`Bienvenu(e) ${nom}`)

// let age1 = prompt("quel age as-tu?")
// let adresse = prompt("tres bien et d'ou est ce que tu viens?")
// alert(`Ok donc si je résume bien tu t'appelles ${nom}, tu as ${age1} et tu vies à ${adresse}. Bon à savoir`)


// typeof 5; // Returns number
// typeof 7.34659; // Returns number
// typeof "17"; // Returns string
// let myNumber = 79;
// typeof myNumber; // Returns number
// 5 + 7; // Returns 12
// 3 * 6; // Returns 18
// 6 / 3; // Returns 2
// 19 - 7; // Returns 12
// 2 ** 2; // (2 by the power of 2) Returns 4
// 2 ** 4; // (2 by the power of 4) Returns 16
// 5 % 2; // (remainder of the division of 5 / 2) Returns 1
// ////
// let num1 = 4;
// let num2 = 12;
// (num1 + num2) / 2; // Returns 8


// Exercice 5: booleans

let a = 4 > 7;
console.log(a);

let c = 7
let b = 9
let e = 2
let f = 3

console.log(c > b || e > f);
console.log(c < b && e < f);

// question a = True
// question b = True
// question c = True
// question d = False
// question e = False
// question f = True


// question 1 = true
// question 2 = true
// question 3 = true
// question 4 = true

// Exercice 6: conditionals



let age = 19;
if (age < 18) {
  alert(`Hey ${monPrenom}, sorry... you are too young to get in`);
} else if (age > 80) {
  alert(`Come on ${monPrenom} ! You are too old ! Get back to sleep !`);
} else {
  alert(`Hey there ${monPrenom} ! Enter and make yourself confortable`);
}


let tonNom = prompt("Tu t'appeles comment?")
let animal = prompt("et tu préferes les chats ou les chiens?")

if (animal === "les chats") { alert("Bof hein")
    
} else {
  alert("Moi aussi!")
}


let couleurViolet = "violet"
let couleurVert = "vert"

let fruit = prompt("quel est ton fruit préferer?")
if (fruit === "banane") {
    alert("trop bien moi aussi")
} else if(fruit === "fraise"){
    alert("pas mon délire mais ok")
} else if(fruit === "raisin"){
    alert(prompt("quel type de raisin?"))
} else if(fruit === couleurViolet){
    alert("j'aime pas ceuxx la")
} else if(fruit === couleurVert){
    alert("je suis d'accord ceux la sont bon")
} else(alert("j'ai pas compris"))










