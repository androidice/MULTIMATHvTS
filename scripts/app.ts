/*more samples on Type Casting*/
window.addEventListener('load', ()=>{
  function run() {
    let startBtn = <HTMLButtonElement>document.getElementById('startGame');
    let calcBtn = <HTMLButtonElement>document.getElementById('calculate');

    let player: Player;
    function setPlayerName(){
      player = new Player((<HTMLInputElement>document.getElementById('playername')).value);
    }

    startBtn.addEventListener('click', ()=>{
      setPlayerName();
      console.log(player.name);
    });
    calcBtn.addEventListener('click',()=>{
      alert('calculate');
    });
  }
  run();
});
