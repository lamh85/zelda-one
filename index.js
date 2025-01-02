const htmlTag = document.querySelector('html')

let isUpPressed = false
let isRightPressed = false
let isDownPressed = false
let isLeftPressed = false

const isKeyPressed = {
  ArrowUp: false,
  ArrowRight: false,
  ArrowDown: false,
  ArrowLeft: false,
}

htmlTag.addEventListener('keydown', (event) => {
  const eventKey = event.key
  isKeyPressed[eventKey] = true
})

htmlTag.addEventListener('keyup', (event) => {
  const eventKey = event.key
  isKeyPressed[eventKey] = false
})

const playerCharacter = document.querySelector('#player')

const moveCharacter = (direction) => {
  if (!['left', 'right', 'up', 'down'].includes(direction)) {
    return
  }

  const axis = ['up', 'down'].includes(direction) ? 'y' : 'x'
  const distanceFactor = ['left', 'up'].includes(direction) ? '-1' : 1

  const currentPosition = playerCharacter.getAttribute(axis)
  playerCharacter.setAttribute(
    axis,
    parseInt(currentPosition) + distanceFactor * 10
  )
}

const detectKeyPressOnTick = () => {
  let keysDetected = 0

  ;['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].forEach(
    (keyPressName) => {
      if (keysDetected === 2) {
        return
      }

      if (!isKeyPressed[keyPressName]) {
        return
      }

      // EG: 'ArrowUp' ==> 'up'
      const direction = keyPressName.replace('Arrow', '').toLowerCase()
      moveCharacter(direction)
      keysDetected++
    }
  )
}

function tick() {
  detectKeyPressOnTick()
}

setInterval(tick, 100)
