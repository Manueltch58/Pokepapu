const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDeMokepones
let inputLink
let inputZelda
let inputGanondorf
let inputTureli
let inputSidon
let inputRiju
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonRayo
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let link = new Mokepon('Link', './assets/link.png', 5)

let zelda = new Mokepon('Zelda', './assets/zelda.png', 5)

let ganondorf = new Mokepon('Ganondorf', './assets/ganondorf.png', 5)

let tureli = new Mokepon('Tureli', './assets/tureli.png', 5)

let sidon = new Mokepon('Sidon', './assets/sidon.png', 5)

let riju = new Mokepon('Riju', './assets/riju.png', 5)

link.ataques.push(
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '⚡', id: 'boton-rayo' },
)

zelda.ataques.push(
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)

ganondorf.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '🥏', id: 'boton-agua' },
)


tureli.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '⚡', id: 'boton-rayo' },
)

sidon.ataques.push(
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '⚡', id: 'boton-rayo' },
)

riju.ataques.push(
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🥏', id: 'boton-agua' },
)



mokepones.push(link,zelda,ganondorf, tureli, sidon, riju )

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputLink = document.getElementById('Link')
     inputZelda = document.getElementById('Zelda')
     inputGanondorf = document.getElementById('Ganondorf')
     inputTureli = document.getElementById('Tureli')
     inputSidon = document.getElementById('Sidon')
     inputRiju= document.getElementById('Riju')
    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    
    sectionSeleccionarAtaque.style.display = 'flex'
    
    
    
    if (inputLink.checked) {
        spanMascotaJugador.innerHTML = inputLink.id
        mascotaJugador = inputLink.id
    } else if (inputZelda.checked) {
        spanMascotaJugador.innerHTML = inputZelda.id
        mascotaJugador = inputZelda.id
    } else if (inputGanondorf.checked) {
        spanMascotaJugador.innerHTML = inputGanondorf.id
        mascotaJugador = inputGanondorf.id  
    }else if (inputTureli.checked) {
        spanMascotaJugador.innerHTML = inputTureli.id
        mascotaJugador = inputTureli.id
    }else if (inputSidon.checked) {
        spanMascotaJugador.innerHTML = inputSidon.id
        mascotaJugador = inputSidon.id
    }else if (inputRiju.checked) {
        spanMascotaJugador.innerHTML = inputRiju.id
        mascotaJugador = inputRiju.id
    }else {
        alert('Selecciona un personaje')
        location.reload()
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonRayo = document.getElementById('boton-rayo')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = 'rgba(0, 0, 0, 0.7)'
                boton.style.border = '1.5px solid rgb(251, 205, 113)'
                boton.disabled = true   
            } else if (e.target.textContent === '🥏') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = 'rgba(0, 0, 0, 0.7)'
                boton.style.border = '1.5px solid rgb(251, 205, 113)'
                boton.disabled = true  
            } else {
                ataqueJugador.push('RAYO')
                console.log(ataqueJugador)
                boton.style.background = 'rgba(0, 0, 0, 0.7)'
                boton.style.border = '1.5px solid rgb(251, 205, 113)'
                boton.disabled = true  
            }
            ataqueAleatorioEnemigo()
        })
    })
    

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('RAYO')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'RAYO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'RAYO' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("La trifuerza se ha roto en dos")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("Recuperaste la trifuerza!!")
    } else {
        crearMensajeFinal('Te han robado la TriFuerza')
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal


    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)