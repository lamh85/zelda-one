const htmlTag = document.querySelector('html')

const PLAYER_HEIGHT = 50
const PLAYER_WIDTH = 50
const SCREEN_WIDTH = 1000
const SCREEN_HEIGHT = 700

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

const validatePosition = (requestedPosition, direction) => {
  if (requestedPosition < 0) {
    return 0
  }

  if (direction === 'right') {
    const rightPosition = requestedPosition + PLAYER_WIDTH

    if (rightPosition > SCREEN_WIDTH) {
      return SCREEN_WIDTH - PLAYER_WIDTH
    }
  }

  if (direction === 'down') {
    const downPosition = requestedPosition + PLAYER_HEIGHT

    if (downPosition > SCREEN_HEIGHT) {
      return SCREEN_HEIGHT - PLAYER_HEIGHT
    }
  }

  return requestedPosition
}

const moveCharacter = (direction) => {
  if (!['left', 'right', 'up', 'down'].includes(direction)) {
    return
  }

  const axis = ['up', 'down'].includes(direction) ? 'y' : 'x'
  const distanceFactor = ['left', 'up'].includes(direction) ? '-1' : 1

  const currentPosition = playerCharacter.getAttribute(axis)
  const newPosition = validatePosition(
    parseInt(currentPosition) + distanceFactor * 10,
    direction
  )

  playerCharacter.setAttribute(axis, newPosition)
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

setInterval(tick, 50)
