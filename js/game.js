let game = {
    canvas: document.getElementById("game-canvas"),
    canvasWidth: document.getElementById("game-canvas").width,
    canvasHeight: document.getElementById("game-canvas").height,
    triangleWidth: document.getElementById("game-canvas").width / 10,
    triangleHeight: document.getElementById("game-canvas").height / 10,
    currentPosX: 0,
    currentPosY: 0,
    init: function () {
        game.initEventListener();
        game.displayGrid();
        game.displayTriangle();
    },
    initEventListener: function () {
        document.addEventListener("keydown", game.handleKeyDown);
    },
    displayGrid: function () {
        var ctx = game.canvas.getContext("2d");
        for (var i = 1; i < 10; i++) {
            ctx.moveTo(i * game.triangleWidth, 0);
            ctx.lineTo(i * game.triangleWidth, game.canvasHeight);
            ctx.moveTo(0, i * game.triangleHeight);
            ctx.lineTo(game.canvasWidth, i * game.triangleHeight);
        }
        ctx.stroke();
    },
    cleanCanvas: function () {
        var ctx = game.canvas.getContext("2d");
        ctx.clearRect(0, 0, game.canvasWidth, game.canvasHeight);
        game.displayGrid();
    },
    displayTriangle: function (x = 0, y = 0, dir = "right") {
        if(game.triangleWidth <= game.triangleHeight){
            var sizeTriangle = game.triangleWidth;
        }
        else{
            var sizeTriangle = game.triangleHeight;
        }
        var padding = sizeTriangle / 6;
        var ctx = game.canvas.getContext("2d");
        var triangle = new Path2D();
        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.beginPath();
        switch (dir) {
            case "right":
                triangle.moveTo(x + padding, y + padding);
                triangle.lineTo(x + padding, y + (sizeTriangle - padding));
                triangle.lineTo(x + (sizeTriangle - padding), y + (sizeTriangle / 2));
                break;
            case "left":
                triangle.moveTo(x + (sizeTriangle - padding), y + padding);
                triangle.lineTo(x + (sizeTriangle - padding), y + (sizeTriangle - padding));
                triangle.lineTo(x + padding, y + (sizeTriangle / 2));
                break;
            case "up":
                triangle.moveTo(x + padding, y + (sizeTriangle - padding));
                triangle.lineTo(x + (sizeTriangle - padding), y + (sizeTriangle - padding));
                triangle.lineTo(x + (sizeTriangle / 2), y + padding);
                break;
            case "down":
                triangle.moveTo(x + padding, y + padding);
                triangle.lineTo(x + (sizeTriangle - padding), y + padding);
                triangle.lineTo(x + (sizeTriangle / 2), y + (sizeTriangle - padding));
                break;
        }
        ctx.fill(triangle);
    },
    moveTriangle: function (direction) {
        game.cleanCanvas();
        game.displayTriangle(this.currentPosX, this.currentPosY, direction);
    },
    handleKeyDown: function (event) {
        switch (event.code) {
            case "ArrowRight":
                if (game.currentPosX < (game.canvasWidth - game.triangleWidth)) {
                    game.currentPosX += game.triangleWidth;
                }
                game.moveTriangle("right");
                break;
            case "ArrowLeft":
                if (game.currentPosX > 0) {
                    game.currentPosX -= game.triangleWidth;
                }
                game.moveTriangle("left");
                break;
            case "ArrowUp":
                if (game.currentPosY > 0) {
                    game.currentPosY -= game.triangleHeight;
                }
                game.moveTriangle("up");
                break;
            case "ArrowDown":
                if (game.currentPosY < (game.canvasHeight - game.triangleHeight)) {
                    game.currentPosY += game.triangleHeight;
                }
                game.moveTriangle("down");
                break;
        }
    },
}

game.init();

