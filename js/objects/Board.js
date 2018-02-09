function Board(){

  //Core Properties

  this.x = 0;
  this.y = -4685;
  this.width = canvas.width;
  this.height = 10000;

  //Draw

  this.img = new Image();
  this.img.src = images.worldBg;
  this.img.onload = function(){
    this.draw();
  }.bind(this);
  this.draw = function(hopper){
    ctx.drawImage(this.img, this.x, this.y + this.y - hopper.y + 350, this.width, this.height);
  }
}