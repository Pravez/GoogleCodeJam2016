import {InputReader} from "./InputReader";
import {OutputWriter} from "./OutputWriter";

type IData = [number, number];
let reader = new InputReader(__dirname + "/input.txt");
OutputWriter.filename = "A.txt";

reader.readFile();
reader.parseFile();

launch();

function launch(){

    for(let i=0;i < reader.numberOfLines;i++){
        let str = String(reader.lines[i]);
        let index: IData;
        let flipNumber = 0;
        while(!verify(str)){
            index = findIndex(str);
            if(index[0] == -1){
                flip(str, str.length);
            }else{
                str = flip(str, index[0]);
                //str = flip(str, index[0]-index[1]-1);
            }
        }
        console.log(reader.lines[i] +" : " + str);
    }
}

function findIndex(str: string){
    let data: IData; 
    let i = str.indexOf("-");
    let decal = 0;
    if(i != -1){
        while(i < str.length && str[i+1] == "-"){
            decal++;
            i++;
        }
    }
    data = [i, decal];
    return data;
}

function verify(str:string){
    return str.indexOf("-") == -1;
}

function flip(str:string, position:number){
    let ret = "";
    for(let i=position; i > -1; i--){
        if(str[i] === "-"){
            ret += "+";
        }else if(str[i] === "+"){
            ret += "-";
        }
    }
    return ret;
}