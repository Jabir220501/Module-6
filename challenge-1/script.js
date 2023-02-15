let myName = "Jabir";
let myAge = 17;
let myHairColor = "Zwart";
let leeg = undefined;
let seven_zeven = "a";
let nul = null;
// hierboven staan alle initiële variabelen

// Opdracht 8
let myBirthyear = 2005;

document.write(`uitkomst van vraag 8.1: ${myAge * 1} <br>`);
document.write(`uitkomst van vraag 8.2: ${myAge * myBirthyear} <br>`);
document.write(
  `uitkomst van vraag 8.3: ${Math.ceil(myBirthyear / myAge)} <br>`
);

document.write(
  `uitkomst van vraag 8.5: ${
    Math.round((myBirthyear / myAge) * 100) / 100
  } <br>`
);
document.write(`uitkomst van vraag 8.6: ${2.5 * 2.5} <br>`);
document.write(`uitkomst van vraag 8.7: ${Math.sin(Math.PI * 2)} <br>`);
document.write(`uitkomst van vraag 8.8: ${12 / 0} <br>`);
document.write(`uitkomst van vraag 8.9: ${myAge * 2} <br>`);
document.write(`uitkomst van vraag 8.10: ${myAge * 2 + 1} <br>`);
document.write(`uitkomst van vraag 8.11: ${myAge * (2 + 1)} <br>`);
document.write(`uitkomst van vraag 8.12: ${myAge + 1} <br>`);
document.write(`uitkomst van vraag 8.13: ${leeg * 1} <br><br>`);

// Opdracht 10
document.write(`tekst van vraag 10.1: ik ben een 'brave' student <br>`);
document.write(`tekst van vraag 10.2: ${myName} <br>`);
document.write(`tekst van vraag 10.3: ${myName.charAt(0)} <br>`);
document.write(
  `tekst van vraag 10.4: ${myName.charAt(myName.length - 1)} <br>`
);
document.write(`tekst van vraag 10.5: ${myName + " " + myName} <br>`);
document.write(`tekst van vraag 10.6: ${myName + " " + myAge} <br>`);
document.write(`tekst van vraag 10.7: ${myAge + " " + myAge} <br>`);
document.write(`tekst van vraag 10.8: ${myAge + myAge} <br><br>`);

// Opdracht 12
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.push(11);
document.write(myArray + "<br>");
myArray.reverse();
document.write(myArray + "<br>");
myArray.pop();
document.write(myArray + "<br>");
myArray.splice(5, 6, "4", "3", "2");
document.write(myArray + "<br>");
let myArrayLength = myArray.length;
document.write("myArrayLength:" + myArrayLength + "<br>");
for (let step = 0; step < myArrayLength; step++) {
  let value = myArray[step];
  if (value != 3) {
    document.write(myArray[step] + "<br>");
  }
  if (value == 7) {
    document.write(myArray[step] + "<br>");
  }
}
myArray.shift();
document.write(myArray + "<br>");
myArray[2] = "X";
document.write(myArray + "<br>");

myArray[4] = myArray[4] + "";
document.write(myArray + "<br>");

const myFunction = (waarde1, waarde2) => {
  if (waarde1 != waarde2) {
    let temp = "<br>";
    for (i = 0; i < 10; i++) {
      temp += "nee ";
    }
    return temp;
  } else {
    return "<br> ja <br><br>";
  }
};

document.write(myFunction(1, 2));
document.write(myFunction("dit ben ik", myName));
document.write(myFunction(myName, myName));

// date
const datum = new Date();
const maand = new Date();
const dag = new Date();
const jaar = new Date();

const fullDatum = `${maand.getMonth()}/${dag.getDay()}/${jaar.getFullYear()}`;

document.write(`${datum.getDate()}<br>`);
document.write(`${maand.getMonth()}<br>`);
document.write(fullDatum);
