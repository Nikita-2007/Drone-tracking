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
}
