// create a particle system so it can populate
const particles = [];

// TODO: FIX README
let img;
let mon;
let rickRoll;
function preload() {
  img = loadImage('/././heart1.png');
  mon = loadImage('/././mon.png');
  rickRoll = loadSound('/././rick.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  rickRoll.play();
  rickRoll.loop();
}

function draw() {

  background(0);

  tint(255,255);
  image(mon, width/2 - width/10, height/2-width/10, width/5, width/5);

  translate(width/2, height/2);
  //particle update
  for (let i = 1; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }


  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }

  noFill();
  stroke(255);
  strokeWeight(2);

  // beginShape();
  // for(let i=0; i<2; i++){
  //   // draw the cardioid heart shape: https://blogs.lcps.org/academiesonline/2021/02/13/the-equation-of-the-heart/
  //   for (let a=0; a < TWO_PI; a+= 0.01) {
  //     let r = 16-i*4;
  //     let x = r * 16 * pow(sin(a), 3);
  //     let y = -r*(13 * cos(a) - 5*cos(2*a) - 2 * cos(3*a) - cos(4*a));
  //     vertex(x,y);
  //   }
  //   }

  // endShape();
}

class Particle {

  constructor() {
    this.r = 12;
    this.a = random(0,TWO_PI);
    this.x = this.r * 16 * pow(sin(this.a), 3);
    this.y = -this.r*(13 * cos(this.a) - 5*cos(2*this.a) - 2 * cos(3*this.a) - cos(4*this.a));
    this.vx = sin(this.a)
    this.vy = -cos(this.a);
    this.alpha = 255;
    this.size = 5;
  }

  finished() {
    return this.alpha < 0 
  }

  update() {
    if(this.alpha > 100){
      if(this.a<=PI && this.a>PI/2){
        this.x += this.vx;
      }
      else{
        this.x += this.vx;
      }
      if(this.a<=PI && this.a>PI/2){
        this.y += this.vy;
      } 
      else{
        this.y += this.vy;
      }

    
    }
   
    this.alpha -= random(2,5);
    this.size += 0.7;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(255, this.alpha);
    // ellipse(this.x, this.y, this.size);
    tint(255,this.alpha);
    image(img, this.x, this.y, this.size, this.size);

}
}

// function mousePressed() {
//   if(!rickRoll.isPlaying){
//     rickRoll.play();
//   }
//   else{
//     rickRoll.pause();
//   }
// }