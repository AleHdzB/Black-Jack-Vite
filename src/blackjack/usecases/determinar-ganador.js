export const determinarGanador = (
    puntosJugadores, btnNuevo) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(()=>{
        if (puntosComputadora === puntosMinimos){
            alert("EMPATE!!");
        }else if(puntosComputadora > 21 || puntosJugadores == 21){
            alert("El Jugador GANA!!");
        }else if(puntosMinimos > 21 || puntosComputadora>puntosMinimos){
            alert("La Computadora GANA!!");
        }
    },10);
    btnNuevo.disabled = false;    
  }