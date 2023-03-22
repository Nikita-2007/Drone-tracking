class View {
    constructor() {
        this.canvas=document.getElementById('canvas');
        this.onResize();
        window.addEventListener('resize', this.onResize);
    }
    
    draw() {
        
    }
    
    onResize() {
        this.canvas.width=model.size.width;
        this.canvas.height=model.size.height;
        this.ctx=this.canvas.getContext('2d');
        this.ctx.textBaseline="middle";
        this.ctx.textAlign="center";
    }
}
