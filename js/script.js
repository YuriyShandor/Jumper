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

    if (this.x + this.radius >= arena.width) {
      this.x = arena.width - this.radius;
    } else if (this.x - this.radius <= 0) {
      this.x = 0 + this.radius;
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
var barrierTimer = 0;

function collisionDetection (playerX, playerY, barrierX, barrierY, barrierWidth, barrierHeight) {
  var xDistance = (barrierX + barrierWidth / 2) - playerX;
  var yDistance = (barrierY + barrierHeight / 2) - playerY;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function showElements() {
  requestAnimationFrame(showElements);
  c.clearRect(0, 0, arena.width, arena.height);

  jumper.move();

  barrierTimer ++;
	if (barrierTimer % 100 == 0) {
    var width = Math.floor((Math.random() * 150) + 5);
		barriersArr.push(new Barrier(1024, 425, width, 75));
	}

  for (var i=0; i < barriersArr.length; i++) {
    barriersArr[i].move();

    if (collisionDetection(jumper.x, jumper.y, barriersArr[i].x, barriersArr[i].y, barriersArr[i].width, barriersArr[i].height) < jumper.radius + barriersArr[i].width / 2 ||
        collisionDetection(jumper.x, jumper.y, barriersArr[i].x, barriersArr[i].y, barriersArr[i].width, barriersArr[i].height) < jumper.radius + barriersArr[i].height / 2) {
      console.log('Game over');
    }

    if (barriersArr[i].x < -150) {
      barriersArr.splice(i, 1);
    };
  };


  c.fillStyle = "grey";
  c.fillRect(0, 500, 1024, 100);
};

showElements();
