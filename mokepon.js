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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
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
let mascotaJugadorObjeto
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
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image();

mapaBackground.src = './assets/mokemapa.png'



class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)    
        this.mapaFoto = new Image ()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
       )
    }
}

let link = new Mokepon('Link', './assets/link.png', 5, './assets/cabezalink.png')

let zelda = new Mokepon('Zelda', './assets/zelda.png', 5, './assets/cabezazelda.png')

let ganondorf = new Mokepon('Ganondorf', './assets/ganondorf.png', 5, './assets/cabezaganon.png')

let tureli = new Mokepon('Tureli', './assets/tureli.png', 5, './assets/cabezatureli.png')

let sidon = new Mokepon('Sidon', './assets/sidon.png', 5, './assets/cabezasidon.png')

let riju = new Mokepon('Riju', './assets/riju.png', 5, './assets/cabezariju.png')


let linkEnemigo = new Mokepon('Link', './assets/link.png', 5, './assets/cabezalink.png')

let zeldaEnemigo = new Mokepon('Zelda', './assets/zelda.png', 5, './assets/cabezazelda.png')

let ganondorfEnemigo = new Mokepon('Ganondorf', './assets/ganondorf.png', 5, './assets/cabezaganon.png')

let tureliEnemigo = new Mokepon('Tureli', './assets/tureli.png', 5, './assets/cabezatureli.png')

let sidonEnemigo = new Mokepon('Sidon', './assets/sidon.png', 5, './assets/cabezasidon.png')

let rijuEnemigo = new Mokepon('Riju', './assets/riju.png', 5, './assets/cabezariju.png')

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

linkEnemigo.ataques.push(
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '⚡', id: 'boton-rayo' },
)

zeldaEnemigo.ataques.push(
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)

ganondorfEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '🥏', id: 'boton-agua' },
)


tureliEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '⚡', id: 'boton-rayo' },
)

sidonEnemigo.ataques.push(
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🥏', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '⚡', id: 'boton-rayo' },
)

rijuEnemigo.ataques.push(
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🥏', id: 'boton-agua' },
)



mokepones.push(link,zelda,ganondorf, tureli, sidon, riju )

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

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

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function(res) {
            console.log(res)
            if (res.ok){
                res.text()
                    .then(function (respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    sectionVerMapa.style.display = 'flex'

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

    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`,{
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    } )
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

function seleccionarMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
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

function  pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.clientWidth, mapa.clientHeight)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    linkEnemigo.pintarMokepon()
    zeldaEnemigo.pintarMokepon()
    ganondorfEnemigo.pintarMokepon()
    tureliEnemigo.pintarMokepon()
    sidonEnemigo.pintarMokepon()
    rijuEnemigo.pintarMokepon()
    if(mascotaJugadorObjeto.velocidadX !==0 || mascotaJugadorObjeto.velocidadY !==0){
        revisarColision(ganondorfEnemigo)
        revisarColision(linkEnemigo)
        revisarColision(zeldaEnemigo)
        revisarColision(rijuEnemigo)
        revisarColision(tureliEnemigo)
        revisarColision(sidonEnemigo)
    }
}
 
function enviarPosicion(x, y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`,{
        method: 'post',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -4
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 4
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5 
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'w':   
            moverArriba()
            break;
        case 'ArrowDown':
            moverAbajo()
            break;
        case 's':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'a':
            moverIzquierda()
            break;
        case 'ArrowRight':
            moverDerecha()
            break;
        case 'd':
            moverDerecha()
            break;
        default:
            break;
    }
}

function iniciarMapa(){
    mapa.width = 431
    mapa.height = 340
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50) 

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}
function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    }

}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x


    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return;
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)