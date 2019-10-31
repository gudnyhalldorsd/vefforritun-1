var gamesPlayed;
const game= [];
var guesses;

function start() {
  gamesPlayed=0;
  totalGuesses =0;
  alert(`Nú ætlum við að spila leik þar sem þú átt að giska á tölu á milli 1 og 100. Þú færð eins margar tilraunir og þú vilt.`);
  do{
    play();
  }while(confirm("Viltu spila nýjan leik?"))
  alert(`
    Þú spilaðir ${game.length} leiki.
    Meðalfjöldi ágiskana í hverjum leik var ${totalGuesses/game.length}`);
}

function play() {
  let answer = ask();
  if(answer === null){
    return;
  } else if(answer === true){
    game.push=guesses;
    console.log(game)
    gamesPlayed++;
    return;
  }

}

function ask() {
  guesses =0;
  correctNumber = randomNumber(1,100);
  console.log(correctNumber);
  studentGuess = prompt(`Giskaðu á heiltölu á milli 1 og 100.`)
  guesses++;
  totalGuesses++;
  console.log(studentGuess);
  guess();
}

function guess() {
  if(studentGuess == correctNumber){
    alert(`Rétt! Þetta tók þig ${guesses} tilraunir`);
    return true;
  } else {
    if(Math.abs(studentGuess-correctNumber)<=5){
      alert(`Mjög nálægt!`);
      guessAgain();
    }else if(Math.abs(studentGuess-correctNumber)<=10){
      alert(`Nálægt!`);
      guessAgain();
    }else if(Math.abs(studentGuess-correctNumber)<=20){
      alert(`Frekar langt frá!`);
      guessAgain();
    } else if(Math.abs(studentGuess-correctNumber)<=50){
      alert(`Langt frá!`);
      guessAgain();
    } else {
      alert(`Mjög langt frá!`);
      guessAgain();
    }
  }
}

function guessAgain() {
  studentGuess = prompt(`Giskaðu aftur:`);
  guesses++;
  totalGuesses++;
  console.log(studentGuess);
  guess();
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Byrjar leik
start();
