function aleatorio(minimo, maximo){
	var valor = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return valor;
}

var piedra = 0,
	papel = 1,
	tijera = 2;

var opciones = ["Piedra","Papel","Tijera"];

var opcionUsuario, opcionMaquina;

opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Que eliges?\nPiedra = 0\nPapel = 1\nTijera=2",0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligio " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
	if(opcionUsuario == opcionMaquina) {
		alert("Empate");
	} else if(opcionMaquina == papel) {
		alert("Perdiste");
	} else if(opcionMaquina == tijera){
		alert("Ganaste");
	}
} else if(opcionUsuario == papel)
{
	if(opcionUsuario == opcionMaquina) {
		alert("Empate");
	} else if(opcionMaquina == tijera) {
		alert("Perdiste");
	} else if(opcionMaquina == piedra){
		alert("Ganaste");
	}
} else if(opcionUsuario == tijera)
{
	if(opcionUsuario == opcionMaquina) {
		alert("Empate");
	} else if(opcionMaquina == piedra) {
		alert("Perdiste");
	} else if(opcionMaquina == papel){
		alert("Ganaste");
	}
}