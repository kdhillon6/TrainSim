import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import * as constants from './constants';
import Track from './components/track';

import Train from './components/train';
import { width } from './constants';

// Sketch scope
const sketch = (p5) => {



  // Variables scoped within p5
  const canvasWidth = constants.width;
  const canvasHeight = constants.height;

  // make library globally available
  window.p5 = p5;

<<<<<<< HEAD
  var track= new Track;
=======
  //Varibles 
  var train= new Train(1, 'W', 10, {x:width, y:100});

>>>>>>> 991e7dafffcfe7cf33454d5906e648d57e45ccd1

  // Setup function
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    p5.frameRate(10);

    
    
    // Your stuff goes in here
  }

  // Draw function
  p5.draw = () => {
    p5.background('yellow');
    train.show();
  }
}

export default sketch;
