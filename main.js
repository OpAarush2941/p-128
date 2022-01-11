peter_pan = "";
disney = "";
right_wristx = 0;
right_wristy = 0;
left_wristx = 0;
left_wristy = 0;

function setup(){
    canvas =  createCanvas(450,400);
    canvas.center();
    video = createCapture(400,400);
    video.hide();
    video.size(450,400);
    posenet = ml5.poseNet(VIDEO,modelLoaded);
    posenet.on('pose',gotResults);
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotResults(Result){
    if(Result > 0){
        console.log(Result);
        left_wristx = Result[0].pose.leftWrist.x;
        right_wristx = Result[0].pose.rightWrist.x;
        left_wristy = Result[0].pose.leftWrist.y;
        right_wristy = Result[0].pose.rightWrist.y;
    }
}

function draw(){
    image(video,0,0,450,400)
}

function preload(){
    disney = loadSound("Disney_music.mp3");
    peter_pan = loadSound("peter_pan.mp3");
}