$(document).ready(function(){
//Canvas and Context

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillRect(0,0,canvas.width,canvas.height);

var images = {
    bg:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/desert-background.jpg",
    cloud:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/cloud.png",
    hopperL:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/kangaroo-sprite-L.png",
    hopperR:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/kangaroo-sprite-R.png",
    powerUp:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/watermelon.png",
};

//Main Objects

var board;
var cloud;
var hopper;
var interval;
var powerUp;
var frames = 0;

//Classes

function Board(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = images.bg;
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    this.draw = function(){
      ctx.drawImage(this.img, this.x,this.y, this.width, this.height);
    }
  }

function Cloud(){
    this.x = 600;
    this.y = 150;
    this.width = 200;
    this.height = 150;
    this.img = new Image()
    this.img.src = images.cloud;
    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    };
}

function Hopper(){
    this.x = 300;
    this.xVel = 0
    this.y = 350;
    this.yVel = 0;
    this.width = 125;
    this.height = 125;
    this.img = new Image()
    this.img.src = images.hopperR;
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    this.draw = function(){
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    };
    this.hop = function(){
        this.y -=35;
        this.velocity = 0;
    }
    this.moveLeft = function(){
        this.img.src = images.hopperL;
        this.x -= 30;
    }
    this.moveRight = function(){
        this.img.src = images.hopperR;
        this.x += 30;
    }
}

function PowerUp(){
    this.x = 300;
    this.y = 300;
    this.width = 50;
    this.height = 50;
    this.img = new Image()
    this.img.src = images.powerUp;
    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    };
}

//Start Game Function

function startGame() {
    frames = 0;
    clouds = [];
    board = new Board();
    hopper = new Hopper();
    cloud = new Cloud();
    powerUp = new PowerUp
    interval = setInterval(updateGame, 1000/60);
  }
  
//Update the Game

function updateGame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    board.draw();
    hopper.draw();
    cloud.draw();
    powerUp.draw();
    frames++;
    checkCloud();
    checkPowerUp();
  }

//Stop Game

function stopGame(){
    clearInterval(interval);
  }

//Generators

function generateCloud (){

}

function generatePowerUp (){

}

//Checks

function checkCloud (){

}

function checkPowerUp(){

}

//Special Draws

function drawClouds(){

}

function drawPowerUp(){

}

//Start the Game

startGame();


//Listeners

addEventListener("keydown", function(e){
        switch (e.keyCode) {
            case 37: // <-
               hopper.moveLeft()               
                break;
            case 39: // ->
                hopper.moveRight()
                break;
            case 32: //Spacebar
                hopper.hop()
                break;
            default:
                break;
        }
    });
    
    addEventListener("keyUp", function(e){


        }
    );









});
