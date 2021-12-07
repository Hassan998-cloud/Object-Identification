img = "";
statuss = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log('modelLoaded');
    statuss = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error)
    {
      console.error(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420);
    fill("#f01000");
    text("Dog",45,75);
    noFill();
    stroke("#00bbff");
    rect(30,60,450,350);

    fill("#ff0008");
    text("Cat",320,120);
    noFill();
    stroke("#00f2ff");
    rect(300,90,270,320);
}