var arena = document.getElementById('arena')
var c = arena.getContext('2d');

arena.width = 1024;
arena.height = 600;

c.fillRect(0, 500, 1024, 100);


// c.beginPath();
// var jumper = c.arc(175, 475, 25, 0, Math.PI * 2, false);
// c.fillStyle = "red";
// c.strokeStyle = "#000";
// c.fill();
// c.stroke();

function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  // this.dx = dx;
  // this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = "red";
    c.stroke();
    c.fill();
    c.closePath();
  };

  this.move = function() {
    // this.x += this.dx;
    // this.y += this.dy;

    this.draw();
  };
};

var jumper = new Circle(150, 475, 25);

function showElements() {
  requestAnimationFrame(showElements);
  c.clearRect(0, 0, arena.width, arena.height);

  jumper.move();

  c.fillStyle = "#000";
  c.fillRect(0, 500, 1024, 100);
};

showElements();

// function jumping(e) {
//   var x = e.keyCode;
//   if (x == 38 || x == 32) {
//     jumper.style.bottom = "170px";
//   };
//
//   setTimeout("jumper.style.bottom = '100px'", 300);
// }
























// //==============Jumping==============
//
// var jumper = document.getElementById("jumper");
// var arena = document.getElementById("arena");
//
// function jumping(e) {
//   var x = e.keyCode;
//   if (x == 38 || x == 32) {
//     jumper.style.bottom = "170px";
//   };
//
//   setTimeout("jumper.style.bottom = '100px'", 300);
// }
//
// document.onkeydown = jumping;
//
// var posJ = getComputedStyle(jumper).left;
// console.log(posJ);
//
// //===============Barrier==============================================
// var posB = undefined;
//
// function createBarrier() {
//   var barrier = document.createElement('div');
//   barrier.className = "barrier-block";
//   arena.appendChild(barrier);
//
//   function deleteBarier() {
//     return arena.removeChild(barrier);
//   };
//
//   setTimeout(deleteBarier, 4000);
//
//   posB = getComputedStyle(barrier).left;
//
//   console.log(posB);
// };
//
// var randomize = 1000 + Math.random() * (3000 - 1000);
//
// setInterval(createBarrier, randomize);
//
// if(posB == posJ) {
//   console.log('hello');
// };
//
// // function MacroCollision(obj1,obj2){
// //   var XColl=false;
// //   var YColl=false;
// //
// //   if ((obj1.x + obj1.width >= obj2.x) && (obj1.x <= obj2.x + obj2.width)) XColl = true;
// //   if ((obj1.y + obj1.height >= obj2.y) && (obj1.y <= obj2.y + obj2.height)) YColl = true;
// //
// //   if (XColl&YColl) {return true;}
// //   return false;
// // }
