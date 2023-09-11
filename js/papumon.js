/* booting */
const sectionSeleccionarAtaque = document.getElementById("select-ataque")
const sectionReiniciar = document.getElementById("reinicio")
const  botonMascotaJugador = document.getElementById("pick")

const botonReiniciar = document.getElementById("botonReinicio")
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

/* Pickear mascota */z  
const sectionSeleccionarMascota = document.getElementById("select-pet")
const spanPlayerPet = document.getElementById("playerpet")

/* enemypick */
const SpanEnemyPet = document.getElementById("enemyPet")

/* combate */
const spanVidasJugador = document.getElementById("vidasJugador")
const spanVidasEnemigo = document.getElementById("VidasEnemigo")
const contenedorAtaques = document.getElementById("contenedorAtaques")

/* crearMensaje/final */
const sectionMensajes=document.getElementById('resultado')
const ataqueDelJugador=document.getElementById('ataqueJugador')
const ataqueDelEnemigo=document.getElementById('ataqueEnemigo')

let pokepapus = []
let botones = []
let atPlayer = []
let enemyStroke = []
let opcionPokepapus
let inputPessi
let inputPepo
let inputTravis
let mascotaJugador
let butFire
let butWater
let butPlant
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataquesPokepapu
let ataquesPokepapuEnemigo
let vidasJugador = 3
let VidasEnemigo = 3

class Pokepapu{
    constructor(nombre, foto, vidas){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
    }
}

let pessi = new Pokepapu('Pessi', './assets/pessi.png', '4')
let pepo = new Pokepapu('Pepo', './assets/pepo.png', '4')
let travis = new Pokepapu('Travis', './assets/travieso.png', '4')

pessi.ataques.push(
    {nombre: 'Congelar🧊', id: 'botAgua' },
    {nombre: 'Congelar🧊', id: 'botAgua' },
    {nombre: 'Congelar🧊', id: 'botAgua' },
    {nombre: 'salto🐸', id: 'botTierra'},
    {nombre: 'Iyee🔥', id: 'botFuego'}
)

pepo.ataques.push(
    {nombre: 'salto🐸', id: 'botTierra' },
    {nombre: 'salto🐸', id: 'botTierra' },
    {nombre: 'salto🐸', id: 'botTierra' },
    {nombre: 'Iyee🔥', id: 'botFuego'},
    {nombre: 'Congelar🧊', id: 'botAgua'}
)

travis.ataques.push(
    {nombre: 'Iyee🔥', id: 'botFuego' },
    {nombre: 'Iyee🔥', id: 'botFuego' },    
    {nombre: 'Iyee🔥', id: 'botFuego' },
    {nombre: 'Congelar🧊', id: 'botAgua'},
    {nombre: 'salto🐸', id: 'botTierra'}
)

pokepapus.push(pessi, pepo, travis)

function booting(){
    sectionSeleccionarAtaque.style.display = "none"
    pokepapus.forEach((Pokepapu) => {
        opcionPokepapus = `
        <input type="radio" class="radio-button__input" id=${Pokepapu.nombre} name="mascota">
        <label class="botoneslabel" for="${Pokepapu.nombre}" >
        <p>${Pokepapu.nombre}</p>
        <img src="${Pokepapu.foto}" alt="${Pokepapu.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionPokepapus

        inputPessi = document.getElementById("Pessi")
        inputPepo = document.getElementById("Pepo")
        inputTravis = document.getElementById("Travis")    
    })
    sectionReiniciar.style.display = "none"    
    botonMascotaJugador.addEventListener("click", pickearMascota)       
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function pickearMascota(){ 
    sectionSeleccionarMascota.style.display = "none" 
    sectionSeleccionarAtaque.style.display = "flex"

    if (inputPessi.checked){
        spanPlayerPet.innerHTML = inputPessi.id
        mascotaJugador = inputPessi.id
        alert("Elejiste a Pessi🧊")
    } else if (inputPepo.checked){
        spanPlayerPet.innerHTML = inputPepo.id
        mascotaJugador = inputPepo.id
        alert("Seleccionaste Pepo🐸 ")
    } else if (inputTravis.checked){
        spanPlayerPet.innerHTML = inputTravis.id
        mascotaJugador = inputTravis.id
        alert("Seleccionaste a el travieso🌵")
    } else {
        location.reload()
        alert("Selecciona algo papu👻")
    }
    extraerAtaques(mascotaJugador)
    enemypick()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i=0; i<pokepapus.length;i++) {
        if(mascotaJugador === pokepapus[i].nombre){
            ataques = pokepapus[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPokepapu = `
        <button id=${ataque.id} class="botonAtaque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPokepapu
    })

     butFire = document.getElementById("botFuego")
     butWater = document.getElementById("botAgua")
     butPlant = document.getElementById("botTierra")
     botones = document.querySelectorAll(".BAtaque")
} 

function  sacuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) =>{
            if(e.target.textContent === "Iyee🔥"){
                ataqueDelJugador.push("FUEGO")
                console.log("ataqueDelJugador")
                boton.style.background="#FFFFFF"
            } else if(e.target.textContent === "Congelar🧊"){
                ataqueDelJugador.push("AGUA")
                console.log("ataqueDelJugador")
                boton.style.background="#FFFFFF"
            } else{
                ataqueDelJugador.push("TIERRA")
                console.log("ataqueDelJugador")
                boton.style.background="#FFFFFF"    
            }
            enemyAtRandom()
        })
    })
}

function enemypick(){
    let pickRandom = random(0, pokepapus.length -1)
    SpanEnemyPet.innerHTML = pokepapus[pickRandom].nombre
    ataquesPokepapuEnemigo = pokepapus[pickRandom].ataquesPokepapuEnemigo
    sacuenciaAtaque()
}

function enemyAtRandom(){
    let randomStroke = random(0, ataquesPokepapuEnemigo.length -1)
   
    if (randomStroke == 0 || randomStroke == 1){
        enemyStroke.push("fuego🔥")
    }
    else if (randomStroke == 3 || randomStroke == 4){
        enemyStroke.push("awita💧")
    }
    else{
        enemyStroke.push("planta🌱")
    }
    comsole.log(enemyStroke)
    inciarPelea()
}

function inciarPelea(){
    if (ataqueDelJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = atPlayer[jugador]
    indexAtaqueEnemigo = enemyStroke[enemigo]
}

function combate(){

    for (let index = 0; index < atPlayer.length; index++) {       
       if(atPlayer[index]=== enemyStroke[index]){
        indexAmbosOponentes(index, index)
        crearMensaje("EMPATE")
       }else if((atPlayer[index]=== "AGUA" && enemyStroke[index] === "FUEGO")){
        indexAmbosOponentes(index, index)
        crearMensaje("Ganaste")
       } else if((atPlayer[index]=== "FUEGO" && enemyStroke[index] === "TIERRA")){
        indexAmbosOponentes(index, index)
        crearMensaje("Ganaste")
       } else if((atPlayer[index]=== "TIERRA" && enemyStroke[index] === "AGUA")){
        indexAmbosOponentes(index, index)
        crearMensaje("Ganaste")}
        else{
        indexAmbosOponentes(index, index)
        crearMensaje("Perdiste xdxd")
       }
    }

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
    nuevoAtaqueDelJugador.innerHTML= indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML= indexAtaqueEnemigo

    atPlayer.appendChild(nuevoAtaqueDelJugador)
    enemyStroke.appendChild(nuevoAtaqueDelEnemigo)
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