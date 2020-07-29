//Movimientos
//left
var x = 0;

var mover = function mover(){
var botonNo = document.getElementById("botonNo"),
  maxl = 443,
  minl = 50;
var numl = Math.round(Math.random() * (1 + maxl - minl) + minl);

botonNo.style.left = numl + "px";
botonNo.style.top = numl + "px";
//top
var  maxt = 263,
  mint = 50;
  var numt = Math.round(Math.random() * (1 + maxt - mint) + mint);

botonNo.style.left = numl + "px";
botonNo.style.top = numt + "px";
};

// Respuesta si
function sii(){

  var ok = document.getElementsByClassName("respsi")[0];
ok.style.display ="block";
  mover = null;
};
function verificar(){
  x = x + 1;
};
//Click No
function noo(){
  if(x >= 1){

var ko = document.getElementsByClassName("respno")[0];
  ko.style.display ="block";
  };
};
