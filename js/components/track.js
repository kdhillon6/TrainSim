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

export default track;