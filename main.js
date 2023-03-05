function setup(){
    video=createCapture(VIDEO);
    video.size(600, 600);
    canvas=createCanvas(550,500);
    canvas.position(750, 130);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded, PoseNet Initialized");
}

function draw(){
background('#c5ace3');
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
    }
}