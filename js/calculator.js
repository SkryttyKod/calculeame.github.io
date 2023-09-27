function calculator() {
    var ancho_input = document.getElementById("ancho").value;
    var largo_input = document.getElementById("largo").value;
    var divisiones_input = document.getElementById("divisiones").value;
    var grosor_input = document.getElementById("grosor").value;

    var output = document.getElementById("output");

    // Transforma los valores ingresados (str a float)
    // Si hay un valor, entonces, se transforma a float
    // Si no hay un valor, entonces valdrá "null"
    var ancho = ancho_input ? parseFloat(ancho_input) : null;
    var largo = largo_input ? parseFloat(largo_input) : null;
    var divisiones = divisiones_input ? parseFloat(divisiones_input) : null;
    var grosor = grosor_input ? parseFloat(grosor_input) : null;

    var espacio_ancho = (ancho - divisiones * grosor) / (divisiones + 1);
    var espacio_largo = (largo - divisiones * grosor) / (divisiones + 1);

    var posiciones_ancho = [];
    var posiciones_largo = [];

    for (let i = 0; i < divisiones; i++) {
        var posicion = espacio_ancho + i * (espacio_ancho + grosor);
        posiciones_ancho.push(Math.round(posicion * 100) / 100);
    }

    for (let i = 0; i < divisiones; i++) {
        var posicion = espacio_largo + i * (espacio_largo + grosor);
        posiciones_largo.push(Math.round(posicion * 100) / 100);
    }

    console.log(posiciones_ancho);

    output.innerText = "Posiciones a lo ancho: [" + posiciones_ancho.join(" | ") + "]" +
    "\nPosiciones a lo largo: [" + posiciones_largo.join(" | ") + "]";
}

document.getElementById("ancho").addEventListener('input', calculator);
document.getElementById("largo").addEventListener('input', calculator);
document.getElementById("divisiones").addEventListener('input', calculator);
document.getElementById("grosor").addEventListener('input', calculator);