//DroneTracking

class Model {
    constructor() {
        this.init();
        this.listObject = [];
    }

    init() {
        
    }

	update() {
        for (let obj of this.listObject)
            obj.update();
	}

    step(pos, target, speed) {
        let angle = Math.atan2(pos.y - target.y, pos.x - target.x) - Math.PI;
        pos.x += speed/2 * Math.cos(angle);
        pos.y += speed/2 * Math.sin(angle);

        return pos;
    }

    inRadar(obj) {
        let t = false;
            if (obj.pos.y <= 1.17 * obj.pos.x + 185 && obj.pos.y <= -1.15*obj.pos.x+1486.52)
                t = true;
            else
                t = false;
        return t;
    }

    rndSpawn() {
        let temp = this.rndPos();
        let pos;
        if (Math.random() >= 0.5) {
            pos = {
                x: temp.x,
                y: 0
            }; 
        }
        else {
            if (Math.random() >= 0.5) {
                pos = {
                    x: 0,
                    y: temp.y/2
                };
            }
            else {
                pos = {
                    x: view.size.width,
                    y: temp.y/2
                };
            }
        }
        return pos;
    }
    rndPos() {
        let pos = {
            x: Math.random() * view.size.width,
            y: Math.random() * view.size.height
        }
        return pos;
    }

    delta(pos, target) {
        return Math.sqrt(Math.pow(pos.x - target.x, 2) + Math.pow(pos.y - target.y, 2)); 
    }
}
