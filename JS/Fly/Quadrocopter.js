//DroneTracking

class Quadrocopter {
    constructor() {
        this.type = "quadrocopter";
        this.color = "yellow";
        this.speed = 2;
        this.size = 1;
        this.timerSignal = 0;
        this.detectionTime = 20 + Math.random()*10;
        this.discovered = false;
        this.pos = model.rndSpawn();
        this.target = model.rndPos();
        this.label = new Labels;
    }

    update() {
        this.pos = model.step(this.pos, this.target, this.speed)
        if (model.delta(this.pos, this.target) <= this.speed) {
            this.target = model.rndPos();
        }
        this.timerSignal += 1;
        if (this.timerSignal >= 30)
            this.timerSignal = 0;
        if (this.detectionTime <= 0 && !this.discovered) {
            this.discovered = true;
            model.newRocket(this)
        }
        else if (model.inRadar(this.pos))
            this.detectionTime -= 1;
        if (model.inRadar(this.pos) && this.discovered)
            this.label.update(this.pos, this.size/2);
    }

    drawRadar(ctx) {
        this.label.draw(ctx, this.size+1);
        ctx.beginPath();
        ctx.arc(this.pos.x-this.size/2,this.pos.y-this.size/2,this.size,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.pos.x-this.size/2,this.pos.y-this.size/2,this.timerSignal*3,0,Math.PI*2,false);
        ctx.strokeStyle = "rgba(200,200,200,"+(30-this.timerSignal)/30+")";
        ctx.stroke();

        if (this.discovered) {
            ctx.beginPath();
            ctx.rect(this.pos.x-15, this.pos.y-17, 30, 34);
            ctx.strokeStyle = "red";
            ctx.stroke();
        }
    }

    drawCamera(ctx) {
        
    }
}