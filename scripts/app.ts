/*more samples on Type Casting*/
window.addEventListener('load', ()=>{
  function run() {
    let game: Game;
    let player : Player;
    let startBtn = <HTMLButtonElement>document.getElementById('startGame');
    let calcBtn = <HTMLButtonElement>document.getElementById('calculate');

    startBtn.addEventListener('click', ()=>{
      player= new Player((<HTMLInputElement>document.getElementById('playername')).value);
      game= new Game();
      game.player = player;
      game.printGame();
      (<HTMLInputElement>document.getElementById('playername')).value = '';
    });
    calcBtn.addEventListener('click',()=>{
      game.calculateScore();
    });
  }
  run();
});
