window.addEventListener('load', function () {
    function run() {
        var startBtn = document.getElementById('startGame');
        var calcBtn = document.getElementById('calculate');
        var player;
        function setPlayerName() {
            player = new Player(document.getElementById('playername').value);
        }
        startBtn.addEventListener('click', function () {
            setPlayerName();
            console.log(player.name);
        });
        calcBtn.addEventListener('click', function () {
            alert('calculate');
        });
    }
    run();
});
//# sourceMappingURL=app.js.map