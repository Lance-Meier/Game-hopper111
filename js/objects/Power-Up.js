    function PowerUp(){
        this.x = 300;
        this.y = 300;
        this.width = 50;
        this.height = 50;
        this.img = new Image();
        this.img.src = images.powerUp;
        this.img.onload = function(){
            this.draw();
        }.bind(this);
        this.draw = function(hopper){
            ctx.drawImage(this.img,this.x,this.y+350 - hopper.y,this.width,this.height);
        };
        
    }
