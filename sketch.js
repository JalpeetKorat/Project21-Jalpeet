var canvas;
var music;
var plate1,plate2,plate3,plate4;
var ball;
var wall1,wall2,wall3,wall4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    plate1 = createSprite(90,550,160,20);
    plate1.shapeColor = "red";

    plate2 = createSprite(290,550,160,20);
    plate2.shapeColor = "green";

    plate3 = createSprite(490,550,160,20);
    plate3.shapeColor = "black";

    plate4 = createSprite(690,550,160,20);
    plate4.shapeColor = "yellow"; 

    wall1 = createSprite(0, 0, 10, 8000);
    wall2 = createSprite(400, 0, 8000, 10);
    wall3 = createSprite(800, 0, 10, 8000);
    wall4 = createSprite(0, 600, 8000, 10);

    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,20,20);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 1.5;
}

function draw() {
    background("lightblue");
    //create edgeSprite
    bounceOff(wall1, ball);
    bounceOff(wall2, ball);
    bounceOff(wall3, ball);
    bounceOff(wall4, ball); 

    //add condition to check if box touching surface and make it box
    if(plate1.isTouching(ball) && ball.bounceOff(plate1)){
        ball.shapeColor = "red"
        music.play();
    }
    if (plate2.isTouching(ball) && ball.bounceOff(plate2)) {
        ball.shapeColor = "green";
        music.stop();
    }
    if (plate3.isTouching(ball)) {
        ball.shapeColor = "black";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if (plate4.isTouching(ball) && ball.bounceOff(plate4)) {
        ball.shapeColor = "yellow";
        music.stop();
    } 
    


    drawSprites();
}
