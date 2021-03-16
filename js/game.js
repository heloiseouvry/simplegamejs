let game = {
    gameContainer: document.getElementById("game-container"),
    init: function () {
        game.initGrid();
        game.initAvatar();

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

}

game.init();

var canvas = document.getElementById("tutorial");
if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0,0,200,0.5)';
    ctx.fillRect(30, 30, 50, 50);

    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(150, 75);
    ctx.lineTo(150, 25);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, (Math.PI * 2));
    ctx.moveTo(135, 130);
    ctx.arc(130, 130, 5, 0, (Math.PI * 2));
    ctx.moveTo(175, 130);
    ctx.arc(170, 130, 5, 0, (Math.PI * 2));
    ctx.moveTo(180, 150);
    ctx.arc(150, 150, 30, 0, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20, 300);
    ctx.lineTo(20, 250);
    ctx.lineTo(70, 250);
    ctx.lineTo(70, 300);
    ctx.moveTo(20, 250);
    ctx.lineTo(45, 230);
    ctx.lineTo(70, 250);
    ctx.stroke();
}