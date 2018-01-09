import track from './track';
import fs from 'fs';

//call this function from sketch to create tracks
export function createTrack(){
	var txt = fs.readFileSync('txt/track.txt','utf8');
	var tracks= txt.split("\n");
	
	//get each track
	for(let i=0;i<tracks.length;i++){
		var trackData= tracks[i].split(" ");
		
		let t1 = new track(trackData[0],trackData[1],parseInt(trackData[2]),parseInt(trackData[3]));
		Tracks.push(t1);
	}
}
