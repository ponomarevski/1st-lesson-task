'use stict';

function Computer(displayDiagonal, ram) {
    this.displayDiagonal = displayDiagonal;
    this.ram = ram;
    this.isTurnOn = false;


    this.activate = function () {
        console.log('Computer is turn on');
        this.isTurnOn = true;
    }

    this.disable = function () {
        console.log('Computer is turn off');
        this.isTurnOn = false;
    }

    this.showState = function () {
        if (this.isTurnOn) {
            console.log('Computer is working');
        } else {
            console.log('Computer is disabled');
        }
    }

    this.getInfo = function () {
        return `Display diagonal : ${this.displayDiagonal}
                Ram: ${this.ram}`
    }
};
let computer = new Computer(22, 4);

function PC(displayDiagonal, ram, weight) {
    Computer.apply(this, arguments);

    this.weight = weight;

    this.showState = function () {
        if (this.isTurnOn) {
            console.log('PC is working');
        } else {
            console.log('PC is disabled');
        }
    }

    let parentGetInfo = this.getInfo;
    this.getInfo = function () {
        let parentInfo = parentGetInfo.call(this);
        return `${parentInfo}
        Weight: ${this.weight}`
    }
};
let pc = new PC(21, 8, 5);