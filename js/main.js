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
        //clouds = [];
        board = new Board();
        hopper = new Hopper();
        cloud = new Cloud();
        cloud2 = new Cloud();
        cloud3 = new Cloud()
        powerUp = new PowerUp();
        cloud2.x = 200;
        cloud2.y = 50;
        cloud3.x = 0;
        cloud3.y = -150;
        playMusic();
        setInterval(playMusic, 43000);
        interval = setInterval(updateGame, 1000/60);
      }
      
    //Update the Game
    
    function updateGame(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        board.draw(hopper);
        powerUp.draw(hopper);
        hopper.draw();
        cloud.draw(hopper);
        cloud2.draw(hopper);
        cloud3.draw(hopper);
        frames++;
        hopper.velY += hopper.gravity;
        hopper.x += hopper.velX;
        hopper.y += hopper.velY;
        hopper.velX *= hopper.friction;
        hopper.velY *= hopper.friction;
        hopper.onCloud(cloud);
        hopper.onCloud(cloud2);
        hopper.onCloud(cloud3);
        //checkPowerUp();
        hopper.xBoundary();
        hopper.yBoundary();
        console.log(hopper.y);

      }
    // Play Sounds

    function playMusic(){
        music.play();
    }

    Hopper.prototype.playJump = function(){
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
    //*/

    /*
    
    function checkPowerUp(){
    
    }
    
    //Special Draws
    
    function drawBG(){
    
    }
    
    function drawPowerUp(){
    
    }
*/


    
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