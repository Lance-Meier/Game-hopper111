function Board(){

  //Core Properties

  this.x = 0;
  this.y = 0;
  this.width = canvas.width;
  this.height = canvas.height;

  //Draw

  this.img = new Image();
  this.img.src = images.bg;
  this.img.onload = function(){
    this.draw();
  }.bind(this);
  this.draw = function(hopper){
    ctx.drawImage(this.img, this.x, this.y + this.y-hopper.y - 250, this.width, this.height);
    ctx.drawImage(this.img, this.x, this.y + this.y-hopper.y + 350, this.width, this.height);
  }
}