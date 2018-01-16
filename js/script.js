var jumper = document.getElementById("jumper");
var arena = document.getElementById("arena");

function jumping(e) {
  var x = e.keyCode;
  if (x == 38 || x == 32) {
    jumper.style.bottom = "170px";
  };

  setTimeout("jumper.style.bottom = '100px'", 300);
}

document.onkeydown = jumping;

//=============================================================

var barrier;
var rand = 300;

function randomize() {
  createBarrier();
  rand = Math.round(Math.random()*(3000-500))+500;
  clearInterval(barrier);
  barrier = setInterval('randomize();', rand);
}

console.log(rand);

barrier = setInterval('randomize();', rand);

function createBarrier(){
  var div = document.createElement('div');
  div.className = "barrier-block";
  arena.appendChild(div);
}
