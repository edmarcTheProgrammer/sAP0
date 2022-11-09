canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
sAP0Width = 150;
sAP0Height = 200;
backgroundImage = "Roblos.png"
sAP0Image = "sAP0.png";
sAP0x = 10;
sAP0y = 10;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    sAP0ImgTag = new Image();
    sAP0ImgTag.onload = uploadsAP0;
    sAP0ImgTag.src = sAP0Image;

}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadsAP0() {
    ctx.drawImage(sAP0ImgTag, sAP0x, sAP0y, sAP0Width, sAP0Height);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38' || keyPressed == '87') {
            up();
            console.log("cima");
        }

        if(keyPressed == '40' || keyPressed == '83') {
            down();
            console.log("baixo");
        }

        if(keyPressed == '37' || keyPressed == '65') {
            left();
            console.log("esquerda");
        }

        if(keyPressed == '39' || keyPressed == '68') {
            right();
            console.log("direita");
        }
}

function up() {
    if(sAP0y >= 0) {
        sAP0y = sAP0y - 10;
        uploadBackground();
        uploadsAP0();
    }
}

function down() {
    if(sAP0y <= 800) {
        sAP0y = sAP0y + 10;
        uploadBackground();
        uploadsAP0();
    }
}

function left() {
    if(sAP0x >= 0) {
        sAP0x = sAP0x - 10;
        uploadBackground();
        uploadsAP0();
    }
}

function right() {
    if(sAP0x <= 1200) {
        sAP0x = sAP0x + 10;
        uploadBackground();
        uploadsAP0();
    }
}