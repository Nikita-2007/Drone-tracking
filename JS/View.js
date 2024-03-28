//DroneTracking

class View {
    constructor() {
        this.size = {
            width: document.getElementById('radar').offsetWidth,
            height: document.getElementById('radar').offsetHeight
        };

        this.canvas=document.getElementById('canvas');
        this.photo=document.getElementById('photo');
        this.onResize();
        window.addEventListener('resize', this.onResize);

        this.url = 'Images/drone1.png';
        this.image = new Image();
        this.image.src = this.url;
        document.getElementById('photo').appendChild(this.image);
        this.k = this.size.width/1152
    }
    
    draw() {
        let ctx = this.ctx;
        let k = this.k;
        //Радар
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.size.width, this.size.height)
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "darkblue";

        //Сетка
        for (var i = 0; i < 8; i += 1) {
            ctx.moveTo(i*160*k, 0);
            ctx.lineTo((552+i*2)*k, 825*k);
        }
        for (var i = 0; i < 14; i += 1) {
            ctx.moveTo((i*51-155)*k, i*60*k);
            ctx.quadraticCurveTo(565*k, (i*60-(340-i*20))*k, (1130-i*52+155)*k, i*60*k);
        }
        ctx.stroke();

        //Рамка радара
        ctx.beginPath();
        ctx.lineWidth = 2*k;
        ctx.strokeStyle = "red";
        ctx.moveTo(0, 185*k);
        ctx.lineTo(550*k, 830*k);
        ctx.moveTo(1130*k, 185*k);
        ctx.lineTo(570*k, 830*k);
        ctx.moveTo(550*k, 830*k);
        ctx.quadraticCurveTo(560*k, 820*k, 570*k, 830*k);
        ctx.moveTo(0, 185*k);
        ctx.quadraticCurveTo(565*k, -100*k, 1130*k, 185*k);
        ctx.stroke();

        //Отрисовка дронов
        for (let obj of model.listObject) {
            if (model.inRadar(obj.pos))
                obj.drawRadar(ctx);
            obj.drawCamera(ctx);
        }
        let ui = new UI();
        ui.draw(ctx);
    }
    
    onResize() {
        this.canvas.width=this.size.width;
        this.canvas.height=this.size.height;
        this.ctx=this.canvas.getContext('2d');
        this.ctx.textBaseline="middle";
        this.ctx.textAlign="center";
    }
}
