import {Track} from './track';

//globals
var trackSize=50;
var txt;
var tracks=[];//string
var trackData=[];
var tracksObjects=[];//obj

parseEachTrack=()=>{
	txt=loadString("../txt/track.txt");
	tracks= split(txt,'\n');
	//get each track
	for(int i=0;i<tracks.length();i++){
		parseTrackData(tracks[i]);
	}
}

parseTrackData =(track,i)=>{
	//get each track info
	trackData= split(track,' ');
	//create a track
	createTrack(trackData,i);
}

//call this function from sketch to create tracks
createTrack=(trackData,i)=>{
	tracksObjects.push(new track(trackData[0],trackData[1],trackData[2],trackData[3]));
	tracksObjects[i].show();
}

export default createTrack;