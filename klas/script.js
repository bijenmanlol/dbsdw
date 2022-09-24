var myCanvas = document.createElement('canvas');
let nummer;
let keuze;
let pnaam;
let choice;
let fastmode = false;
let time1 = 2000;
let time2 = 5000;
let ding;


document.getElementById("leerling").appendChild(myCanvas);
document.getElementById("leerling").innerHTML = "KLIK HIER";

let leerlingen = [
"NOAH", "ARSENIY", "HAZEER", "LENNERT", "HAYRULLAH", "NASSER", "LEVI", "KWABENA", "NEBI", "CESAR", "JULES", "BENCE", "XIANO", "EDIZ", "DRISS", "GABRIËL"
]



function kiezer() {

  document.getElementById("leerling").disabled = true;
  document.getElementById("leerling").innerHTML = "LOADING...";
  
  if (fastmode == false) {
    time1 = 2000;
    time2 = 5000;
  } else {
    time1 = 75;
    time2 = 200;
  }

  ding = leerlingen.length - 1;
  console.log(ding)
  if(ding == 0){
    choice = 0;
    keuze = leerlingen[choice];
    console.log(keuze)
  if (keuze == null) {

    document.getElementById("leerling").innerHTML = "LIJST VOL";
    document.getElementById("leerling").disabled = true;
    document.getElementById("leerling").onclick = "";
  } else {

    setTimeout(function() {
      confetti();
      document.getElementById("leerling").disabled = false;
      document.getElementById("leerling").style.pointerEvents = "none";
      document.getElementById("leerling").innerHTML = keuze;
      setTimeout(function() {
        pnaam = '<p>' + keuze + '</p>';
        document.getElementById("lijst").innerHTML = document.getElementById("lijst").innerHTML + pnaam
        document.getElementById("leerling").innerHTML = "KLIK HIER";
        document.getElementById("leerling").style.pointerEvents = "initial";
        leerlingen.splice(choice, 1)[0];
      }, time1)
    }, time2)
  }
  }else{
  fetch("https://www.random.org/integers/?num=1&min=0&max=" + ding +"&col=1&base=10&format=plain&rnd=new")
  .then(response => response.text())
  .then(data => {
    choice = data.replace(/\s/g,'');
    console.log(choice);

  keuze = leerlingen[choice];
    console.log(keuze)
  if (keuze == null) {

    document.getElementById("leerling").innerHTML = "LIJST VOL";
    document.getElementById("leerling").disabled = true;
    document.getElementById("leerling").onclick = "";
  }else {

    setTimeout(function() {
      confetti();
      document.getElementById("leerling").disabled = false;
      document.getElementById("leerling").style.pointerEvents = "none";
      document.getElementById("leerling").innerHTML = keuze;
      setTimeout(function() {
        pnaam = '<p>' + keuze + '</p>';
        document.getElementById("lijst").innerHTML = document.getElementById("lijst").innerHTML + pnaam
        document.getElementById("leerling").innerHTML = "KLIK HIER";
        document.getElementById("leerling").style.pointerEvents = "initial";
        leerlingen.splice(choice, 1)[0];
      }, time1)
    }, time2)
  }
})
}
}
