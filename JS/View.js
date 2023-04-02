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
        let x160 = this.size.width/12;
        let x213 = this.size.width/9;
        let x1300 = this.size.width/1.47;
        let x700 = this.size.width/2.74;
        let x1050 = this.size.width/1.828;
        for (var x = -x160; x < x1300; x += x213) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x700-(x/4), x1050);
        }
        for (var i = 1; i < 15; i += 1) {
            ctx.moveTo(i*52-x160, i*60);
            ctx.quadraticCurveTo(560, i*60-(80/i*10), 1115-i*52+170, i*60);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.moveTo(-x160, 0);
        ctx.lineTo(552, 830);
        ctx.moveTo(1275, 0);
        ctx.lineTo(570, 830);
        ctx.moveTo(552, 830);
        ctx.quadraticCurveTo(560, 820, 570, 830);
        ctx.moveTo(0, 150);
        ctx.quadraticCurveTo(560, -200, 1233, 210);
        ctx.stroke();
    }
    
    onResize() {
        this.canvas.width=this.size.width;
        this.canvas.height=this.size.height;
        this.ctx=this.canvas.getContext('2d');
        this.ctx.textBaseline="middle";
        this.ctx.textAlign="center";
    }
}
