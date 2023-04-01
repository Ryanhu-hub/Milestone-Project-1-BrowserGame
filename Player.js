export default class Player {
    rightPressed = false;
    leftPressed = false;

    constructor(canvas, velocity){
        this.canvas = canvas;
        this.velocity = velocity;

        this.x = this.canvas.width/2;
        this.y = this.canvas.height - 75;
        this.width = 50;
        this.height = 48;
        this.image = new Image();
        this.image.src = "images/player.png";

        document.addEventListener("keydown",this.keydown);
        document.addEventListener("keyup", this.keyup);
    }
    draw(ctx) {
        ctx.drawImage(
        this.image,
        this.x,
        this.y,
        this.width,
        this.height,
    )}

    keydown = event => {
        if(event.code == 'ArrowRight'){
            this.rightPressed = true;
        }
        if (event.code == "ArrowLeft") {
            this.leftPressed = true;
        }
    };

    keydown = (event) => {
        if (event.code == "ArrowRight") {
            this.rightPressed = true;
        }
        if (event.code == "ArrowLeft") {
            this.leftPressed = true;
        }
    };
}