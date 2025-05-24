const MAX_ROLLS = 5
const STATE = {
    count: 0,
    lastFace: undefined
}

function rollDice(currentFace, STATE, image, rolls, message) {
    currentFace = Math.floor(Math.random() * 6) + 1

    while(currentFace === STATE.lastFace) {
        currentFace = Math.floor(Math.random() * 6) + 1
    }

    image.src = `dice-faces/${currentFace}.PNG`
    STATE.lastFace = currentFace

    if (STATE.count >= MAX_ROLLS) {
            clearInterval(rolls);
            message.textContent = `I rolled a ${currentFace}!`
        }
    STATE.count++
}


function main() {
    let currentFace
    let image = document.getElementById("diceFace")
    let message = document.getElementById("message")
    document.getElementById("roll").onclick = function() {
        STATE.count = 0, message.textContent = ""
        let rolls
        rolls = setInterval(() => {rollDice(currentFace, STATE, image, rolls, message)}, 500)
    }
}

main()