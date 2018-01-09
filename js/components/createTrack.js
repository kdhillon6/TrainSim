import {Track} from './track';

var trackSize=50;
var txt;
var trackData=[];
var tracksObjects=[];//obj

var parseEachTrack=()=>{
	txt=loadString("../txt/track.txt");
	var tracks= split(txt,'\n');
	//get each track
	for(var i=0;i<tracks.length;i++){
		parseTrackData(tracks[i]);
	}
}

var parseTrackData =(track)=>{
	//get each track info
	trackData= split(track,' ');
	//create a track
	addTrack(trackData);
}

//call this function from sketch to create tracks
var addTrack=(trackData)=>{
	tracksObjects.push(new track(trackData[0],trackData[1],trackData[2],trackData[3]));
}

export default tracksObjects;