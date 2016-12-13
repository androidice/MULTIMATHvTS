window.addEventListener('load', function () {
    function run() {
        var game;
        var player;
        var startBtn = document.getElementById('startGame');
        var calcBtn = document.getElementById('calculate');
        startBtn.addEventListener('click', function () {
            player = new Player(document.getElementById('playername').value);
            game = new Game();
            game.player = player;
            game.printGame();
            document.getElementById('playername').value = '';
        });
        calcBtn.addEventListener('click', function () {
            game.calculateScore();
        });
    }
    run();
});
//# sourceMappingURL=app.js.map