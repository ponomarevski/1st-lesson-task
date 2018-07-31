'use strict';

const MOBILE_SCREEN = {
    SENSOR : "SENSOR",
    PUSH_BUTTON : "PUSH_BUTTON"
}

class Computer {   

    constructor(displayDiagonal, ram) {
        this.displayDiagonal = displayDiagonal;
        this.ram = ram;
        this.isTurnOn = false;
    }

    activate() {
       console.log('Computer is turn on');
       this.isTurnOn = true;
    }

    disable() {
        console.log('Computer is turn off');
        this.isTurnOn = false;
    }

    showState() {
        if(this.isTurnOn) {
            console.log('Computer is working');
        } else {
            console.log('Computer is disabled');
        }
    }

    getInfo() {
        return `Display diagonal : ${this.displayDiagonal}
                Ram: ${this.ram}`
    }
}
let computer = new Computer(22, 4);


class PC extends Computer { 

    constructor(displayDiagonal, ram, weight) {
        super(displayDiagonal, ram)
        this.weight = weight;
    }

    showState() {
        if(this.isTurnOn) {
            console.log('PC is working');
        } else {
            console.log('PC is disabled');
        }
    }

    getInfo(){
        let parentInfo = super.getInfo();
        return `${parentInfo}
                Weight: ${this.weight}`
    }            
};
let pc = new PC(21, 8, 5);

class Laptop extends Computer {

    constructor(displayDiagonal, ram, weight, usb) {
        super(displayDiagonal, ram)
        this.usb = usb;
    }
    showState() {
        if(this.isTurnOn) {
            console.log('Laptop is working');
        } else {
            console.log('Laptop is disabled');
        }
    }

    getInfo(){
        let parentInfo = super.getInfo();
        return `${parentInfo}
                USB: ${this.usb}`
    }
};
let laptop = new Laptop(19, 4, 3);


class MobilePhone extends Computer {

    constructor(displayDiagonal, ram, sensorScreen) {
        super(displayDiagonal, ram)
        this.sensorScreen = MOBILE_SCREEN[sensorScreen];
    }
    showState() {
        if(this.isTurnOn) {
            console.log('Mobilephone is working');
        } else {
            console.log('Mobilephone is disabled');
        }
    }

    getInfo(){
        let parentInfo = super.getInfo();
        return `${parentInfo}
                Screen ${this.sensorScreen}`
    }
};

let mobilephone = new MobilePhone(5.1, 2, MOBILE_SCREEN.SENSOR);

class Server extends PC{
    constructor(ram, weight, memoryCapacity) {
        super(null, ram, weight)
        this.memoryCapacity = memoryCapacity;
    }

    showState() {
        if(this.isTurnOn) {
            console.log('Server is working');
        } else {
            console.log('Server is disabled');
        }
    }

    getInfo(){
        let parentInfo = super.getInfo();
        return `${parentInfo}
                Memory Capacity ${this.weight}`
    }    

};

let server = new Server(20, 100, 50 );



