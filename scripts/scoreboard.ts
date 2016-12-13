class ScoreBoard {
  results: any[]=[];

  constructor(){}

  addResult(result:any){
    this.results.push(result);
  }

  updateScoreBoard(){
    var output = '<h2>Scoreboard</h2>';
    //loop over all results and create html for the scoreboard
    for(var index = 0; index < this.results.length; index++){
      var result = this.results[index];
      output+='<h4>';
      output+= result.name + ' : ' + result.score + '/' + result.problems + ' factor Of ' + result.factor;
      output+='</h4>'
    }
    (<HTMLDivElement>document.getElementById('scores')).innerHTML = output;
  }
};

let scoreboard = new ScoreBoard();
