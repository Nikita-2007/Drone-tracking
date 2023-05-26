//DroneTracking

class Rocket {
    constructor(obj) {
        this.obj = obj;
        this.type = "rocket";
        this.color = "lime";
        this.speed = 0;
        this.size = 1;
        this.pos = {
            x: 560,
            y: 820,
        };
        this.target = {
            x: this.obj.pos.x,
            y: this.obj.pos.y
        };
        this.timer = 0;
    }

    update() {
        this.target = {
            x: this.obj.pos.x,
            y: this.obj.pos.y
        };
        this.pos = model.step(this.pos, this.target, this.speed)
        if (this.speed <= 20)
            this.speed += 0.5;
        if (model.delta(this.pos, this.target) <= this.speed/4) {
            this.timer += 5;
            this.speed = 0;
            this.obj.speed = 0;
            this.obj.color = "rgba(0,0,0,256)";
            this.pos = {x: this.target.x, y: this.target.y};
            this.color = "rgba(0,0,0,256)";
        }
    }
    
    drawRadar(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos.x-this.size/2,this.pos.y-this.size/2,this.size,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.fill();
        ctx.stroke();
        if (this.timer != 0) {
            ctx.beginPath();
            ctx.arc(this.pos.x-this.size/2,this.pos.y-this.size/2,this.timer*2,0,Math.PI*2,false);
            ctx.fillStyle = "rgba(256,"+this.timer*5+",0,"+(20-this.timer)/20+")";
            ctx.fill();
        }
        if (this.timer >= 20)
            this.destroy();
    }

    drawCamera() {

    }

    destroy() {
        model.listObject.splice(model.listObject.indexOf(this.obj), 1);
        model.listObject.splice(model.listObject.indexOf(this), 1);
    }
}