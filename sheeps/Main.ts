import {InputReader} from "./InputReader";
import {OutputWriter} from "../OutputWriter";

let reader = new InputReader(__dirname + "/A-large.in");
OutputWriter.filename = "A.txt";

reader.readFile();
reader.parseFile();

launch();

function launch(){
    for (let i = 0; i < reader.numberOfLines ; i++ ) {
        console.log(reader.lines[i]);
        compute(i+1, reader.lines[i]);
    }
    OutputWriter.write();
}

function compute(caseNumber: number, value: number) {
    if(value === 0){
        OutputWriter.appendData("Case #"+caseNumber+": INSOMNIA");
    }else{
        let numbers = new Array<boolean>(10);
        for(let i=0;i<10;i++){
            numbers[i]=false;
        }
        let currentValue = value;
        let foundIt = false;
        let stopValue = 1000000000000000;
        numbers = findDigits(currentValue, numbers);
        foundIt = found(numbers);
        for(let i=2 ;i < stopValue && !foundIt;i ++) {
            currentValue = i*value;
            numbers = findDigits(currentValue, numbers);
            foundIt = found(numbers);
        }
        OutputWriter.appendData("Case #"+caseNumber+": "+currentValue);
    }

}


function findDigits(value: number, numbers: Array<boolean>) {
    let str = String(value);
    for (let i = 0;i < str.length ; i ++){
        numbers[str[i]] = true;
    }
    return numbers;
}

function found(numbers: Array<boolean>){
    for(let i =0;i<numbers.length;i++){
        if(!numbers[i])
            return false;
    }
    
    return true;
}