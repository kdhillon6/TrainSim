import Train from './train';
import fs from 'fs';

export function createTrain(){
	var txt = fs.readFileSync ('txt/trains.txt', 'utf8' );
	var lines = txt.split("\n");
	
	for (let i=0; i < lines.length ; i++){
		createTrainObj(lines[i]);
	}

}


function createTrainObj(line){
	let data = line.split(" ");
	console.log(data);
	

}
