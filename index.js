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

function tick() {
  if (isKeyPressed.ArrowUp) {
    const currentY = playerCharacter.getAttribute('y')
    playerCharacter.setAttribute('y', parseInt(currentY) - 10)
  } else if (isKeyPressed.ArrowDown) {
    const currentY = playerCharacter.getAttribute('y')
    playerCharacter.setAttribute('y', parseInt(currentY) + 10)
  } else if (isKeyPressed.ArrowLeft) {
    const currentX = playerCharacter.getAttribute('x')
    playerCharacter.setAttribute('x', parseInt(currentX) - 10)
  } else if (isKeyPressed.ArrowRight) {
    const currentX = playerCharacter.getAttribute('x')
    playerCharacter.setAttribute('x', parseInt(currentX) + 10)
  }
}

setInterval(tick, 100)
