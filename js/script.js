var arena = document.getElementById('arena');
var c = arena.getContext('2d');

arena.width = 1024;
arena.height = 600;

var canvasKeyCode = undefined;

document.addEventListener('keydown', function(event) {
  canvasKeyCode = event.keyCode;
});

document.body.addEventListener("keyup", function(e) {
    canvasKeyCode = undefined;
});

var gravity = 0.15;
var friction = 0.9;

function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.velX = 0;
  this.velY = 0;
  this.speed = 3;
  this.radius = radius;
  this.jumping = false;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = "red";
    c.stroke();
    c.fill();
  };

  this.move = function() {

    if (canvasKeyCode == 38 || canvasKeyCode == 32) {
      // jump
      if(!this.jumping){
        this.jumping = true;
        this.velY = -this.speed*2;
      };
    };
    if (canvasKeyCode == 39) {
      // move right
      if (this.velX < this.speed) {
        this.velX++;
      };
    };
    if (canvasKeyCode == 37) {
      // move left
      if (this.velX > -this.speed) {
        this.velX--;
      };
    };

    this.velX *= friction;

    this.velY += gravity;

    this.x += this.velX;
    this.y += this.velY;

    if (this.x >= arena.width) {
      this.x = arena.width;
    } else if (this.x <= 0) {
      this.x = 0;
    };

    if(this.y > 475){
      this.y = 475;
      this.jumping = false;
    };

    this.draw();
  };
};

function Barrier(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.dx = 4;

  this.draw = function() {
    c.fillStyle = "#000";
    c.fillRect(this.x, this.y, this.width, this.height);
  }

  this.move = function() {
    this.x -= this.dx;

    this.draw();
  }
};

var jumper = new Circle(150, 475, 25);

var barriersArr = [];
var timer = 0;
var randomSpawnRate = Math.floor((Math.random() * 25) + 50);

// for (var i=0; i<5; i++) {
//   //barriersArr.push(new Barrier(1024, 425, 5, 75));
//
//   setTimeout(function() {
//       barriersArr.push(new Barrier(1024, 425, 5, 75));
//
//     }, 4000);
// }
// console.log(barriersArr);

// function display(i){
//   if(i >= barriersArr.length){
//       i = 0;
//   }
//
//   barriersArr[i].move();
//   console.log(barriersArr[i]);
//   setTimeout(function(){
//      display(i + 1)
//   }, 1000)
// };
//
// display(0);



function showElements() {
  requestAnimationFrame(showElements);
  c.clearRect(0, 0, arena.width, arena.height);

  jumper.move();

  timer ++;
	//console.log(timer);
	if (timer % 100 == 0) {
    var width = Math.floor((Math.random() * 150) + 5);
		barriersArr.push(new Barrier(1024, 425, width, 75));
		//randomSpawnRate = Math.floor((Math.random() * 10) + 175);
	}

  for (var i=0; i < barriersArr.length; i++) {
    barriersArr[i].move();

    if (barriersArr[i].x < -150) {
      barriersArr.splice(i, 1);
    };
  };


  c.fillStyle = "grey";
  c.fillRect(0, 500, 1024, 100);
};

showElements();

// var s=['John', 'Alex', 'Mark'];
// function display(i){
//     if(i >= s.length){
//         i = 0;
//     }
//
//     console.log(s[i]);
//     setTimeout(function(){
//        display(i + 1)
//     }, 500)
// };
//
// display(0);

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
