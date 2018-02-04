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

var gravity = 0.1;
var friction = 0.8;

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
        this.x++;
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

    // if(canvasKeyCode == 32 || canvasKeyCode == 38) {
    //   // if(!this.jumping){
    //   //  this.jumping = true;
    //   //  this.y += -this.dy;
    //   // }
    //   this.y += -this.dy;
    //
    //
    //
    //
    // };
    //
    // if (this.y < 350) {
    //   this.dy = -this.dy;
    // }
    //
    // if (this.y > 475) {
    //   this.y = 475;
    // }
    //
    // this.dx *= frictionValue;
    // //this.dy += gravityValue;
    //
    // this.x += this.dx;
    // //this.y += this.dy;
    //
    // // if(this.y > 475){
    // //     this.y = 475;
    // //     this.dy = 0;
    // //     this.jumping = false;
    // // }
    //
    // // if (this.x >= arena.width - (this.x + this.radius)) {
    // //     this.x = arena.width - (this.x + this.radius);
    // // } else if (this.x + this.radius <= 0) {
    // //     this.x = 0 + this.radius;
    // // };
    // //


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










// var canvas = document.getElementById("arena"),
//     ctx = canvas.getContext("2d"),
//     width = 500,
//     height = 200,
//     player = {
//       x : width/2,
//       y : height - 5,
//       width : 5,
//       height : 5,
//       speed: 3,
//       velX: 0,
//       velY: 0,
//       jumping: false
//     },
//     keys = [],
//     friction = 0.8,
//     gravity = 0.3;
//
// canvas.width = width;
// canvas.height = height;
//
// function update(){
//   //check keys
//     if (keys[38] || keys[32]) {
//         // up arrow or space
//       if(!player.jumping){
//        player.jumping = true;
//        player.velY = -player.speed*2;
//       }
//     }
//     // if (keys[39]) {
//     //     // right arrow
//     //     if (player.velX < player.speed) {
//     //         player.velX++;
//     //     }
//     // }
//     // if (keys[37]) {
//     //     // left arrow
//     //     if (player.velX > -player.speed) {
//     //         player.velX--;
//     //     }
//     // }
//
//     player.velX *= friction;
//
//     player.velY += gravity;
//
//     player.x += player.velX;
//     player.y += player.velY;
//
//     if (player.x >= width-player.width) {
//         player.x = width-player.width;
//     } else if (player.x <= 0) {
//         player.x = 0;
//     }
//
//     if(player.y >= height-player.height){
//         player.y = height - player.height;
//         player.jumping = false;
//     }
//
//   ctx.clearRect(0,0,width,height);
//   ctx.fillStyle = "red";
//   ctx.fillRect(player.x, player.y, player.width, player.height);
//
//   requestAnimationFrame(update);
// }
//
// document.body.addEventListener("keydown", function(e) {
//     keys[e.keyCode] = true;
// });
//
// document.body.addEventListener("keyup", function(e) {
//     keys[e.keyCode] = false;
// });
//
//
// window.addEventListener("load",function(){
//     update();
// });














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
