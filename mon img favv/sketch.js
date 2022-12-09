let myFav;
function preload(){
  myFav = loadImage("gang.jpg");
}

function setup() {
 
 createCanvas( windowWidth, windowHeight);  

}

function draw() {
background(232, 105, 32)
image(myFav, 400, 200, 600,600);
translate(width/2, height/2);
}