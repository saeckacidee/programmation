let degragay;
function setup() {
    createCanvas(windowWidth, windowHeight);
    degragay = circularGradiant(width, height, 156,45,125,20,45,36)
     
  } 

function draw() {
 background(random(55),random(25),random(255));
    image(degragay,0,0,width,height); }

function circularGradiant(w,h,r1,v1,b1,r2,v2,b2){
    let graphic = createGraphics(w,h)
    for(let compteur = 0 ; compteur < h ; compteur ++)
    { let red =      map(compteur,0,h,r1,r2);
      let blue = map(compteur,0,h,b1,b2);
    let green = map(compteur,0,h,v1,v2);
    // compteur peut etre ecris plus facilement avec juste un i !
 graphic.fill(red,green,blue);
     graphic.noStroke();
    graphic.ellipse(0,0,h-compteur,h-compteur);
    
    }
return graphic;