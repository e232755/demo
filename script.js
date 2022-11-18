let dy = 0


function handleKeyPress(ev) {
    const player = document.querySelector("#player");
    console.log(ev)
    if (ev.code === "Space") {
        dy = -1
    }   else if (ev.key === "r"){
    player.setAttribute("fill", "red")
    }   else if (ev.key === "g") {
            player.setAttribute("fill", "yellow")
    }
}

function gameLoop() {
    // Update game state
    dy = Math.min(dy + 0.05, 1)
    


    const player = document.querySelector("#player");
    let posY = parseFloat(player.getAttribute("cy"));
    let r = parseInt(player.getAttribute("r"))
    if (posY > 100 - r - dy) {
        dy = 0
    }


    player.setAttribute("cy", posY + dy);

    // Loop forever
    window.requestAnimationFrame(gameLoop);
}


gameLoop()

window.onkeydown = handleKeyPress;