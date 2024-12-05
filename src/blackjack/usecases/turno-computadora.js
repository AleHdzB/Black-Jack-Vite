
import { pedirCarta, acumularPuntos,crearYAnimarCarta,
    determinarGanador} from "./";

/**
 *  Turno de la computadora
 * @param {Number} puntosMinimos puntosMinimos para que gane el CPU 
 * @param {HTMLElement} puntosHTML puntosHTML para mostrar en HTML 
 * @param {Array<String>} deck 
 * @param {Array<Number>} puntosJugadores 
 * @param {HTMLElement} divCartasJugadores 
 */
export const turnoComputadora = 
    async (puntosMinimos, puntosHTML, deck = [], puntosJugadores,
         divCartasJugadores) =>{
    if (!puntosMinimos || !puntosHTML) 
        throw new Error ('puntosMinimos son obligatorios');
    
    
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta( deck );
        puntosComputadora = acumularPuntos(carta,
             puntosJugadores.length -1, puntosJugadores, puntosHTML);
        
        await crearYAnimarCarta(carta, puntosHTML, 1, divCartasJugadores, 
                puntosJugadores);

    } while ((puntosComputadora < puntosMinimos) && 
    (puntosMinimos <= 21)); 
    determinarGanador(puntosJugadores, btnNuevo);

};