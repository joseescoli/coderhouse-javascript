alert(" =============================================\n \
                            Bienvenidos a Pasapalabra \
        =============================================\n\n \
        El concurso de preguntas y respuestas que suma puntos.\n\n\n \
        Presione Aceptar cuando esté listo para comenzar... \n \
        ");

let correctas = "1234";
let puntaje = 0;
let mensaje = "";
let respuestas = "";
respuestas += prompt("Pregunta #1\n\n \
                    [Recuerde ingresar sólo el número de la opción]\n \
                    Ingrese las opciones:\n \
                    ==========================\n\n \
                    1) Opción 1 \n \
                    2) Opción 2 \n \
                    3) Opción 3 \n \
                    4) Opción 4 \n \
                    ");
                    
respuestas += prompt("Pregunta #2\n\n \
                    [Recuerde ingresar sólo el número de la opción]\n \
                    Ingrese las opciones:\n \
                    ==========================\n\n \
                    1) Opción 1 \n \
                    2) Opción 2 \n \
                    3) Opción 3 \n \
                    4) Opción 4 \n \
                    ");
respuestas += prompt("Pregunta #3\n\n \
                    [Recuerde ingresar sólo el número de la opción]\n \
                    Ingrese las opciones:\n \
                    ==========================\n\n \
                    1) Opción 1 \n \
                    2) Opción 2 \n \
                    3) Opción 3 \n \
                    4) Opción 4 \n \
                    ");
respuestas += prompt("Pregunta #4\n\n \
                    [Recuerde ingresar sólo el número de la opción]\n \
                    Ingrese las opciones:\n \
                    ==========================\n\n \
                    1) Opción 1 \n \
                    2) Opción 2 \n \
                    3) Opción 3 \n \
                    4) Opción 4 \n \
                    ");

for (let index = 0; index < correctas.length; index++) {
    if (correctas.charAt(index) == respuestas.charAt(index)) {
        puntaje++;
    }
}

if (puntaje >= 0 &&  puntaje <= 1 ) {
    mensaje = "¡Hay que repasar muchos conceptos básicos!";
} else if (puntaje >= 2 &&  puntaje <= 3) {
    mensaje = "¡Bien ahí, algo te acordás. Te falta un poco repasar igual! Siempre se puede mejorar.";
} else {
    mensaje = "¡Impecable! Buen trabajo. ¡FELICITACIONES!";
}

alert( `=============================================\n \
        RESULTADOS FINALES \
        =============================================\n\n \
        Su puntaje es ${puntaje}\n \
        ${mensaje}\n \
        `);