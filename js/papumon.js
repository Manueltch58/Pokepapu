/* booting */
const sectionSeleccionarAtaque = document.getElementById("select-ataque")
const sectionReiniciar = document.getElementById("reinicio")
const  botonMascotaJugador = document.getElementById("pick")
const butFire = document.getElementById("botFuego")
const butWater = document.getElementById("botAgua")
const butPlant = document.getElementById("botTierra")
const botonReiniciar = document.getElementById("botonReinicio")

/* Pickear mascota */
const sectionSeleccionarMascota = document.getElementById("select-pet")
const inputpessi = document.getElementById("pessi")
const inputPepo = document.getElementById("pepo")
const inputOctavio = document.getElementById("travis")
const spanPlayerPet = document.getElementById("playerpet")

/* enemypick */
const SpanEnemyPet = document.getElementById("enemyPet")

/* combate */
const spanVidasJugador = document.getElementById("vidasJugador")
const spanVidasEnemigo = document.getElementById("VidasEnemigo")

/* crearMensaje/final */
const sectionMensajes=document.getElementById('resultado')
const ataqueJugador=document.getElementById('ataqueJugador')
const ataqueEnemigo=document.getElementById('ataqueEnemigo')

let atPlayer
let enemyStroke
let vidasJugador = 3
let VidasEnemigo = 3


function booting(){ 
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"    
    botonMascotaJugador.addEventListener("click", pickearMascota)    
    butFire.addEventListener("click", ataqueFuego)
    butWater.addEventListener("click", ataqueAgua)
    butPlant.addEventListener("click", ataqueTierra)    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function pickearMascota(){ 
    sectionSeleccionarMascota.style.display = "none" 
    sectionSeleccionarAtaque.style.display = "flex"

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
    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo=document.createElement('p')

    sectionMensajes.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=atPlayer
    nuevoAtaqueDelEnemigo.innerHTML=enemyStroke

    ataqueJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML=resultadoFinal
    
    butFire.disabled=true
    butWater.disabled=true
    butPlant.disabled=true

    sectionReiniciar.style.display='block'
}

function reiniciarJuego (){
    location.reload()
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", booting)