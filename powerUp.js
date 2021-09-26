export default function powerUp() {

  return {

    update() {
     
    },
    changePowerUp(powerUp, obj) {
      
      if(this.currentPowerUp === powerUp) {
        return
      }

      destroy(obj)
      this.clearPowerUps()
      this.currentPowerUp = powerUp

      switch (powerUp) {
        case "grow": {
          this.scale = vec2(2)
          break
        }
        case "doublejump": {
          this.jumpsAmount = 2
          break
        }
        case "ghost": {
          break
        }
    


        default: {
          
        }
      } 
      
    },
    // Add more things that should be cleared
    clearPowerUps() {
      this.currentPowerUp = ''
      this.scale = vec2(1)
      this.jumpAmount = 1
    }
  }
}