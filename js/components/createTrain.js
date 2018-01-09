import Train from './train';
import fs from 'fs';

export function createTrain(){
	var txt = fs.readFileSync ('txt/trains.txt', 'utf8' );
	var lines = txt.split("\n");
	
	for (let i=1; i < lines.length ; i++){
		createTrainObj(lines[i]);
	}

}


function createTrainObj(line){
	let data = line.split(" ");
	console.log(data);

	let obj = new Train(parseInt(data[0]), data[1], parseInt(data[2]), { x: parseInt(data[3]), y: parseInt(data[4]) });
	Trains.push(obj);
	//console.log("Appended obj:" + obj.id);
}
