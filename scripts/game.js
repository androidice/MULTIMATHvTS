var Game = (function () {
    function Game() {
        this._factorElement = document.getElementById('factor');
    }
    Game.prototype.setProblemCount = function (value) {
        if (value === void 0) { value = 3; }
        this._problemCount = value;
    };
    Game.prototype.getProblemCount = function () {
        return this._problemCount;
    };
    Object.defineProperty(Game.prototype, "player", {
        get: function () {
            return this._player;
        },
        set: function (value) {
            this._player = value;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.printGame = function () {
        var problemCount = document.getElementById('problemCount').value;
        this.setProblemCount(parseInt(problemCount, 10));
        var gameFrom = '';
        for (var i = 1; i <= this.getProblemCount(); i++) {
            gameFrom += '<div class="form-group">';
            gameFrom += '<label for="answer"' + i + ' = </label>';
            gameFrom += this._factorElement.value + ' x ' + i + '</label>';
            gameFrom += "<div class=\"col-sm-1\"><input type=\"text\" class=\"form-control\" id=\"answer" + i + "\"></div>";
            gameFrom += '</div>';
        }
        document.getElementById('game').innerHTML = gameFrom;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        var problemsInGame = this.getProblemCount();
        var score = 0;
        for (var i = 1; i <= problemsInGame; i++) {
            var answer = document.getElementById('answer' + i).value;
            if (i * parseInt(this._factorElement.value, 10) === parseInt(answer, 10)) {
                score++;
            }
        }
        var result = {
            name: this.player.name,
            score: score,
            problems: problemsInGame,
            factor: this._factorElement.value
        };
        scoreboard.addResult(result);
        scoreboard.updateScoreBoard();
        document.getElementById('calculate').setAttribute('disabled', "true");
    };
    return Game;
}());
//# sourceMappingURL=game.js.map