//DroneTracking

class Scout {
    constructor() {
        this.type = "scout";
        this.pos = {
            x: 0,
            y: 0,
            z: 0
        };
        this.speed = 6;
        this.size = 2;
        this.color = "orange";
    }

    update() {
        this.pos.x += 10;
        this.pos.y += 10;
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