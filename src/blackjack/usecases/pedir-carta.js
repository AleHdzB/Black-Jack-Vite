  // Funcion para pedir una carta
 
 /**
  * 
  * @param {Array<String>} deck Ejemplo: 2C
  * @returns {String} retorna la ultima carta del deck
  */
  export const pedirCarta = (deck = []) => {
    if ( !deck || deck.length === 0){
        throw "No hay cartas en el deck";
    }
    return deck.pop();
}