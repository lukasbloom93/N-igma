import k from "./initKaboom.js";
import {P1,P2, COL} from "./constants.js"

loadSprite('bean', 'sprites/tileMap.png', {
	sliceX: 20,
	sliceY: 20,
	anims: {
		idle: 300,
		run: { from: 302, to: 303  }
	}
})



export const p1 = () => {
  
  return add([
    sprite("bean", {
      anim: "idle",
    }),
    pos(P1.POSX, P1.POSY),
    area(),
    scale(P1.SCALE),
    // makes it fall to gravity and jumpable
    body(),
    // the custom component we defined above
    origin("bot"),
  ]);
};

export const p2 = () => {

  return add([
    sprite("bean", {
      animSpeed: 0.2,
      frame: 300,
    }),
    pos(P2.POSX, P2.POSY),
    area(),
    scale(P2.SCALE),
    color(COL.RED),
    // makes it fall to gravity and jumpable
    body(),
    // the custom component we defined above
    origin("bot"),
  ]);
};