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

        //Временно

        this.url = 'Images/drone1.png';
        this.image = new Image();
        this.image.src = this.url;
        document.getElementById('photo').appendChild(this.image);
    }
    
    draw() {
        let ctx = this.ctx;
        //Радар
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.size.width, this.size.height)
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "darkblue";

        //Сетка
        for (var i = 0; i < 8; i += 1) {
            ctx.moveTo(i*160, 0);
            ctx.lineTo(552+i*2, 825);
        }
        for (var i = 0; i < 14; i += 1) {
            ctx.moveTo(i*51-155, i*60);
            ctx.quadraticCurveTo(565, i*60-(340-i*20), 1130-i*52+155, i*60);
        }
        ctx.stroke();

        //Рамка радара
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.moveTo(0, 185);
        ctx.lineTo(550, 830);
        ctx.moveTo(1130, 185);
        ctx.lineTo(570, 830);
        ctx.moveTo(550, 830);
        ctx.quadraticCurveTo(560, 820, 570, 830);
        ctx.moveTo(0, 185);
        ctx.quadraticCurveTo(565, -100, 1130, 185);
        ctx.stroke();

        //Отрисовка дронов
        for (let obj of model.listObject) {
            if (model.inRadar(obj))
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
