import Train from './train';

createTrain = ()=>{
	var txt=loadString("../txt/train.txt");
    var trains= split(txt,'\n');
    console.log(trains);
	//get each track
	for(var i=0;i<tracks.length();i++){
		parseTrackData(tracks[i]);
	}
}

parseTrackData =(train,i)=>{
	//get each track info
	trackData= split(train,' ');
}

export default createTrain;