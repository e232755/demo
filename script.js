function handleKeyPress(ev) {
    const player = document.querySelector("#player");
    console.log(ev)
    if (ev.code === "Space") {
        player.setAttribute("cx", 100 * Math.random());
        player.setAttribute("cy", 100 * Math.random());
    }   else if (ev.key === "r"){
    player.setAttribute("fill", "red")
    }   else if (ev.key === "g") {
            player.setAttribute("fill", "yellow")
    }

}



window.onkeydown = handleKeyPress;