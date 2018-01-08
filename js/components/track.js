var trackSize=50;
var txt;

class track{
	constructor(id,direction,x,y){
		this.id=id;
		this.direction=direction;
		this.x=x;
		this.y=y;
	}
	show(){
		rect(x,y,x+trackSize,y+trackSize);
	}
}

parseEachTrack=function(){
	txt=loadString("../txt/track.txt");
	var tracks= split(eachTrack,'\n');
	for(int i=0;i<tracks.length();i++){
		parseTrackData(tracks(i));
	}
}

parseTrackData =function(track){
	track.
}

export default track;