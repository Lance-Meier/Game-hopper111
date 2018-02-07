
    function Cloud(){

      //Core Properties
      
        this.x = 600;
        this.y = 200;
        this.width = 350;
        this.height = 150;
      
      //Draw  

        this.img = new Image()
        this.img.src = images.cloud;
        this.img.onload = function(){
            this.draw();
        }.bind(this);
        this.draw = function(hopper){
            ctx.drawImage(this.img,this.x,this.y+350 - hopper.y,this.width,this.height);
        };
    }