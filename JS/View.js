class View {
    constructor() {
        this.size = {
            width: document.getElementById('radar').offsetWidth,
            height: document.getElementById('radar').offsetHeight
        };
        this.canvas=document.getElementById('canvas');
        this.onResize();
        window.addEventListener('resize', this.onResize);
    }
    
    draw() {
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.strokeStyle = "darkblue";
        //Радар
        for (var x = -160; x < 1300; x += 213) {
            ctx.moveTo(x, 0);
            ctx.lineTo(700-(x/4), 1050);
        }
        for (var i = 1; i < 15; i += 1) {
            ctx.moveTo(i*52-160, i*60);
            ctx.quadraticCurveTo(560, i*60-(80/i*10), 1115-i*52+170, i*60);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.moveTo(-160, 0);
        ctx.lineTo(552, 830);
        ctx.moveTo(1275, 0);
        ctx.lineTo(570, 830);
        ctx.moveTo(552, 830);
        ctx.quadraticCurveTo(560, 820, 570, 830);
        ctx.moveTo(0, 150);
        ctx.quadraticCurveTo(560, -200, 1233, 210);
        ctx.stroke();
        
        for (let obj of model.listObject) {
            obj.drawRadar(ctx);
            obj.drawCamera(ctx);
        }
    }
    
    onResize() {
        this.canvas.width=this.size.width;
        this.canvas.height=this.size.height;
        this.ctx=this.canvas.getContext('2d');
        this.ctx.textBaseline="middle";
        this.ctx.textAlign="center";
    }
}
