function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight); 
 
}

function draw() {
  // Pop star planet, les planetes tournerons autour de cette étoile 
    translate(witdth/2, height/2);//Centre
    noStroke();// enlever les bords noirs 
    background(70,0,240);
    translate(width/2, height/2);
    rotate( millis()/200 );
    fill(255, 255, 0);
    rectMode(CENTER);
    triangle(40, 40, 58, 20, 86, 75);
    
    
    
    translate(300,0);
    rotate ( millis()/200)
    fill(0,128,255)
   
    
    
    
    
    
    
    
    
    
}