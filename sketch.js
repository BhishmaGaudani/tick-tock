var hour , minute ,second



function setup() {
  createCanvas(800,800);
 
}

function draw() {
  background(0);  
  fill(200,200,255);
  ellipse(400,400,600,600)
  fill(0)
  textSize(40)
  textAlign("center")
  text("12",400,150)
  text("3",650,400);
  text("6",400,650);
  text("9",150,400);

  text("1",540,200);
  text("2",620,283);
  text("4",620,513);
  text("5",540,600);
  text("11",260,200);
  text("10",180,283);
  text("8",180,513);
  text("7",260,600);
  
  hr = hour();
  mn = minute();
  sc = second();
  

  translate(400,400)
  rotate(-90)
  

  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)
  
  push();
  stroke(200,0,200)
  strokeWeight(4)
  rotate(scAngle)
  line(0,0,200,0)
  pop();

  push();
  stroke(150,0,255)
  strokeWeight(4)
  rotate(mnAngle)
  line(0,0,150,0)
  pop()

  push()
  stroke(150,100,0)
  strokeWeight(4)
  rotate(hrAngle)
  line(0,0,100,0)
  pop()

  
 
}