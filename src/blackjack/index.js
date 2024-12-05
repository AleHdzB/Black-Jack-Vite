import _ from 'underscore';
// import {crearDeck as cearNuevoDeck} from './usecases/crear-deck'
import { crearDeck, pedirCarta , turnoComputadora, crearYAnimarCarta,
    acumularPuntos} from './usecases/index'


  let deck              = [],
      puntosJugadores   = [];

  const tipos      = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];
  // HTML references
  const btnPedir             = document.querySelector('#btnPedir'),
        btnDetener           = document.querySelector('#btnDetener'),
        btnNuevo             = document.querySelector('#btnNuevo'),
        puntosHTML           = document.querySelectorAll('small'),
        divCartasJugadores   = document.querySelectorAll('.divCartas');
        
  const startGame = (numJugadores = 2) => {

        deck = crearDeck(tipos, especiales);
        console.clear();
        puntosJugadores = [];
        for (let i=0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }
        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

  }
  // Eventos
  btnPedir.addEventListener('click', async () => {
      const carta = pedirCarta( deck);
      let puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

      await crearYAnimarCarta(carta, puntosHTML, 0, divCartasJugadores, 
            puntosJugadores);
      if(puntosJugador > 21){
          console.warn('Game over :c');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador, puntosHTML, deck ,puntosJugadores,
            divCartasJugadores
          );
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0], puntosHTML, deck , puntosJugadores,
        divCartasJugadores
      );
  });
  btnNuevo.addEventListener('click',() =>{
      startGame();
      btnNuevo.disabled = true;
  });

