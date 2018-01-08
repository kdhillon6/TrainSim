import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import * as constants from './constants';
import Track from './components/track';

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
  window.Tracks = []
  var train = new Train(1, 'S', 5, {x: 100, y: 0});


  // Setup function
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    p5.frameRate(10);

    createTrain();
    
    // Your stuff goes in here
  }

  // Draw function
  p5.draw = () => {
    p5.background('yellow');
    train.show();
  }
}

export default sketch;
