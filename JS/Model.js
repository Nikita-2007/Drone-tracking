class Model {
    //Базовая модель
    constructor() {
        this.size={
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.init();
    }
    init() {
        var ctx = document.querySelector("canvas").getContext("2d");
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
}
