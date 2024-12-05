export const crearYAnimarCarta = 
    async (carta, puntosHTML, index, divCartasJugadores, puntosJugadores) => {
    
    const imgCarta2 = document.createElement('img');
    imgCarta2.src = `assets/cartas/red_back.png`;
    imgCarta2.classList.add('carta', 'carta-animada', 'carta-computadora');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta', 'carta-animada', 'carta-computadora');
    // Esperar a que termine la animación de la carta
    divCartasJugadores[index].append(imgCarta);
    divCartasJugadores[index].append(imgCarta2);
    await new Promise(resolve => {
        imgCarta.addEventListener('animationend', () => {
            imgCarta.classList.remove('carta-animada', 'carta-jugador');
            imgCarta2.style.display = 'none';
            resolve(); // Resolver la promesa cuando termina la animación
            puntosHTML[index].innerText = puntosJugadores[index] 
        }, { once: true }); // Eliminar el listener
    });
};