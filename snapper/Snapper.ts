export class Calculator {

    static compute(line: Array<number>) {
        console.log()
        let a = new SnapperArray(line[0]);
        a.clack(line[1]);
        return a.hasWorked();
    }
}

class SnapperArray {
    array: Array<Snapper> = new Array<Snapper>();

    constructor(snappNumber: number) {
        this.array.push(new Snapper(true, false));
        for (let i = 0; i < snappNumber ; i++) {
            this.array.push(new Snapper(false, false));
        }
    }

    clack(times: number) {
        this.array[0].clack(true);
        for (let clack = 0; clack < times; clack++) {
            for (let i = this.array.length - 1; i > 0; i--) {
                this.array[i].clack(this.array[i - 1].allume);
            }
            this.array[0].clack(true);
            console.log(clack);
            for (let i = 0; i < this.array.length; i++) {
                console.log(this.array[i]);
            }
        }
    }

    hasWorked() {
        return this.array[this.array.length - 1].on ? "ON" : "OFF";
    }
}

class Snapper {
    on: boolean;
    allume: boolean;

    constructor(on: boolean, allume: boolean) {
        this.on = on;
        this.allume = allume;
    }

    clack(courant: boolean) {
        if (courant) {
            this.on ? this.allume = !this.allume : this.on = true;
        } else {
            this.on = false;
        }
    }
}