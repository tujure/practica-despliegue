/**
 * Cuenta los lugares que aparecen en la lista.
 * @param {HTMLUListElement} lista Lista de lugares.
 * @returns {number} Número de lugares de la lista.
 */
function contarLugares(lista) {
    return lista.children.length;
}

const listaLugares = document.getElementById("lugares");
const totalLugares = document.getElementById("total-lugares");

totalLugares.textContent = contarLugares(listaLugares);