let atPlayer
let enemyStroke
let vidasJugador = 3
let VidasEnemigo = 3


function booting(){
    let  botonMascotaJugador = document.getElementById("pick")
    botonMascotaJugador.addEventListener("click", pickearMascota)

    let butFire = document.getElementById("botFuego")
    butFire.addEventListener("click", ataqueFuego)
    let butWater = document.getElementById("botAgua")
    butWater.addEventListener("click", ataqueAgua)
    let butPlant = document.getElementById("botTierra")
    butPlant.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("botonReinicio")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function pickearMascota(){
    let inputpessi = document.getElementById("pessi")
    let inputPepo = document.getElementById("pepo")
    let inputOctavio = document.getElementById("octavio")
    let spanPlayerPet = document.getElementById("playerpet")

    if (inputpessi.checked){
        spanPlayerPet.innerHTML = "Pessi🥶"
        alert("Elejiste a Pessi🧊")
    } else if (inputPepo.checked){
        spanPlayerPet.innerHTML = "Pepo🐸"
        alert("Seleccionaste Pepo🐸 ")
    } else if (inputOctavio.checked){
        spanPlayerPet.innerHTML = "Octavio mesa🎸"
        alert("Seleccionaste a Octavio Mesa🎸")
    } else {
        alert("Selecciona algo papu👻")
    }

    enemypick()
}

function enemypick(){
    let pickRandom = random(1,3)
    let SpanEnemyPet = document.getElementById("enemyPet")

    if (pickRandom == 1){
        // Pessi
        SpanEnemyPet.innerHTML = "Pessi🥶"
    }
    else if (pickRandom == 2){
        // Pepo
        SpanEnemyPet.innerHTML = "Pepo🐸"
    }
    else {
        // Octavio
        SpanEnemyPet.innerHTML = "Octavio Mesa🎸"
    }

     
}

function ataqueFuego(){
    atPlayer = "fuego🔥"
    enemyAt()
}
function ataqueAgua(){
    atPlayer = "awita💧"
    enemyAt()
}
function ataqueTierra(){
    atPlayer = "planta🌱"
    enemyAt()
}

function enemyAt(){
    let randomStroke = random(1, 3)
   
    if (randomStroke == 1){
        enemyStroke = "fuego🔥"
    }
    else if (randomStroke == 2){
        enemyStroke = "awita💧"
    }
    else if (randomStroke == 3){
        enemyStroke = "planta🌱"
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidasJugador")
    let spanVidasEnemigo = document.getElementById("VidasEnemigo")

    if(enemyStroke == atPlayer) {
        crearMensaje("Empate🤝")
    } else if(atPlayer == "fuego🔥" && enemyStroke == "planta🌱") {
        crearMensaje("Ganaste papu🏆")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo
    } else if(atPlayer == "awita💧" && enemyStroke == "fuego🔥") {
        crearMensaje("Ganaste papu🏆")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo
    } else if(atPlayer == "planta🌱" && enemyStroke == "awita💧") {
        crearMensaje("Ganaste papu🏆")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo
    } else {
        crearMensaje("Perdiste papu😔")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (VidasEnemigo == 0){
        crearMensajeFinal("Lo dejaste 7-0 papu👻")
    }
    else if (vidasJugador == 0){
        crearMensajeFinal("Perdiste, que nuv😹")
    } 
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('msgs')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu pet atacó con ' + atPlayer + ' el enemigo lazó un ataque de ' + enemyStroke + ". " + resultado 
     
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('msgs')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
     
    sectionMensajes.appendChild(parrafo)

    let butFire = document.getElementById("botFuego")
    butFire.disabled = true
    let butWater = document.getElementById("botAgua")
    butWater.disabled = true
    let butPlant = document.getElementById("botTierra")
    butPlant.disabled = true
}

function reiniciarJuego (){
    location.reload()
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", booting)