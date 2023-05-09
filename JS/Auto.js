class Auto {
    constructor() {
        this.random = 0;
        this.timer = 0;
    }

    update() {
        this.timer += 1;
        if (this.timer >= 50) {
            this.randomObject();
            this.timer = 0;
        }
    }

    randomObject() {
        let obj;
        this.random = Math.round(Math.random()*100);
        if (this.random < 50)
            obj = new Bird();
        else if (this.random < 70)
            obj = new Scout();
        else if (this.random < 85)
            obj = new Quadrocopter();
        else if (this.random < 95)
            obj = new Attacking();
        else
            obj = new Bomber();
        model.listObject.push(obj);
    }
}