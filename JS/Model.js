//DroneTracking

class Model {
    constructor() {
        this.init();
        this.listObject = [];
        this.auto = new Auto();
        this.autoOn = false;
    }

    init() {
        
    }

	update() {
        for (let obj of this.listObject)
            obj.update();
        if (this.autoOn == true)
            this.auto.update();
	}

    step(pos, target, speed) {
        let angle = Math.atan2(pos.y - target.y, pos.x - target.x) - Math.PI;
        pos.x += Math.round(speed/2 * Math.cos(angle));
        pos.y += Math.round(speed/2 * Math.sin(angle));

        return pos;
    }

    inRadar(pos) {
        let t = false;
            if (pos.y <= 1.17 * pos.x + 185 && pos.y <= -1.15*pos.x+1486.52)
                t = true;
            else
                t = false;
        return t;
    }

    rndSpawn() {
        let temp =  {
            x: Math.round(Math.random() * view.size.width),
            y: Math.round(Math.random() * view.size.height)
        };;
        let pos;
        if (Math.random() >= 0.5)
            pos = {
                x: temp.x,
                y: 0
            }; 
        else {
            if (Math.random() >= 0.5)
                pos = {
                    x: 0,
                    y: temp.y/2
                };
            else
                pos = {
                    x: view.size.width,
                    y: temp.y/2
                };
        }
        return pos;
    }


    rndPos(pos) {
        let t = {
            x: pos.x + Math.round(Math.random() * 200-100),
            y: pos.y + Math.round(Math.random() * 200-75)
        };
        return t;
    }

    newRocket(tar) {
        let obj = new Rocket(tar);
        this.listObject.push(obj);
    }

    delta(pos, target) {
        return Math.sqrt(Math.pow(pos.x - target.x, 2) + Math.pow(pos.y - target.y, 2)); 
    }
}
