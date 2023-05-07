class Control {
    constructor() {
        /*
        this.btnCreateScout = document.getElementById('createScout');
        this.btnCreateAttacking = document.getElementById('createAttacking');
        this.btnCreateBird = document.getElementById('createBird');
        this.btnCreateQuadrocopter = document.getElementById('createQuadrocopter');
        this.btnCreateBomber = document.getElementById('createBomber');

        this.labWork = document.getElementById('work');
        this.modePerson = document.getElementById('person');
        this.modeAuto = document.getElementById('auto');
        this.modeOff = document.getElementById('off');
        this.btnmodeAppy = document.getElementById('modeAppy');
        this.cbRadar = document.getElementById('radarOff');
        this.cbCamera = document.getElementById('cameraOff');
        this.btnbreakAppy = document.getElementById('breakAppy');
        this.btnReset = document.getElementById('reset');

        this.btnCreateScout.addEventListener('click', this.newObject('scout'));
        this.btnCreateAttacking.addEventListener('click', this.newObject('attacking'));
        this.btnCreateBird.addEventListener('click', this.newObject('bird'));
        this.btnCreateQuadrocopter.addEventListener('click', this.newObject('quadrocopter'));
        this.btnCreateBomber.addEventListener('click', this.newObject('bomber'));
        */

        //Не сделаанные
        /*this.labWork.addEventListener('click', this.play.bind(this));
        this.modePerson.addEventListener('click', this.play.bind(this));
        this.modeAuto.addEventListener('click', this.play.bind(this));
        this.modeOff.addEventListener('click', this.play.bind(this));
        this.btnmodeAppy.addEventListener('click', this.play.bind(this));
        this.cbRadar.addEventListener('click', this.play.bind(this));
        this.cbCamera.addEventListener('click', this.play.bind(this));
        this.btnbreakAppy .addEventListener('click', this.play.bind(this));
        this.btnReset.addEventListener('click', this.play.bind(this));
*/
        setInterval(() => this.update(), 100);
    }


    update() {
        model.update();
        view.draw();
    }

    newObject(t) {
        let obj;
        if (t == 'scout')
            obj = new Scout();
        else if (t == 'attacking')
            obj = new Attacking();
        else if (t == 'bird')
            obj = new Bird();
        else if (t == 'quadrocopter')
            obj = new Quadrocopter();
        else if (t == 'bomber')
            obj = new Bomber();
        model.listObject.push(obj);
    }
}
