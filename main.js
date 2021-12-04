img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#f01000");
    text("Dog",45,75);
    noFill();
    stroke("#00bbff");
    rect(30,60,450,350);
}