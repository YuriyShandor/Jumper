var arena = document.getElementById('arena')
var c = arena.getContext('2d');

arena.width = 1024;
arena.height = 600;

c.fillRect(0, 500, 1024, 100);

// var jumperImage = document.getElementById('jumperImage');
//
// console.log(jumperImage);
//
// c.drawImage(jumperImage, 100, 100, 50, 50);

var image = new Image();
image.src = '../img/running.png';
image.onload = function() {
  c.drawImage(image, 50, 70);
}

// window.onload = function () {
// 	var img = new Image();
// 	img.src = 'running.png';
//
// 	img.onload = function () {
// 	  c.drawImage(img, 0, 0);
// 	}
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
