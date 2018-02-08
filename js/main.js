var images = {
    bg:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/desert-background.jpg",
    cloud:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/cloud.png",
    hopperL:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/kangaroo-sprite-L.png",
    hopperR:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/kangaroo-sprite-R.png",
    powerUp:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/watermelon.png",
    worldBg:"/Users/lancemeier/Downloads/Ironhack/Week3/Hopper/images/world-bg.png",
};
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
        powerUp = new PowerUp();
        interval = setInterval(updateGame, 1000/60);
      }
      
    //Update the Game
    
    function updateGame(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        board.draw(hopper);
        powerUp.draw(hopper);
        hopper.draw();
        cloud.draw(hopper);
        frames++;
        hopper.velY += hopper.gravity;
        hopper.x += hopper.velX;
        hopper.y += hopper.velY;
        hopper.velX *= hopper.friction;
        hopper.velY *= hopper.friction;
        hopper.onCloud(cloud);
        //checkPowerUp();
        hopper.xBoundary();
        hopper.yBoundary();
        console.log(hopper.velX);

      }

    //Draw More Background
    
    function scrollUp(){
       
    }
    


    //Stop Game
    
    function stopGame(){
        clearInterval(interval);
      }



   
 /*     
    //Generators
    
    function generateCloud (){
    
    }
    
    function generatePowerUp (){
    
    }
    
    //Checks
    */

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