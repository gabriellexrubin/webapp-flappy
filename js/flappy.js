var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);


var score = 0;
var labelScore;
var player;
var bottle = [];





/*
 * Loads all resources for the game and gives them names.
 */
function preload() {game.load.image("playerImg", "../assets/fish.png");
game.load.image("backgroundImg", "../assets/underwater.png");
game.load.audio("score", "../assets/point.ogg");
game.load.image("blockimg", "../assets/bottle.png");
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {

game.physics.startSystem(Phaser.Physics.ARCADE);
var background = game.add.image(0, 0, "backgroundImg");
background.width = 790;
background.height = 400;
game.stage.setBackgroundColor("#99ff66");
game.add.text(260, 10,"FLAPPY FISH", {font: "50px PHOSPHATE", fill: "#000099"});
labelScore = game.add.text(20, 10, "0", {font: "20px Arial", fill:"#000000"});
player = game.add.sprite(50, 270, "playerImg");
game.physics.arcade.enable(player);
player.scale.x = 0.05;
player.scale.y = 0.05;
//player.body.velocity.x = 100;
player.body.velocity.y = -300;
player.body.gravity.y = 500;


game.input.onDown.add(clickHandler);
game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(playerJump);
changeScore();
changeScore();
//alert(score);
game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(moveRight);
game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(moveLeft);
game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(moveUp);
game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(moveDown);



//generatebottle();
var bottleInterval = 1.75 * Phaser.Timer.SECOND;
game.time.events.loop(bottleInterval, generatebottle);


}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {

  }


  function generatebottle() {
console.log("yo");

  var gap = game.rnd.integerInRange(1 ,5);
  for (var count=0; count<8; count++) {
    if(count != gap && count!= gap+1) {
      addbottleBlock(700, count*50);
        }
    }
    changeScore();
}

  function addbottleBlock(x,y){
    var block = game.add.sprite(x,y,"blockimg");
    block.scale.x = 0.08;
    block.scale.y = 0.08;
    bottle.push(block);
    game.physics.arcade.enable(block);
    block.body.velocity.x = -200;
  }



function clickHandler(event) {
var player = game.add.sprite(event.x, event.y, "playerImg");
player.scale.x = 0.08;
player.scale.y = 0.08;
}
function playerJump() {
player.body.velocity.y = -200;
}

function changeScore() {
  score = score + 1;
  labelScore.setText(score.toString());
}
function moveRight() {
  player.x = player.x + 50;
}
function moveLeft() {
  player.x = player.x - 50;
}
function moveUp() {
  player.y = player.y - 50;
}
function moveDown() {
  player.y = player.y + 50;
}
function update() {game.physics.arcade.overlap(
player,
bottle,
game0ver
);
}

function game0ver(){
game.destroy();
}

function game0ver() {
location.reload();
}
