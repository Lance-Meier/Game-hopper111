var images = {
    bg:"images/desert-background.jpg",
    cloud:"images/cloud.png",
    hopperL:"images/kangaroo-sprite-L.png",
    hopperR:"images/kangaroo-sprite-R.png",
    powerUp:"images/watermelon.png",
    worldBg:"images/world-bg.png",
};
var jump = new Audio();
jump.src ="audio/cartoon_hop_jump_bounce.mp3";

var music = new Audio();
music.src ="audio/Puzzle-Theme1.wav";


var ctx ;
$(document).ready(function(){
var canvas = document.getElementById("canvas");
ctx= canvas.getContext("2d");
ctx.fillRect(0,0,canvas.width,canvas.height);

    //Canvas and Context
    
    //Main Objects
    
    var board;
    var cloud;
    var hopper;
    var interval;
    var powerUp;
    var frames = 0;
    
    //Start Game Function
    
    function startGame() {
        frames = 0; 
        //RANDOM CLOUD GENERATOR NEEDED: MIN HEIGHT FROM HOPPER Y is -330px 
        //ONLY IS IF HOPPER IS DIRECTLY UNDER AND CLOUD X MATCHES CURRENT CLOUD X RANGE MAX X DISTANCE MUST BE 
        //515 PX FOR 100% HORIZONTAL JUMP, POSSIBLE GEOMETRIC EQUATION NEEDED TO GENERATE THE CORRECT RANGE?
        //clouds = [];
        board = new Board();
        hopper = new Hopper();
        cloud = new Cloud();
        cloud2 = new Cloud();
        cloud3 = new Cloud();
        cloud4 = new Cloud();
        cloud5 = new Cloud();
        cloud6 = new Cloud();
        cloud7 = new Cloud();
        cloud8 = new Cloud();
        cloud9 = new Cloud();
        cloud10 = new Cloud();
        cloud11 = new Cloud();
        cloud12 = new Cloud();
        cloud13 = new Cloud();
        powerUp = new PowerUp();
        powerUp1 = new PowerUp();
        cloud2.x = 320;
        cloud2.y = 20;
        cloud3.x = 0;
        cloud3.y = -200;
        cloud4.x = 0;
        cloud4.y = -450;
        cloud5.x = 200;
        cloud5.y = -450;
        cloud6.x = 350;
        cloud6.y = -600;
        cloud7.x = 600;
        cloud7.y = -700;
        cloud8.x = 350;
        cloud8.y = -1200;
        cloud9.x = 600;
        cloud9.y = -1800;
        cloud10.x = 185;
        cloud10.y = -1300;
        cloud11.x = 200;
        cloud11.y = -2000;
        cloud12.x = 400;
        cloud12.y = -2300;
        cloud13.x = 200;
        cloud13.y = -2300;
        powerUp1.x = 500;
        powerUp1.y = -1400;
        
        console.log(cloud4.x);
        playMusic();
        setInterval(playMusic, 43000);
        interval = setInterval(updateGame, 1000/60);
      }
      
    //Update the Game
    
    function updateGame(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        board.draw(hopper);
        powerUp.draw(hopper);
        powerUp1.draw(hopper);
        hopper.draw();
        cloud.draw(hopper);
        cloud2.draw(hopper);
        cloud3.draw(hopper);
        cloud4.draw(hopper);
        cloud5.draw(hopper);
        cloud6.draw(hopper);
        cloud7.draw(hopper);
        cloud8.draw(hopper);
        cloud9.draw(hopper);
        cloud10.draw(hopper);
        cloud11.draw(hopper);
        cloud12.draw(hopper);
        cloud13.draw(hopper);
        frames++;
        hopper.velY += hopper.gravity;
        hopper.x += hopper.velX;
        hopper.y += hopper.velY;
        hopper.velX *= hopper.friction;
        hopper.velY *= hopper.friction;
        hopper.onCloud(cloud);
        hopper.onCloud(cloud2);
        hopper.onCloud(cloud3);
        hopper.onCloud(cloud4);
        hopper.onCloud(cloud5);
        hopper.onCloud(cloud6);
        hopper.onCloud(cloud7);
        hopper.onCloud(cloud8);
        hopper.onCloud(cloud9);
        hopper.onCloud(cloud10);
        hopper.onCloud(cloud11);
        hopper.onCloud(cloud12);
        hopper.onCloud(cloud13);
        hopper.checkPowerUp(powerUp);
        hopper.checkPowerUp(powerUp1);
        console.log(hopper.gravity);
        hopper.xBoundary();
        hopper.yBoundary();
        console.log(hopper.y);

      }
    // Play Sounds

    function playMusic(){
        music.play();
    }

    Hopper.prototype.playJump = function(){
        jump.volume = 0.5;
        jump.play();
    }

    //Draw More Background
    
    function scrollUp(){
       
    }
    


    //Stop Game
    
    function stopGame(){
        clearInterval(interval);
      }



   
     
    //Generators



    
    function generateCloud (){
    
    }
    
   // function generatePowerUp (){
    
   // }
    
    //Checks
    //
/*
    function megaJump(){
        hopper.gravity = 0.5;
    }

    function gravityUp (){
        hopper.gravity = 1.5;
    }

    function powerUpTimer (){
    setTimeout(function(){ 
        hopper.gravityUp(); 
    }, 3000);
    };

    function checkPowerUp(){
  };
  */

    
    //Special Draws
    
    function drawBG(){
    
    }
    
    function drawPowerUp(){
    
    }
    //Start the Game
    
    startGame();
    
    
    //Listeners
    
    addEventListener("keydown", function(e){
            switch (e.keyCode) {
                case 37: // <-
                   hopper.moveLeft();               
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
});