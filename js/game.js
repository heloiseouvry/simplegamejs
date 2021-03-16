let game = {
    gameContainer: document.getElementById("game-container"),
    canvas: document.getElementById("tutorial"),
    canvasWidth: document.getElementById("tutorial").width,
    canvasHeight: document.getElementById("tutorial").height,
    triangleWidth: document.getElementById("tutorial").width / 10,
    triangleHeight: document.getElementById("tutorial").height / 10,
    currentPosX: 0,
    currentPosY: 0,
    init: function () {
        game.initGrid();
        game.initAvatar();
        game.initEventListener();
        game.displayTriangle();
    },
    initGrid: function (sizeGrid = 10, sizeCase = 30) {
        for (var i = 0; i < sizeGrid; i++) {
            for (var j = 0; j < sizeGrid; j++) {
                let caseGrid = document.createElement("div");
                caseGrid.className = "case-grid";
                caseGrid.id = `case-grid-${i}-${j}`;
                caseGrid.style.width = caseGrid.style.height = sizeCase + "px";
                game.gameContainer.appendChild(caseGrid);
            }
        }
        game.gameContainer.style.gridTemplate = `repeat(${sizeGrid}, 1fr) / repeat(${sizeGrid}, 1fr)`;
        // game.gameContainer.style.height = `repeat(${sizeGrid}, 1fr) / repeat(${sizeGrid}, 1fr)`;
    },
    initAvatar: function () {
        // let firstCase = document.getElementById(`case-grid-0-0`);
    },
    initEventListener: function () {
        document.addEventListener("keydown", game.handleKeyDown);
    },
    cleanCanvas: function () {
        var ctx = game.canvas.getContext("2d");
        ctx.clearRect(0, 0, game.canvasWidth, game.canvasHeight);
    },
    displayTriangle: function (x = 0, y = 0, dir = "right") {
        var ctx = game.canvas.getContext("2d");
        var triangle = new Path2D();
        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.beginPath();
        switch (dir) {
            case "right":
                triangle.moveTo(x + 5, y + 5);
                triangle.lineTo(x + 5, y + (game.triangleWidth-5));
                triangle.lineTo(x + (game.triangleWidth-5), y + (game.triangleWidth/2));
                break;
            case "left":
                triangle.moveTo(x + (game.triangleWidth-5), y + 5);
                triangle.lineTo(x + (game.triangleWidth-5), y + (game.triangleWidth-5));
                triangle.lineTo(x + 5, y + (game.triangleWidth/2));
                break;
            case "up":
                triangle.moveTo(x + 5, y + (game.triangleHeight-5));
                triangle.lineTo(x + (game.triangleHeight-5), y + (game.triangleHeight-5));
                triangle.lineTo(x + (game.triangleHeight/2), y + 5);
                break;
            case "down":
                triangle.moveTo(x + 5, y + 5);
                triangle.lineTo(x + (game.triangleHeight-5), y + 5);
                triangle.lineTo(x + (game.triangleHeight/2), y + (game.triangleHeight-5));
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

