//import pic from "./pic.jpg";

export default class track{
	constructor(id,direction,x,y){
		this.id=id;
		this.direction=direction;
		this.x=x;
		this.y=y;
		//this.img = p5.loadImage(trackImg);
	}
	show(){
		
		if (this.direction=="e" ){
			p5.fill("black");
			p5.noStroke();
			p5.rect(this.x,this.y,1000,trackSize);
			//p5.image(this.img,this.x,this.y,1000,50);
		}
		if (this.direction=="s" ){
			p5.fill("red");
			p5.noStroke();
			//p5.image(this.img,this.x,this.y,50,8000);
			p5.rect(this.x,this.y,trackSize,800);
		}
		if (this.direction=="n" ){
			p5.fill("white");
			p5.noStroke();
			//p5.image(this.img,this.x,this.y,50,8000);
			p5.rect(this.x,this.y,trackSize,-1000);
		}
		if (this.direction=="w" ){
			p5.fill("green");
			p5.noStroke();
			//p5.image(this.img,this.x,this.y,50,8000);
			p5.rect(this.x,this.y,-800,trackSize);
		}
	}
}
