window.onload = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Ajustar el tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;

    
 

    // Función para dibujar un círculo
    function dibujarcirc(radio, centroX, centroY) {
        ctx.beginPath();
        ctx.arc(centroX+40, centroY, radio, 0, Math.PI/2);

        // Contorno del círculo
        ctx.strokeStyle = "#F2EBD5"; 
        ctx.lineWidth = 8;
        ctx.stroke();
    }

    // Dibujar 9 círculos con radios que aumentan de 10 en 10
    for (let i = 0; i < 9; i++) {
        let radio =15 + i * 20; // Radio inicial de 50 y aumenta de 10 en 10
        dibujarcirc(radio, centroX, centroY); // Llamamos a la función con el radio actualizado
    }
    
    function dibujarcirc1(radio, centroX, centroY) {
        ctx.beginPath();
       
        ctx.arc(centroX-40, centroY-3, radio,Math.PI*3/2, Math.PI*2);

        // Contorno del círculo
        ctx.strokeStyle = "#F2EBD5"; 
        ctx.lineWidth = 8;
        ctx.stroke();
    }

    // Dibujar 9 círculos con radios que aumentan de 10 en 10
    for (let i = 0; i < 9; i++) {
        let radio =15 + i * 20; // Radio inicial de 50 y aumenta de 10 en 10
        dibujarcirc1(radio, centroX+20, centroY); // Llamamos a la función con el radio actualizado
    }

    function dibujarcirc2(radio, centroX, centroY) {
        ctx.beginPath();
       
        ctx.arc(centroX+17, centroY+60, radio,Math.PI/2, Math.PI);

        // Contorno del círculo
        ctx.strokeStyle = "#F2EBD5"; 
        ctx.lineWidth = 8;
        ctx.stroke();
    }

    // Dibujar 9 círculos con radios que aumentan de 10 en 10
    for (let i = 0; i < 9; i++) {
        let radio =15 + i * 20; // Radio inicial de 50 y aumenta de 10 en 10
        dibujarcirc2(radio, centroX+20, centroY); // Llamamos a la función con el radio actualizado
    }

    function dibujarcirc3(radio, centroX, centroY) {
        ctx.beginPath();
       
        ctx.arc(centroX-43, centroY+57, radio,Math.PI, Math.PI*3/2);

        // Contorno del círculo
        ctx.strokeStyle = "#F2EBD5"; 
        ctx.lineWidth = 8;
        ctx.stroke();
    }

    // Dibujar 9 círculos con radios que aumentan de 10 en 10
    for (let i = 0; i < 9; i++) {
        let radio =15 + i * 20; // Radio inicial de 50 y aumenta de 10 en 10
        dibujarcirc3(radio, centroX+20, centroY); // Llamamos a la función con el radio actualizado
    }
};
