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

    }
    
    drawRadar(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.moveTo(100, 100);
        ctx.lineTo(200, 200);
        ctx.stroke();
    }

    drawCamera(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "Magenta";
        ctx.moveTo(300, 300);
        ctx.lineTo(300, 400);
        ctx.stroke();
    }

    destroy() {

    }

}