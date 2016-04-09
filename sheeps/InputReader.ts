import fs = require("fs");

export class InputReader {

    public static RET: string = "\n";

    file: string;
    content: Buffer;
    stringContent: string;
    numberOfLines: number;
    lines: Array<number>;

    constructor(file: string) {
        this.file = file;
        this.lines = new Array<number>();
    }

    readFile() {
        this.content = fs.readFileSync(this.file);
        this.stringContent = this.content.toString("ascii", 0, this.content.length);
        this.numberOfLines = Number(this.stringContent.substr(0, this.stringContent.indexOf(InputReader.RET)));
        this.stringContent = this.stringContent.substr(this.stringContent.indexOf(InputReader.RET) + 1, this.stringContent.length);
    }

    parseFile() {
        let array = this.stringContent.split(InputReader.RET);

        for (let i = 0; i < array.length; i++) {
            this.lines.push(Number(array[i]));
        }
    }
}