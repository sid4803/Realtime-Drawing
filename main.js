function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelloded);
    posenet.on('pose',gotposes);   
}
function draw(){
    background("lightpink");
}
function modelloded(){
    console.log("Model loded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}