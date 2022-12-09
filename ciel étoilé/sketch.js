//let isVertical = true; -> création d'une variable


function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
}


function draw() {
    background(13,5,45);
    stroke(random(255),random(255),random(255));
        // enlever les contours reformes
    let counter = 0;
    while(counter < 100){
    starmaker2000(
        noise(1,counter) * width,
        noise(2,counter) * height, noise(3, counter) * 5,
        noise(4, counter) * 5);              
        counter++;
   } 
}

function starmaker2000 (x,y,w,h){
    push();
    translate(x,y); 
    if(frameCount%3==0){
        line(-w/2,0,w/2,0); // mettre une ligne sur l'écran (vertical)
    }else{
        line(0,-h/2,0,h/2) // (horizontal)
     //si la reponse est oui (true) j'execute la ligne de code definis par le if ici c'est la ligne verticale
    //si la reponse est non (false) j'execute la ligne de code definis par le else ici la ligne horizontal
}
pop();
}





