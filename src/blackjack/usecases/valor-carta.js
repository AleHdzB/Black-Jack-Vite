/**
 * Obtiene el valor de la carta
 * @param {String} carta Ejemplo: 11
 * @returns {Number}Retorna el valor de la carta enviada
 */

export const valorCarta = (carta) =>{
    if (!carta)throw Error ('La carta es obligatoria')
    const valor = carta.substring(0,carta.length -1);
    if ( isNaN (valor)){
        return (valor === 'A') ? 11:10;
    }
    return valor * 1;
}