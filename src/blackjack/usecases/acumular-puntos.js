
import {valorCarta} from './valor-carta';

export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) =>{

    if (!puntosJugadores || !puntosHTML) 
        throw new Error ('puntosJugadores son obligatorios');


    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
