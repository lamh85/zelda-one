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
  console.log(eventKey)
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

function tick() {
  if (isKeyPressed.ArrowUp) {
    moveCharacter('up')
  } else if (isKeyPressed.ArrowDown) {
    moveCharacter('down')
  } else if (isKeyPressed.ArrowLeft) {
    moveCharacter('left')
  } else if (isKeyPressed.ArrowRight) {
    moveCharacter('right')
  }
}

setInterval(tick, 100)
