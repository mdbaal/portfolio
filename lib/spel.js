//buttons,panels, etc
let canvas, gameframe;
let buttons;
let buttonStart, buttonRestart,buttonLevel;
//values, arrays
let glowpattern = [0,0,0,0];
let patternindex = 0;
let timeBetweenglow = 1000;
let level = 1;
let gameStarted = false;
let canPlay = false;
let patternDisplaying = false;
let difficultyIncrement = 50;

function setup() {
  canvas = createCanvas(1060, 560);

  var div = createDiv("<h1>Game Over</h1>");
  div.parent('game-frame');
  canvas.parent('game-frame');
  gameframe = canvas.parent();


  div.id('gameover');
  toggleGameOver();

  setupBackground();
  setupColorButtons();
  setupControlButtons();
}

function draw() {
    buttons[0].draw();
    buttons[1].draw();
    buttons[2].draw();
    buttons[3].draw();

  buttonStart.draw();
  buttonShowPattern.draw();
  buttonRestart.draw();
  buttonLevel.draw();

}

function setupBackground(){
  background('white');
  strokeWeight(5);
  stroke('black');
  rect(0,0,1060, 560,25);
}

function setupColorButtons(){
  var buttonred;
  var buttonblue;
  var buttongreen;
  var buttonyellow;

  buttonred = new Clickable();
  noStroke();
  buttonred.locate(20,20);
  buttonred.resize(250, 250);
  buttonred.color = '#cb0000';
  buttonred.text = "";
  buttonred.cornerRadius = 3;
  buttonred.onPress = function(){
    pressButton(0);
  };


  buttonblue = new Clickable();
  buttonblue.locate(290,20);
  buttonblue.resize(250, 250);
  buttonblue.color = '#0101c3';
  buttonblue.text = "";
  buttonblue.cornerRadius = 3;
  buttonblue.onPress = function(){
    pressButton(1);
  };

  buttongreen = new Clickable();
  buttongreen.locate(20,290);
  buttongreen.resize(250, 250);
  buttongreen.color = '#017401';
  buttongreen.text = "";
  buttongreen.cornerRadius = 3;
  buttongreen.onPress = function(){
    pressButton(2);
  };

  buttonyellow = new Clickable();
  buttonyellow.locate(290,290);
  buttonyellow.resize(250, 250);
  buttonyellow.color = '#c7c700';
  buttonyellow.text = "";
  buttonyellow.cornerRadius = 3;
  buttonyellow.onPress = function(){
    pressButton(3);
  };

  buttons = [buttonred,buttonblue,buttongreen,buttonyellow];
}

function setupControlButtons(){
  buttonStart = new Clickable();
  buttonStart.locate(675,20);
  buttonStart.resize(250, 50);
  buttonStart.color = '#e1e1e1';
  buttonStart.text = "Start";
  buttonStart.cornerRadius = 3;
  buttonStart.onPress = function(){
    startGame();
  };

  buttonShowPattern = new Clickable();
  buttonShowPattern.locate(675,130);
  buttonShowPattern.resize(250, 50);
  buttonShowPattern.color = '#e1e1e1';
  buttonShowPattern.text = "Show pattern";
  buttonShowPattern.cornerRadius = 3;
  buttonShowPattern.onPress = function(){
    runGlowPattern();
  };

  buttonRestart = new Clickable();
  buttonRestart.locate(675,240);
  buttonRestart.resize(250, 50);
  buttonRestart.color = '#e1e1e1';
  buttonRestart.text = "Restart";
  buttonRestart.cornerRadius = 3;
  buttonRestart.onPress = function(){
    restartGame();
  };

  buttonLevel = new Clickable();
  buttonLevel.locate(675,350);
  buttonLevel.resize(250, 50);
  buttonLevel.color = '#e1e1e1';
  buttonLevel.text = "Level: 1";
  buttonLevel.cornerRadius = 3;
  buttonLevel.onPress = function(){

  };
}

function makeGlowPattern(){

  for(var i =0;i < 4; i++){
    glowpattern[i] = Math.floor(random(4));
  }
}

function runGlowPattern(){
  if(!gameStarted) return;
  patternDisplaying = true;
  let bcolor = buttons[glowpattern[patternindex]].color;
  buttons[glowpattern[patternindex]].color = lerpColor(color(bcolor),color('white'),.5);


  setTimeout(function(){
    buttons[glowpattern[patternindex]].color = color(bcolor);

    setTimeout(function(){
      patternindex++;

      if(patternindex < glowpattern.length)
      runGlowPattern();
      else{
        patternindex = 0;
        patternDisplaying = false;
      }

    },250);

  },timeBetweenglow);
}

function pressButton(buttonPressed){
  if(patternDisplaying) return;

  let bcolor = buttons[buttonPressed].color;
  buttons[buttonPressed].color = lerpColor(color(bcolor),color('white'),.5);

  setTimeout(function(){
    buttons[buttonPressed].color = color(bcolor);
  },250);

  checkCorrectPress(buttonPressed);
}

function checkCorrectPress(buttonPressed){
  if(buttonPressed == glowpattern[patternindex]){
    patternindex++;
    if(patternindex == 4){
      patternindex = 0;
      increaseLevel();
    }
    updateText();
  }else{
    toggleGameOver();
  }
}

function startGame(){
  if(gameStarted  && !canPlay) return;

  gameStarted = true;
  setTimeout(function(){
    makeGlowPattern();
    runGlowPattern();
  },1500);
}

function restartGame(){
  if(!gameStarted) return;
  level = 1;
  gameStarted = false;
  updateText();
  removeElements();
}

function increaseLevel(){
  level++;

  timeBetweenglow -=  difficultyIncrement;
  if(timeBetweenglow < 200)
  timeBetweenglow = 200;

  console.log(timeBetweenglow);
  updateText();
  startGame();

}

function updateText(){
  buttonLevel.text = "Level: " + level;
}

function toggleGameOver(){
   $('#gameover').toggle();
}

//make function for the control button effect;
