var canvasSize = 450;
var canvas;
var backgroundColor = 240;

var circleOfFifths = new CircleOfFifths();
var tonicSelect;
var modeSelect;

function setup() {
  canvas = createCanvas(canvasSize, canvasSize);  
  centerCanvas();
  setupTonics(circleOfFifths.changeTonic);
  setupModes();
}

function setupTonics(callback){
  textAlign(CENTER);
  tonicSelect = createSelect();
  tonicSelect.position(10, 10);
  
  circleOfFifths.tonics.forEach(function(tonic){
    tonicSelect.option(tonic);
  });

  tonicSelect.changed(function(){
    circleOfFifths.currentTonic = tonicSelect.value();
  });
}

function setupModes(callback){
  textAlign(CENTER);
  modeSelect = createSelect();
  modeSelect.position(10, 40);

  circleOfFifths.modes.forEach(function(mode){
    modeSelect.option(mode);
  });

  modeSelect.changed(function(){
    circleOfFifths.currentMode = modeSelect.value();
  });
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
  var startAngle = circleOfFifths.getArcPostStart() * 30 - 15;
  noFill();

  //major
  stroke(255, 0, 0);
  drawArc(toRadians(startAngle), toRadians(startAngle + 90), arcSize);

  //minor
  stroke(0, 255, 0);
  drawArc(toRadians(startAngle + 90), toRadians(startAngle + 180), arcSize);

  //diminished 
  stroke(0, 0, 255);
  drawArc(toRadians(startAngle + 180), toRadians(startAngle + 205), arcSize);
}

function drawArc(startAngle, endAngle, size){
  arc(0, 0, size, size, startAngle, endAngle);
}

function drawNotes(){
  textAlign(LEFT);
  var radius = canvasSize/3.3;
  
  textSize(canvasSize/15);
  fill(0, 102, 153);

  //Translate a little due to text offset
  translate(-canvasSize/40, canvasSize/50);

  var notes = circleOfFifths.getNotes();
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

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function windowResized() {
  centerCanvas();
}
