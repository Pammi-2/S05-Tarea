window.onload = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Ajustar el tamaño real del canvas y evitar distorsión
    canvas.width = window.innerWidth; // Tamaño visual en CSS
    canvas.style.height = window.innerHeight; 
    //canvas.width = 630; // Tamaño real del lienzo
    canvas.height = window.innerHeight;

    // Obtener el centro del canvas
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;
    const radio = 165;
    const radio2 = 10; // Tamaño del círculo
    const espacio = 25;

    //cuadrado 
    ctx.beginPath();
    ctx.strokeStyle = "black";
   
    ctx.rect(centroX-250, centroY-250, 500, 500); // Coordenadas y tamaño
    ctx.fillStyle = "#F2E3D0";
    ctx.fill(); // Rellenar el rectángulo
 
    // Espaciado entre líneas
    

    // Función para dibujar una línea
    function dibujarLinea(x) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.moveTo(x, 120);
        ctx.lineTo(x, 600);
        ctx.stroke();
    }

    // Dibujar 16 líneas (8 a la izquierda y 8 a la derecha del centro)
    for (let i = -8; i <= 7; i++) {
        dibujarLinea(centroX + i * espacio);
    }

    // Dibujar círculo rojo en el centro
    ctx.beginPath();
    ctx.arc(centroX-10, centroY-10, radio, 0, Math.PI * 2);
    ctx.fillStyle = "#D9580D";
    ctx.fill();
    ctx.strokeStyle = "#F2E3D0"; // Contorno del círculo
    ctx.lineWidth = 12;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centroX+70, centroY-110, radio2, 0, Math.PI * 2);
    ctx.fillStyle = "#F2E3D0";
    ctx.fill();
    // Contorno del círculo
    ctx.lineWidth = 12;
    ctx.stroke();
};



