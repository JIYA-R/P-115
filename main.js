function preload() {
    
}

function setup() {
    canvas=createCanvas(350, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 350, 350);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded(results){
    console.log('Model is Installed')
}

function gotPoses() {
    if(results.length>0){
        console.log(results);
        console.log("Lear x = "+ results[0].pose.leftEar.x);
        console.log("Rear x = "+ results[0].pose.rightEar.x);
        console.log("Lear y = "+ results[0].pose.leftEar.y);
        console.log("Rear y = "+ results[0].pose.rightEar.y);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
    }
}