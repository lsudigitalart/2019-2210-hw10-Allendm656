var dash = []
var run = []


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);

if(frameRate = 200){
  for(var i = 0; i < 1; i++){
    dash.push(new Dash)
  }
  }

if(frameRate = 200){
  for(var i = 0; i < 1; i++){
    run.push(new Run)
  }
  }


  for (var i = 0; i < dash.length; i++) {
  dash[i].update()
  dash[i].display()

  if(dash[i].y > 1600){
    dash.splice(i, 10)
  }

  if(dash[i].y > 2000){
    dash.splice(i, 50)
  }

  if(dash[i].y > 2500){
    dash.splice(i, 50)
  }


  }

    for (var i = 0; i < run.length; i++) {
  run[i].update()
  run[i].display()
  
  if(run[i].x > 1600){
    run.splice(i, 10)
  }
  
  if(run[i].x > 2000){
    run.splice(i, 50)
  }

  if(run[i].x > 2500){
    run.splice(i, 50)
  }


  }
}



function Dash(){
  this.x = random(width)
  this.y = random(height) - 1000

  this.update = function(){
    this.y += random(8)
    
  }

  this.display = function(){
    noStroke()

    fill(100, 0, 0, 0)
    rect(this.x, this.y - 600, 5, 50)

    fill(100, 0, 0, 50)
    rect(this.x, this.y - 550, 5, 50)

    fill(100, 0, 0, 100)
    rect(this.x, this.y - 500, 5, 50)

    fill(100, 0, 0, 150)
    rect(this.x, this.y - 450, 5, 50)

    fill(100, 0, 0, 200)
    rect(this.x, this.y - 400, 5, 50)

    fill(100, 0, 0, 250)
    rect(this.x, this.y - 350, 5, 50)

    fill(100, 0, 0)
    rect(this.x, this.y - 300, 5, 50)

    fill(125, 0, 0)
    rect(this.x, this.y - 250, 5, 50)

    fill(150, 0, 0)
    rect(this.x, this.y - 200, 5, 50)

    fill(175, 25, 0)
    rect(this.x, this.y - 150, 5, 50)

    fill(200, 50, 0)
    rect(this.x, this.y - 100, 5, 50)

    fill(225, 75, 0)
    rect(this.x, this.y - 50, 5, 50)

    fill(250, 100, 0)
    rect(this.x, this.y, 5, 50)
  }
}

function Run(){
  this.x = random(width) - 1000
  this.y = random(height)

  this.update = function(){
    this.x += random(8)
    
  }

  this.display = function(){
    noStroke()

    fill(0, 0, 100, 0)
    rect(this.x - 600, this.y, 50, 5)

    fill(0, 0, 100, 50)
    rect(this.x - 550, this.y, 50, 5)

    fill(0, 0, 100, 100)
    rect(this.x - 500, this.y, 50, 5)

    fill(0, 0, 100, 150)
    rect(this.x - 450, this.y, 50, 5)

    fill(0, 0, 100, 200)
    rect(this.x - 400, this.y, 50, 5)

    fill(0, 0, 100, 250)
    rect(this.x - 350, this.y, 50, 5)

    fill(0, 0, 100)
    rect(this.x - 300, this.y, 50, 5)

    fill(0, 0, 125)
    rect(this.x - 250, this.y, 50, 5)

    fill(0, 0, 150)
    rect(this.x - 200, this.y, 50, 5)

    fill(0, 25, 175)
    rect(this.x - 150, this.y, 50, 5)

    fill(0, 50, 200)
    rect(this.x - 100, this.y, 50, 5)

    fill(0, 75, 225)
    rect(this.x - 50, this.y, 50, 5)

    fill(0, 100, 250)
    rect(this.x, this.y, 50, 5)
  }
}
