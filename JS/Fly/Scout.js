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
        this.timerSignal = 0;
    }

    update() {
        this.pos = model.step(this.pos, this.target, this.speed)
        if (model.delta(this.pos, this.target) <= this.speed) {
            this.target = model.rndPos();
        }
        this.timerSignal += 1;
        if (this.timerSignal >= 30)
            this.timerSignal = 0;
    }

    drawRadar(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos.x-this.size/2,this.pos.y-this.size/2,this.size,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.pos.x-this.size/2,this.pos.y-this.size/2,this.timerSignal*5,0,Math.PI*2,false);
        ctx.strokeStyle = "rgba(200,200,200,"+(30-this.timerSignal)/30+")";
        ctx.stroke();
    }

    drawCamera(ctx) {
        
    }

    destroy() {

    }

}