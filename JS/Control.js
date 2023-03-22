class Control {
    constructor() {
        this.game=true;
        this.focus=false;
        this.info=false;
        
        this.btnPlay=document.getElementById('play');
        this.btnClear=document.getElementById('clear');
        this.btnSave=document.getElementById('save');
        this.btnPlay.addEventListener('click', this.play.bind(this));
        this.btnClear.addEventListener('click', this.clear.bind(this));
        this.btnSave.addEventListener('click', this.save.bind(this));
        
        onclick=(e) => this.onClick(e);
        onkeydown=(e) => this.onKeyDown(e);
        setInterval(() => this.update(), 1000/FPS);
    }

    update() {
        if (this.game)
            model.update();
        view.draw();
    }

    onClick(e) {
        if (!this.focus) {
            let pos={
                x: e.clientX,
                y: e.clientY
            };
            model.newFood(model.randPos(pos, 4));
        }
        this.focus=false;
    }

    onKeyDown(e) {
        e.preventDefault();
		switch(e.keyCode) {
			case 17: case 18:
                this.info=!this.info;
                break;
            case 19: case 32:
                this.play();
                break;
		}
    }
    
    play() {
        this.focus=true;
        this.game=!this.game;
        this.btnName();
    }

    clear() {
        this.focus=true;
        this.btnName();
        model=new Model();
    }
}
