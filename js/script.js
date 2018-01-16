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

var createBarrier;
var rand = 300;

function randomize() {
    doSomething();
    rand = Math.round(Math.random()*(3000-500))+500;
    clearInterval(createBarrier);
    createBarrier = setInterval('randomize();', rand);
}

createBarrier = setInterval('randomize();', rand);

var div;

function doSomething(){
  div = document.createElement('div');
  div.className = "barrier-block";
  arena.appendChild(div);
}

setInterval("div.remove()", 4000);
