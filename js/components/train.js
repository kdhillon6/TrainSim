
import { trainWidth, trainOuterRadius, trainColor, trainLength, trainCompartmentColor, trainDeaccelerate, outerR, innerR, collisionThresold, acceleration } from '../constants';

export default class train{
    constructor(id, direction, speed, track){
        this.id = id;
        this.direction = direction;
        this.pos = {x: track.x, y: track.y};
        this.acceleration = acceleration;
        this.move = 1;
        if (this.direction == 'W'){
            this.leftTop = { x: this.pos.x, y: this.pos.y };
            this.leftBottom = { x: this.pos.x, y: this.pos.y + trainWidth };
            this.rightTop = { x: this.pos.x + trainLength , y : this.pos.y };
            this.rightBottom = { x: this.pos.x + trainLength, y : this.pos.y + trainWidth };

            this.outerRpos = { x: this.pos.x - outerR , y: this.pos.y + trainWidth/2};
            this.innerRpos = { x: this.pos.x + innerR , y: this.pos.y + trainWidth/2};

        }else if (this.direction == 'E'){
            this.leftTop = { x: this.pos.x - trainWidth , y: this.pos.y };
            this.leftBottom = { x: this.pos.x - trainWidth, y: this.pos.y + trainWidth };
            this.rightTop = { x: this.pos.x , y : this.pos.y };
            this.rightBottom = { x: this.pos.x, y : this.pos.y + trainWidth };

            this.outerRpos = { x: this.pos.x + outerR, y: this.pos.y + trainWidth/2};
            this.innerRpos = { x: this.pos.x - innerR , y: this.pos.y + trainWidth/2};

        }else if (this.direction == 'S'){
            this.leftTop = { x: this.pos.x , y: this.pos.y - trainLength };
            this.leftBottom = { x: this.pos.x, y: this.pos.y };
            this.rightTop = { x: this.pos.x + trainWidth , y : this.pos.y - trainLength };
            this.rightBottom = { x: this.pos.x + trainWidth, y : this.pos.y };

            this.outerRpos = { x: this.pos.x + trainWidth/2 , y: this.pos.y + outerR };
            this.innerRpos = { x: this.pos.x + trainWidth/2 , y: this.pos.y - innerR};

        }else if (this.direction == 'N'){
            this.leftTop = { x: this.pos.x, y: this.pos.y };
            this.leftBottom = { x: this.pos.x, y: this.pos.y + trainLength };
            this.rightTop = { x: this.pos.x + trainWidth , y : this.pos.y };
            this.rightBottom = { x: this.pos.x + trainWidth, y : this.pos.y + trainLength };

            this.outerRpos = { x: this.pos.x + trainWidth/2 , y: this.pos.y - outerR };
            this.innerRpos = { x: this.pos.x + trainWidth/2 , y: this.pos.y + innerR};
        }

        this.speed = speed;
        this.track = track;
    }

