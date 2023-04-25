const imagenes = [
    '../public/img/ipad-pro11.jpg',
    '../public/img/iphone-14.jpg' ,
    '../public/img/mate-stanley.png',
    '../public/img/termo-stanley.jpg'
]
const carousel = document.querySelector('#carousel')
const carouselSlides = document.querySelector('#carouselSlides')
const carouselIndicadores = document.querySelector('#carouselIndicadores')
let indiceImagen = 0

export const cargarImagenes = () => {
        const elementoImagen = new Image()
        elementoImagen.id = 'slide'
        elementoImagen.height = 300 
        elementoImagen.width = 300
        elementoImagen.src = imagenes[indiceImagen]
        carouselSlides.append(elementoImagen)
}

const actualizarImagen = () => {
    const slide= document.querySelector('#slide')
    slide.src = imagenes[indiceImagen]

    const indicadorActivo = document.querySelector(`.carouselIndicadoresItem:nth-child(${indiceImagen + 1})`)
    indicadorActivo.classList.add('carouselIndicadoresItemActivo')

    const indicadorInactivos = document.querySelectorAll(`.carouselIndicadoresItem:not(:nth-child(${indiceImagen + 1}))`)
    indicadorInactivos.forEach(indicador => indicador.classList.remove('carouselIndicadoresItemActivo'))
}

export const cargarIndicadores = () => {
    imagenes.forEach((imagen, indice) => {
        const indicador = document.createElement('button')
        indicador.classList.add('carouselIndicadoresItem')

        if (indice === indiceImagen) {
            indicador.classList.add('carouselIndicadoresItemActivo')
        }   

        indicador.onclick = ()=> {
            indiceImagen = indice
            actualizarImagen()
        }
    carouselIndicadores.append(indicador)
    })
}

export const cargarNavegadoresCarousel = () => {
    const arrowLeft = document.createElement('button')
    const arrowRight = document.createElement('button')

    arrowLeft.textContent = '<'
    arrowRight.textContent = '>'

    arrowLeft.classList.add('carouselArrowLeft')
    arrowRight.classList.add('corouselArrowRight')

    arrowLeft.onclick =() => {
        indiceImagen = --indiceImagen < 0 ? imagenes.length -1 : indiceImagen--

        actualizarImagen()
    }

    arrowRight.onclick =() => {
        indiceImagen = ++indiceImagen > imagenes.length -1 ? 0 : indiceImagen++

        actualizarImagen()
    }

    carousel.append(arrowLeft)
    carousel.append(arrowRight)
}

