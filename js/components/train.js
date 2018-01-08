
import { trainWidth, trainOuterRadius, trainColor, trainLength, trainCompartmentColor } from '../constants';

export default class train{
    constructor(id, direction, speed, track){
        this.id = id;
        this.direction = direction;
        this.pos = {x: track.x, y: track.y};
        this.speed = speed;
        this.track = track;
    }

    show(){
        if (this.direction == 'E'){
            p5.strokeWeight(1);
            p5.fill(trainColor);
            p5.rect(this.pos.x, this.pos.y, trainLength, trainWidth, trainOuterRadius ,trainOuterRadius,trainOuterRadius,trainOuterRadius );
            for (let x = this.pos.x+40 ; x< this.pos.x + trainLength; x += 40 ){
                p5.strokeWeight(2);
                p5.stroke(trainCompartmentColor);
                p5.line(x, this.pos.y, x, this.pos.y + trainWidth);
            }

        }else if (this.direction == 'W') {
            p5.strokeWeight(1);
            p5.fill(trainColor);
            p5.rect(this.pos.x - trainLength, this.pos.y, trainLength, trainWidth, trainOuterRadius ,trainOuterRadius,trainOuterRadius,trainOuterRadius );
            for (let x = this.pos.x- trainLength + 40 ; x < this.pos.x; x += 40 ){
                p5.strokeWeight(2);
                p5.stroke(trainCompartmentColor);
                p5.line(x, this.pos.y, x, this.pos.y + trainWidth);
            }

        }else if (this.direction == 'S'){
            p5.strokeWeight(1);
            p5.fill(trainColor);
            p5.rect(this.pos.x, this.pos.y, trainWidth, trainLength, trainOuterRadius ,trainOuterRadius,trainOuterRadius,trainOuterRadius );
            for (let y = this.pos.y + 40 ; y < this.pos.y + trainLength; y += 40 ){
                p5.strokeWeight(2);
                p5.stroke(trainCompartmentColor);
                p5.line(this.pos.x, y, this.pos.x + trainWidth, y);
            }
        }else if (this.direction == 'N'){
            p5.strokeWeight(1);
            p5.fill(trainColor);
            p5.rect(this.pos.x , this.pos.y - trainLength, trainWidth, trainLength, trainOuterRadius ,trainOuterRadius,trainOuterRadius,trainOuterRadius );
            for (let y = this.pos.y - trainLength + 40 ; y < this.pos.y; y += 40 ){
                p5.strokeWeight(2);
                p5.stroke(trainCompartmentColor);
                p5.line(this.pos.x, y, this.pos.x + trainWidth, y);
            }
        }
    }

    update(){
        
    }

}