    show(){
        if (this.direction == 'E'){
            p5.strokeWeight(1);
            p5.fill(trainColor);
            p5.rect(this.pos.x - trainLength, this.pos.y, trainLength, trainWidth, trainOuterRadius ,trainOuterRadius,trainOuterRadius,trainOuterRadius );
            for (let x = this.pos.x- trainLength + 40 ; x < this.pos.x; x += 40 ){
                p5.strokeWeight(2);
                p5.stroke(trainCompartmentColor);
                p5.line(x, this.pos.y, x, this.pos.y + trainWidth);
            }

        }else if (this.direction == 'W') {

            p5.strokeWeight(1);
            p5.fill(trainColor);
            p5.rect(this.pos.x, this.pos.y, trainLength, trainWidth, trainOuterRadius ,trainOuterRadius,trainOuterRadius,trainOuterRadius );
            for (let x = this.pos.x+40 ; x< this.pos.x + trainLength; x += 40 ){
                p5.strokeWeight(2);
                p5.stroke(trainCompartmentColor);
                p5.line(x, this.pos.y, x, this.pos.y + trainWidth);
            }

        }else if (this.direction == 'N'){
            p5.strokeWeight(1);
            p5.fill(trainColor);
            p5.rect(this.pos.x, this.pos.y, trainWidth, trainLength, trainOuterRadius ,trainOuterRadius,trainOuterRadius,trainOuterRadius );
            for (let y = this.pos.y + 40 ; y < this.pos.y + trainLength; y += 40 ){
                p5.strokeWeight(2);
                p5.stroke(trainCompartmentColor);
                p5.line(this.pos.x, y, this.pos.x + trainWidth, y);
            }
        }else if (this.direction == 'S'){
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



    update(Trains){
        this.updateCordinate();
        if (this.direction == 'E'){
            var stop = false;
            for (let i=0; i< Trains.length ; i++){
                var other = Trains[i];
                //Dont check with self
                if (this.id == other.id){
                    continue;
                }
                if ( other.direction == 'N' || other.direction == 'S' ){
                    var dist = p5.dist(this.outerRpos.x, this.outerRpos.y, other.innerRpos.x, other.innerRpos.y);
                    if (dist < collisionThresold)stop = true;
                }else {
                    if (other.pos.y == this.pos.y){
                        if (p5.dist(this.outerRpos.x, this.outerRpos.y, other.innerRpos.x, other.innerRpos.y) <collisionThresold){
                            stop = true;
                        }
                    }
                }
            }
            if (stop){
                this.move -= this.move*trainDeaccelerate;
                if (this.move <= 0 ){
                    this.move = 0;
                }
            }else {
                if (this.move >= this.speed){
                    this.move = this.speed;
                }else{
                    this.move += this.move *acceleration; 
                }
            }
            this.pos.x += this.move;
            

        }else if ( this.direction == 'W'){
            var stop = false;
            for (let i=0; i< Trains.length ; i++){
                var other = Trains[i];
                //Dont check with self
                if (this.id == other.id){
                    continue;
                }
                if ( other.direction == 'N' || other.direction == 'S' ){
                    var dist = p5.dist(this.outerRpos.x, this.outerRpos.y, other.innerRpos.x, other.innerRpos.y);
                    if (dist < collisionThresold)stop = true;
                }else {
                    if (other.pos.y == this.pos.y){
                        if (p5.dist(this.outerRpos.x, this.outerRpos.y, other.innerRpos.x, other.innerRpos.y) <collisionThresold){
                            stop = true;
                        }
                    }
                }
            }
            if (stop){
                this.move -= this.move*trainDeaccelerate;
                if (this.move <= 0 ){
                    this.move = 0;
                }
            }else {
                if (this.move >= this.speed){
                    this.move = this.speed;
                }else{
                    this.move += this.move *acceleration; 
                }
            }
            this.pos.x -= this.move;
        }
        else if (this.direction == 'N'){

            var stop = false;
            for (let i=0; i< Trains.length ; i++){
                var other = Trains[i];
                //Dont check with self
                if (this.id == other.id){
                    continue;
                }
                if ( other.direction == 'E' || other.direction == 'W' ){
                    var dist = p5.dist(this.outerRpos.x, this.outerRpos.y, other.innerRpos.x, other.innerRpos.y);
                    if (dist < collisionThresold)stop = true;
                }else {
                    if (other.pos.x == this.pos.x){
                        if (p5.dist(this.outerRpos.x, this.outerRpos.y, other.innerRpos.x, other.innerRpos.y) <collisionThresold){
                            stop = true;
                        }
                    }
                }
            }
            if (stop){
                this.move -= this.move*trainDeaccelerate;
                if (this.move <= 0 ){
                    this.move = 0;
                }
            }else {
                if (this.move >= this.speed){
                    this.move = this.speed;
                }else{
                    this.move += this.move *acceleration; 
                }
            }
            this.pos.y -= this.move;

        }else if (this.direction == 'S'){
            var stop = false;
            for (let i=0; i< Trains.length ; i++){
                var other = Trains[i];
                //Dont check with self
                if (this.id == other.id){
                    continue;
                }
                if ( other.direction == 'E' || other.direction == 'W' ){
                    var dist = p5.dist(this.outerRpos.x, this.outerRpos.y, other.innerRpos.x, other.innerRpos.y);
                    if (dist < collisionThresold)stop = true;
                }else {
                    if (other.pos.x == this.pos.x){
                        if (p5.dist(this.outerRpos.x, this.outerRpos.y, other.innerRpos.x, other.innerRpos.y) <collisionThresold){
                            stop = true;
                        }
                    }
                }
            }
            if (stop){
                this.move -= this.move*trainDeaccelerate;
                if (this.move <= 0 ){
                    this.move = 0;
                }
            }else {
                if (this.move >= this.speed){
                    this.move = this.speed;
                }else{
                    this.move += this.move *acceleration; 
                }
            }
            
            this.pos.y += this.move;
        }
    
    }

    updateCordinate(){
        if (this.direction == 'W'){
            this.leftTop = { x: this.pos.x, y: this.pos.y };
            this.leftBottom = { x: this.pos.x, y: this.pos.y + trainWidth };
            this.rightTop = { x: this.pos.x + trainLength , y : this.pos.y };
            this.rightBottom = { x: this.pos.x + trainLength, y : this.pos.y + trainWidth };

            this.outerRpos = { x: this.pos.x - outerR , y: this.pos.y + trainWidth/2};
            this.innerRpos = { x: this.pos.x + innerR , y: this.pos.y + trainWidth/2};

        }else if (this.direction == 'E'){
            this.leftTop = { x: this.pos.x - trainWidth , y: this.pos.y };
            this.leftBottom = { x: this.pos.x - trainWidth, y: this.pos.y + trainWidth };
            this.rightTop = { x: this.pos.x , y : this.pos.y };
            this.rightBottom = { x: this.pos.x, y : this.pos.y + trainWidth };

            this.outerRpos = { x: this.pos.x + outerR, y: this.pos.y + trainWidth/2};
            this.innerRpos = { x: this.pos.x - innerR , y: this.pos.y + trainWidth/2};

        }else if (this.direction == 'S'){
            this.leftTop = { x: this.pos.x , y: this.pos.y - trainLength };
            this.leftBottom = { x: this.pos.x, y: this.pos.y };
            this.rightTop = { x: this.pos.x + trainWidth , y : this.pos.y - trainLength };
            this.rightBottom = { x: this.pos.x + trainWidth, y : this.pos.y };

            this.outerRpos = { x: this.pos.x + trainWidth/2 , y: this.pos.y + outerR };
            this.innerRpos = { x: this.pos.x + trainWidth/2 , y: this.pos.y - innerR};

        }else if (this.direction == 'N'){
            this.leftTop = { x: this.pos.x, y: this.pos.y };
            this.leftBottom = { x: this.pos.x, y: this.pos.y + trainLength };
            this.rightTop = { x: this.pos.x + trainWidth , y : this.pos.y };
            this.rightBottom = { x: this.pos.x + trainWidth, y : this.pos.y + trainLength };

            this.outerRpos = { x: this.pos.x + trainWidth/2 , y: this.pos.y - outerR };
            this.innerRpos = { x: this.pos.x + trainWidth/2 , y: this.pos.y + innerR};
        }
    }
}