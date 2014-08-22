var dibujo, lienzo, t, b, dibujotwo, pacman;
function inicio()
{
    t = document.getElementById("usuario");
    b = document.getElementById("dibujalo");
    dibujo = document.getElementById("dibujito");
    dibujotwo = document.getElementById("pacman");
    pacman = dibujotwo.getContext("2d");
    lienzo = dibujo.getContext("2d");

    b.addEventListener("click", dibujarGrilla);

    lienzo.beginPath();
    lienzo.strokeStyle = "#00F";
    lienzo.arc(150,150,100,0,((1*Math.PI)/2), false);
    lienzo.closePath();
    lienzo.stroke();

    Pacman();
}
function dibujarGrilla () 
{
    var pony = lienzo;
    var rayas = Number(t.value) + 1;
    var ancho = 300, alto = 300;
    var linea, puntoX, puntoY;

    var anchoLinea = (ancho / (rayas / 2));
    var limiteX = (ancho / anchoLinea);
    var limiteY = (alto / anchoLinea);

    pony.strokeStyle = "#AAA";

    for(linea = 1; linea < (limiteX * 2); linea++)
    {
        puntoX = (linea * anchoLinea);
        puntoY = alto - (linea * anchoLinea);
        console.log(puntoX, 300, 0, puntoY);
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(puntoX, 300);
        pony.lineTo(0, puntoY);
        pony.stroke();
        pony.closePath();
    }

    for(linea = 1; linea < (limiteX * 2); linea++)
    {
        puntoX = (linea * anchoLinea);
        puntoY = (linea * anchoLinea);
        console.log(puntoX, 0, 0, puntoY);
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(puntoX, 0);
        pony.lineTo(0, puntoY);
        pony.stroke();
        pony.closePath();
    }
}
function Pacman ()
{
    pacman.beginPath();
    pacman.strokeStyle = "#000";
    pacman.fillStyle = "#FF0";
    pacman.arc(150,150,100,((Math.PI)/4),false);
    pacman.lineTo(150,150);
    pacman.closePath();
    pacman.fill();
    pacman.stroke();

    pacman.beginPath();
    pacman.strokeStyle = "#000";
    pacman.fillStyle = "#000";
    pacman.arc(200,100,10,((Math.PI*2)),false);
    pacman.closePath();
    pacman.fill();
    pacman.stroke();
}