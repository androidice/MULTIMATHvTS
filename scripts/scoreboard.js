var ScoreBoard = (function () {
    function ScoreBoard() {
        this.results = [];
    }
    ScoreBoard.prototype.addResult = function (result) {
        this.results.push(result);
    };
    ScoreBoard.prototype.updateScoreBoard = function () {
        var output = '<h2>Scoreboard</h2>';
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += '<h4>';
            output += result.name + ' : ' + result.score + '/' + result.problems + ' factor Of ' + result.factor;
            output += '</h4>';
        }
        document.getElementById('scores').innerHTML = output;
    };
    return ScoreBoard;
}());
;
var scoreboard = new ScoreBoard();
//# sourceMappingURL=scoreboard.js.map