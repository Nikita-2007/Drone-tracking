//DroneTracking

class Bird {
    constructor() {
        this.type = "bird";
        this.color = "gray";
        this.speed = 3;
        this.size = 1;
        this.pos = model.rndSpawn(4);
        this.target = model.rndPos(this.pos);
    }

    update() {
        this.pos = model.step(this.pos, this.target, this.speed)
        if (model.delta(this.pos, this.target) <= this.speed) {
            this.target = model.rndPos(this.pos);
        }
        if (!model.inRadar(this.pos)) {
            model.listObject.splice(model.listObject.indexOf(this.obj), 1);
        }
    }

    drawRadar(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos.x-this.size/2,this.pos.y-this.size/2,this.size,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }

    drawCamera(ctx) {

    }

    destroy() {

    }
}
