import fs = require("fs");

export class OutputWriter {
    static filename: string;
    static fileContent: string = "";

    static appendData(data: string) {
        this.fileContent += data + "\n";
    }

    static write() {
        fs.writeFileSync(this.filename, this.fileContent);
        console.log(this.fileContent);
    }
}