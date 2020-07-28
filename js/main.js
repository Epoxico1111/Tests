//left
function mover(){
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
}


function sii(){

  var ok = document.getElementsByClassName("respsi")[0];
ok.style.display ="block";

}
/*
*/
