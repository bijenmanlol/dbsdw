var myCanvas = document.createElement('canvas');
let nummer;
let keuze;
let pnaam;

document.getElementById("leerling").appendChild(myCanvas);
document.getElementById("leerling").innerHTML = "KLIK HIER";

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

function random() {
  document.getElementById("leerling").disabled = true;
  document.getElementById("leerling").innerHTML = "LOADING...";
  nummer = Math.floor(Math.random() * (17 - 1) + 1);
  keuze = leerlingen[nummer];
  setTimeout(function() {
    confetti();
    document.getElementById("leerling").disabled = false;
    document.getElementById("leerling").innerHTML = keuze;
    setTimeout(function() {
      pnaam = '<p>' + keuze + '</p>';
      document.getElementById("leerling").innerHTML = "KLIK HIER";
      document.getElementById("lijst").innerHTML = document.getElementById("lijst").innerHTML + pnaam
    }, 2000)
  }, 5000)
}