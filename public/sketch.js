var canvasSize = 450;
var backgroundColor = 255;
var circleOfFifths = new CircleOfFifths();

function setup() {
  createCanvas(canvasSize, canvasSize);  
}

function draw() {
  background(backgroundColor);
  translate(width/2, height/2);
  
  //outer circle
  drawCircle(canvasSize/2.8);
  
  //inner circle
  drawCircle(canvasSize/4.5);
  
  //notes
  drawNotes();

  //draws major, minor, diminished arcs
  drawArcs();
}

function drawCircle(size){
  ellipseMode(RADIUS);
  stroke(20);
  noFill();
  ellipse(0, 0, size);
}

function drawArcs(){
  var arcSize = canvasSize/2.3;
  noFill();

  //major
  stroke(0, 0, 255);
  drawArc(toRadians(-135), toRadians(-45), arcSize);

  //minor
  stroke(0, 255, 0);
  drawArc(toRadians(-45), toRadians(45), arcSize);

  //diminished 
  stroke(255, 0, 0);
  drawArc(toRadians(45), toRadians(70), arcSize);
}

function drawArc(startAngle, endAngle, size){
  arc(0, 0, size, size, startAngle, endAngle);
}

function drawNotes(){
  var radius = canvasSize/3.3;
  
  textSize(canvasSize/15);
  fill(0, 102, 153);

  //Translate a little due to text offset
  translate(-canvasSize/40, canvasSize/50);

  var notes = circleOfFifths.notes;
  var currentAngle = 90;
  
  notes.forEach(function(note){
    var xCoordinate = Math.cos(toRadians(currentAngle)) * radius;
    var yCoordinate = -Math.sin(toRadians(currentAngle)) * radius;
    text(note, xCoordinate, yCoordinate);
    currentAngle -= 30;
  });

  //translate back!
  translate(canvasSize/40, -canvasSize/50);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}
