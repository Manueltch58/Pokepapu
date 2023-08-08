let atPlayer
let enemyStroke
let vidasJugador = 3
let VidasEnemigo = 3


function booting(){
    let sectionSeleccionarAtaque = document.getElementById("select-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reinicio")
    sectionReiniciar.style.display = "none"

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
    let sectionSeleccionarMascota = document.getElementById("select-pet")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("select-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let inputpessi = document.getElementById("pessi")
    let inputPepo = document.getElementById("pepo")
    let inputOctavio = document.getElementById("travis")
    let spanPlayerPet = document.getElementById("playerpet")

    if (inputpessi.checked){
        spanPlayerPet.innerHTML = "Pessi🥶"
        alert("Elejiste a Pessi🧊")
    } else if (inputPepo.checked){
        spanPlayerPet.innerHTML = "Pepo🐸"
        alert("Seleccionaste Pepo🐸 ")
    } else if (inputOctavio.checked){
        spanPlayerPet.innerHTML = "travis🌵"
        alert("Seleccionaste a el travieso🌵")
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
        SpanEnemyPet.innerHTML = "travis🌵"
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
    let sectionMensajes=document.getElementById('resultado')
    let ataqueJugador=document.getElementById('ataqueJugador')
    let ataqueEnemigo=document.getElementById('ataqueEnemigo')

    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo=document.createElement('p')

    sectionMensajes.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=atPlayer
    nuevoAtaqueDelEnemigo.innerHTML=enemyStroke

    ataqueJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes=document.getElementById('resultado')
    sectionMensajes.innerHTML=resultadoFinal

    let botonFuego=document.getElementById('botFuego')
    botonFuego.disabled=true
    let botonAgua=document.getElementById('botAgua')
    botonAgua.disabled=true
    let botonTierra=document.getElementById('botTierra')
    botonTierra.disabled=true

    let sectionReiniciar=document.getElementById('reinicio')
    sectionReiniciar.style.display='block'
}

function reiniciarJuego (){
    location.reload()
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", booting)