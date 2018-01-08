import * as constants from '../constants';
import { trainWidth, trainOuterRadius, trainColor, trainLength } from '../constants';

export default class train{
    constructor(id, direction, x, y, speed, track){
        this.id = id;
        this.direction = direction;
        this.pos = {x: x, y: y};
        this.speed = speed;
        this.track = track;
    }

    show(){
        p5.fill(trainColor);
        p5.rect(this.pos.x, this.pos.y, trainLength, trainWidth, trainOuterRadius ,trainOuterRadius,trainOuterRadius,trainOuterRadius );   

    }

}