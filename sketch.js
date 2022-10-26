let x1, x2, y2, x3, y3, x4;
let a = 0.2;
let s = 0.2;

//Infinite Loop
function setup() {
  createCanvas(800, 800);
  background(0);
  // draw from center opposed to
  // upper left corner
  angleMode(DEGREES);
  colorMode(HSB, 360, 50, 30, 20);
  translate(width / 2, height / 2);
  scale(1.5);
  let pedals = random(10, 40);
  let layers = random(10, 40);
  let ang = 360 / pedals;
  

  // layer with different variables
  for (let j = layers; j > 0; j--) {
    let ly = j / layers;
    x1 = random(200 * ly, 205 * ly);
    x4 = random(285 * ly, 245 * ly);
    x2 = random(190 * ly, 215 * ly);
    let maxX2 = x2 * tan(ang) * 0.15;
    y2 = random(15 * ly, maxX2 * ly);
    x3 = random(20 * ly, 230 * ly);
    y3 = random(15 * ly, maxX2);
    let hue = random(615);
    let sat = random(50, 100);
    let brt = random(50, 100);
    let alph = random(30, 100);
    fill(hue, sat, brt, alph);

    // draw pedals for layer
    for (let i = 0; i < pedals; i++) {
      noStroke();
      beginShape();
      curveVertex(x1, 3);
      curveVertex(x1, 3);
      curveVertex(x2, y2);
      curveVertex(x3, y3);
      curveVertex(x4, 5);
      curveVertex(x4, 5);
      endShape();
      beginShape();
      curveVertex(x1, 2);
      curveVertex(x1, 2);
      curveVertex(x2, -y2);
      curveVertex(x3, -y3);
      curveVertex(x4, 3);
      curveVertex(x4, 3);
      endShape();
      //stroke(hue,sat,brt,alph);
      strokeWeight(5);
      //line(x1,2,x4,2);
      rotate(ang);
    }rotate(ang*2); 
      }
}