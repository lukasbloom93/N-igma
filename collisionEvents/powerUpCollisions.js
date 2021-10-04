import { ANSWERS, PHYS, COL } from "../constants.js";
import { socket } from "../socket.js"
import { isCorrectCollision, pickUpKey, doTeleSwap } from "./collisionEvents.js"

function spawnGhostblocks(level) {
  const ghostblks = get("invisibleBlock");
  for (let i = 0; i < ghostblks.length; i++) {
    destroy(ghostblks[i]);
    level.spawn("G", ghostblks[i].gridPos.sub(0, 0));
  }
}

function spawnParticles(player, clr, spr) {
  if (clr == null) { clr = COL.WHITE }
  if (spr == null) { spr = "particle" }
  let particles = []
  let part;
  for (let i = 0; i <= 25; i++) {
    part =
      add([
      sprite(spr),
      pos(player.pos.x, player.pos.y+8),
      origin("center"),
      scale(rand(0.1, 1)),
      opacity(1),
      color(clr),
      rotate(rand(360)),
      layer(10),
      move(rand(360), rand(70, 150)),
      ]);
      
    particles.push(part)
  }
    for (let p = 0; p < 600; p++) {

      setTimeout(function () {
        for (let b = 0; b < particles.length; b++) {
          particles[b].opacity = particles[b].opacity - 1.1/600
          if (p === 599) {
            destroy(particles[b])
          }
        }
      }, 6000 / 60)
    }
  }
  
export const handlePowerUpCollisions = (level, p, otherPlayer,levelIndex) => {
  return (
    p.collides("powerUp", (obj) => {
      let powerUp = "";
      play("sound-powerup2");
      spawnParticles(p, COL.PURPLE);

      
      if (obj.is("doublejump")) powerUp = "doublejump";
      else if (obj.is("grow")) powerUp = "grow";
      else if (obj.is("shrink")) powerUp = "shrink";
      else if (obj.is("dash")) powerUp = "dash";
      else if(obj.is("barrier")) powerUp = "barrier"
      else if (obj.is("ghost")) {
        powerUp = "ghost";
        spawnGhostblocks(level);
        
      }
      socket.emit("powerUp", powerUp, obj)
      p.changePowerUp(powerUp, obj);
    }),
    p.collides("key", (obj) => {
      socket.emit("key", obj)
      pickUpKey(obj,levelIndex,level);
    }),
    p.collides("teleSwap", (obj) => {
      socket.emit("teleSwap", obj)
      doTeleSwap(obj, p, otherPlayer);
      play("sound-teleswap");
    })
  );
};
