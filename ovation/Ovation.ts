export class Ovation {
    caseNumber: number;
    people: number;
    ovations: Array<number>;

    added: number;
    output: string;

    constructor(input: Array<number>, caseNumber: number) {
        this.ovations = new Array<number>();
        this.caseNumber = caseNumber;

        this.people = input[0];
        for (let i = 1 ; i < input.length ; i++) {
            this.ovations[i - 1] = input[i];
        }
    }

    compute() {
        let missing = 0;
        let applausing = 0;
        for (let i = 0; i < this.people + 1 ; i++) {
            if (applausing < i && this.ovations[i] > 0) {
                missing ++;
                applausing ++;
                this.ovations[i] ++;
            }
            applausing += this.ovations[i];
        }
        this.added = missing;
    }

    strOutput() {
        return "Case #" + this.caseNumber + ": " + this.added;
    }

}