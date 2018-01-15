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


var div = document.createElement('div');
div.className = "barrier-block";
arena.appendChild(div);

//etInterval("arena.appendChild(div)", 3000);
