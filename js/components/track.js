import trackImg from './trainTrack.png';


export default class track{
	constructor(id,direction,x,y){
		this.id=id;
		this.direction=direction;
		this.x=x;
		this.y=y;
		this.img = p5.loadImage(trackImg);
	}
	show(){
		p5.fill("black");
		if (this.direction=="e" ){
			p5.rect(this.x,this.y,1000,50);
			p5.image(this.img,this.x,this.y,1000,50);
		}

		if (this.direction=="s" ){
			console.log("asd");
			p5.image(this.img,this.x,this.y,50,8000);
			//p5.rect(this.x,this.y,50,800);
		}
	}
}
