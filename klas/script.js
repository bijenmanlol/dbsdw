var myCanvas = document.createElement('canvas');
let nummer;
let keuze;
let pnaam;
let ai = 0;

document.getElementById("leerling").appendChild(myCanvas);
document.getElementById("leerling").innerHTML = "KLIK HIER";

let gekozen = [];

let leerlingen = {

  1: "NOAH",
  2: "ARSENIY",
  3: "HAZEER",
  4: "LENNERT",
  5: "HAYRULLAH",
  6: "NASSER",
  7: "LEVI",
  8: "KWABENA",
  9: "NEBI",
  10: "CESAR",
  11: "JULES",
  12: "BENCE",
  13: "XIANO",
  14: "EDIZ",
  15: "DRISS",
  16: "GABRIËL"

}

letter = 0;

function shuffle(array) {

  let i = array.length,
    j = 0,
    temp;

  while (i--) {

    j = Math.floor(Math.random() * (i + 1));


    temp = array[i];
    array[i] = array[j];
    array[j] = temp;

  }
  return array;
}

let ranNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

function kiezer() {
    document.getElementById("leerling").disabled = true;
    document.getElementById("leerling").innerHTML = "LOADING...";
    
    keuze = leerlingen[ranNums[letter]];
    if (keuze == null) {
      
    document.getElementById("leerling").innerHTML = "LIJST VOL";
    document.getElementById("leerling").disabled = true;
    document.getElementById("leerling").onclick = "";
    } else {

      setTimeout(function() {
        confetti();
        document.getElementById("leerling").disabled = false;
        document.getElementById("leerling").innerHTML = keuze;
        setTimeout(function() {
          pnaam = '<p>' + keuze + '</p>';
          document.getElementById("lijst").innerHTML = document.getElementById("lijst").innerHTML + pnaam
          document.getElementById("leerling").innerHTML = "KLIK HIER";
          letter++;
        }, 2000)
      }, 5000)
    }
}
