const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')
//define las variables

let currentActive = 1;
//variable para el número activo

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circle.length) {
        currentActive = circle.length
    }
    update() //llama a la función que actualiza el estado del circulo
})
//condicion para el boton next: cuando 'click' el número activo se aumenta en 1, hasta llegar a la longitud de la constante circle (4) ahi se detiene.

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})
//condicion para el boton prev: cuando 'click' el numero activo se disminuye en 1, pero solo si el numero activo es mayor a 1. 

function update() {
    circle.forEach((Acircle, idx) => {
        if (idx < currentActive) {
            Acircle.classList.add('active')
        } else {
            Acircle.classList.remove('active')
        }
    })
    //ciclo if para agregar la clase 'active' a los div que contienen los numeros. 

    const actives = document.querySelectorAll('.active');
progress.style.width = ((actives.length -1) / (circle.length -1))*100 + '%';
//convertir el valor a porcentajes y así poder agregarle un valor a la propiedad 'width' la cual inicialmente esta en 0%

if(currentActive === 1){
    prev.disabled = true
}else if (currentActive === circle.length){
    next.disabled = true
}else{
    prev.disabled = false;
    next.disabled = false;
}
}




