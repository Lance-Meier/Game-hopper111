function Hopper(){

  //Core Properties
  this.x = 350;
  this.y = 10000;
  this.width = 125;
  this.height = 125;
  this.speed = 10;
  this.velX = 0;
  this.velY = 0;
  this.friction = .95;
  this.gravity = 0;
  this.isJumping = false;

  //Draw

  this.img = new Image()
  this.img.src = images.hopperR;
  this.img.onload = function(){
    this.draw();
  }.bind(this);
  this.draw = function(){
    if(this.y < 200){
      ctx.drawImage(this.img,this.x,this.y+200,this.width,this.height);
    } else {
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
  };

  //Sound



  //Movement

  this.hop = function(){
      if(this.isJumping === false){
      this.isJumping = true;
      this.playJump();
      this.gravity = 1.8;
      this.velY = -this.speed*3;
      }
  };
  this.moveLeft = function() {
      this.img.src = images.hopperL;
      if(this.velX>-this.speed) {
          this.velX -=7;
      }
  };
  this.moveRight = function(){
      this.img.src = images.hopperR;
      if(this.velX<this.speed) {
          this.velX +=7;
      }
  };

  //Boundaries

  this.xBoundary = function(){
    if (this.x < -125) {
      this.x = 1000;
    }
    if (this.x > 1000) {
      this.x = -125;
    }
  };
  this.yBoundary = function(){
    if (this.y > 350) {
      this.isJumping = false;
      this.y = 350;
      this.velY = 0;
    }
  };

  //Platform Check

  this.onCloud = function(cloud){
    if (this.y >= cloud.y && this.y < cloud.y + cloud.height && this.x >= cloud.x && this.x <= cloud.x + 210) {
      this.isJumping = false;
      this.y = (cloud.y);
      this.velY = 0;
      return true
    }
  };
 /*
  this.gravityDown = function(){
    this.gravity = 1;
  };
  this.gravityUp = function (){
    this.gravity = 1.5;
  };
  this.powerUpTimer = function (){
    setTimeout(function(){ 
        this.gravityUp(); 
    }, 3000);
  };

  this.powerUp = function(powerUp){
    if (this.y >= powerUp.y && this.y <= powerUp.y + powerUp.height && this.x >= powerUp.x && this.x <= powerUp.x + powerUp.width){
        this.gravityDown();
        this.powerUpTimer();
    }
  };
  */



}