const socket = io("ws://localhost:3000");
socket.on("init", (msg) => {
  console.log(msg);
});


let currentKey
let playerNumber


const start=()=>{

  document.addEventListener("keydown", keydown);

  const newGameBtn = document.getElementById('newGameButton');
  const joinGameBtn = document.getElementById('joinGameButton');

  newGameBtn.addEventListener('click', newGame);
  joinGameBtn.addEventListener('click', joinGame);

  function newGame() {
    playerNumber = 1
    go("game");
  }

  function joinGame() {
    playerNumber = 2
    go("game");
  }
}


const keydown = (e) => {
  currentKey=e.keyCode
  console.log("e keycode:",e.keyCode ," and current Key:", currentKey);
  socket.emit("keyPressedNow", currentKey);
};

start()
// import kaboom lib
import kaboom from "./node_modules/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom({
  clearColor: ["black"],
});

loadSprite("bean", "sprites/bean.png");


// define some constants
const MOVE_SPEED = 480;
const FALL_DEATH = 2400;

scene("game", () => {
  gravity(3200);

  // add level to scene

  add([
    rect(width(), 100),
    outline(4),
    pos(-500, height()),
    origin("botleft"),
    area(),
    solid(),
    color(127, 200, 255),
  ]);

  // define player object
  const player1 = add([
    sprite("bean"),
    pos(-400, 0),
    area(),
    scale(2),
    // makes it fall to gravity and jumpable
    body(),
    // the custom component we defined above
    origin("bot"),
  ]);

  const player2 = add([
    sprite("bean"),
    pos(-200, 0),
    area(),
    scale(2),
    // makes it fall to gravity and jumpable
    body(),
    // the custom component we defined above
    origin("bot"),
  ]);

  // action() runs every frame
  player1.action(() => {
    // center camera to player
    camPos(player1.pos);
    // check fall death
    if (player1.pos.y >= FALL_DEATH) {
      go("lose");
    }
  });

  player2.action(() => {
    // center camera to player
    camPos(player2.pos);
    // check fall death
    if (player2.pos.y >= FALL_DEATH) {
      go("lose");
    }
  });

 
 if(playerNumber === 1) {
   keyDown("left", () => {
     player1.move(-MOVE_SPEED, 0);
   });

   keyDown("right", () => {
     player1.move(MOVE_SPEED, 0);
   });
 } else if (playerNumber === 2) {
   keyDown("left", () => {
     player2.move(-MOVE_SPEED, 0);
   });

   keyDown("right", () => {
     player2.move(MOVE_SPEED, 0);
   });
 }

  


});

scene("lose", () => {
  add([text("You Lose")]);
  keyPress(() => go("game"));
});

scene("win", () => {
  add([text("You Win")]);
  keyPress(() => go("game"));
});

