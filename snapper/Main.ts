import {InputReader} from "./InputReader";
import {Calculator} from "./Snapper";

let input = new InputReader(__dirname + "/input.txt");
input.readFile();
input.parseFile();

for (let i = 0; i < input.numberOfLines; i++) {
    console.log("Case #" + i + ": " + Calculator.compute(input.lines[i]));
}