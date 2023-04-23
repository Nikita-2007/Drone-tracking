//DroneTracking

class Scout {
    constructor() {
        this.type = "scout";
        this.pos = model.rndSpawn();
        this.speed = 6;
        this.size = 2;
        this.color = "orange";
        this.target = {
            x: window.innerWidth/2,
            y: window.innerHeight/2
        };
    }

    update() {
        this.pos = model.step(this.pos, this.target, this.speed)
        if (model.delta(this.pos, this.target) <= this.speed) {
            this.target = model.rndPos();
        }
    }

    drawRadar(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.pos.x+this.size, this.pos.y+this.size);
        ctx.stroke();
    }

    drawCamera(ctx) {

    }

    destroy() {

    }

}