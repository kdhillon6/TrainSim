import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import * as constants from './constants';
import {Track} from './components/createTrack';
import Train from './components/train';
import { width } from './constants';
import { createTrain } from './components/createTrain';


// Sketch scope
const sketch = (p5) => {

 

  // Variables scoped within p5
  const canvasWidth = constants.width;
  const canvasHeight = constants.height;

  // make library globally available
  window.p5 = p5;
  window.Trains = [];
  window.Tracks = [];

  createTrain();

  // Setup function
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    p5.frameRate(10);
    // Your stuff goes in here
  }

  // Draw function
  p5.draw = () => {
    p5.background('yellow');
    for (let i =0 ; i<Trains.length ; i++){
      Trains[i].show();
    }
  }
}

var createTrack=()=>{
  for (var i=0;i<Track.length;i++){
    Track[i].show();
  }
}

export default sketch;
