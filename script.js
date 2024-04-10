//Add your global variables here
var pattern = []; // must be filled at game start 
var patternLength = 8;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // between 0.0 - 1.0
var clueHoldTime = 1000.0; // in milliseconds
var guessCounter = 0;
// Constant Variables
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
stopBtn.classList.add("hidden")
// Add your functions 
function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function startGame() {
  // function body
  for (let i = 0; i < patternLength; i++)
    pattern[i] = (randomNumbers(1, 6));
  progress = 0;
  gamePlaying = true;
  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");
  playClueSequence();
}
function stopGame() {
  // swap add and remove
  gamePlaying = false;
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
function playClueSequence() {
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) { // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}
function loseGame() {
  stopGame();
  alert("Game Over. You lose.");
}

function winGame() {
  stopGame();
  alert("You win!");
}
function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
  }
}
/* function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  

    if(pattern[guessCounter] == btn){
      //Guess was correct!
      if(guessCounter == progress){
        if(progress == pattern.length - 1){
          //GAME OVER: WIN!
          winGame();
        }else{
          //Pattern correct. Add next segment
          progress++;
          playClueSequence();
        }
      }else{
        //so far so good... check the next guess
        guessCounter++;
      }
    }else{
      //Guess was incorrect
      //GAME OVER: LOSE!
      loseGame();
    }
  }    
*/


// You do not need to edit the below code
const freqMap = {
  // D minor chord 
  1: 293.7, // D 
  // 261.6 original
  2: 329.6, // E 
  // 329.6 original
  3: 349.2, // F 
  //392 original
  4: 392, // G 
  // 466.2 original
  5: 440, // A 

  6: 466.16 // b flat 
}
function playTone(btn, len) {
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function() {
    stopTone()
  }, len)
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)