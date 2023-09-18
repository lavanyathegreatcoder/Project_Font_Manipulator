noseX = 0;
noseY = 0;
difference = 0;
rightWristX= 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("poseNet model is loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " difference = " + difference);
    }
}

function draw()
{
    background ("#120946");
    document.getElementById("font_size").innerHTML = "Font size of the text will be " + difference + "px";
    textSize(difference);
    fill('#F90093');
    stroke('#F90093');
    text("Lavanya Pratap Singh", 50, 400);
}