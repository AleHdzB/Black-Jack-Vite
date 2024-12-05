import _ from 'underscore';
/**
 * 
 * @param {Array<String>} tiposCarta  Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>}  retorna un {Array<String>}
*/
export const crearDeck = (tiposCarta, tiposEspeciales) => {
    if (!tiposCarta || tiposCarta === 0) 
        throw Error('tiposCarta es obligatorio como un arreglo de strings')
    if (!tiposEspeciales || tiposEspeciales === 0) 
        throw Error('tiposEspeciales es obligatorio como un arreglo de strings')
    let deck = [];
    for (let i = 2; i<=10;i++){
        for(let tipo of tiposCarta){
            deck.push( i + tipo );
        }        
    }

    for(let tipo of tiposCarta){
        for( let esp of tiposEspeciales){
            deck.push( esp + tipo );                
        }
    }

    return _.shuffle(deck);
}