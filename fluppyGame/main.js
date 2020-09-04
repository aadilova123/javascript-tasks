let cvs = document.getElementById('canvas'),
    ctx = cvs.getContext('2d');

let bird = new Image(),
    bg = new Image(),
    fg = new Image(),
    pipeUp = new Image(),
    pipeBottom = new Image();

let fly = new Audio(),
    scoreAudio = new Audio();    


fly.src= "img/fly.mp3";
scoreAudio.src = "img/score.mp3";
bird.src = "img/flappy_bird.png";
bg.src = "img/bird_bg.png";
fg.src = "img/bird_fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

document.addEventListener('keydown', moveUp);

function moveUp(){
    fly.play();
    yPos -= 20
}

let pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
}




let gap = 90;
let xPos = 10;
let yPos = 150;
let grav = 1;
let score = 0;

function draw(){
    ctx.drawImage(bg, 0, 0);

    for(let i = 0; i<pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom,pipe[i].x, pipe[i].y +pipeUp.height+ gap);

        pipe[i].x--;

        if(pipe[i].x == 125){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }

        if(xPos+bird.width>=pipe[i].x 
            && xPos<=pipe[i].x + pipeUp.width
            && (yPos <=pipe[i].y + pipeUp.height
                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
                || yPos + bird.height>=cvs.height - fg.height){
                    location.reload()
                }
                
        if(pipe[i].x == 5){
            scoreAudio.play();
            score++;
        }    

    }



    
    ctx.drawImage(fg,0,cvs.height-fg.height);
    ctx.drawImage(bird,xPos,yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Score: "+ score, 10, cvs.height - 10);
    

    requestAnimationFrame(draw)
    
}


pipeBottom.onload = draw;