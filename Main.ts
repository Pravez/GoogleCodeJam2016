import {InputReader} from "./InputReader";
import {Ovation} from "./Ovation";
import {OutputWriter} from "./OutputWriter";

let input = new InputReader(__dirname + "/input/A-small-practice.in");

input.readFile();
input.parseFile();

OutputWriter.filename = "A.txt";

for (let i = 0; i < input.numberOfLines ; i++) {
    let ov = new Ovation(input.getLine(i), i + 1);
    ov.compute();
    OutputWriter.appendData(ov.strOutput());
}

OutputWriter.write();
