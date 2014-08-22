function aleatorio(minimo, maximo){
	var valor = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return valor;
}

var piedra = 0,
	papel = 1,
	tijera = 2,
	lagarto = 3,
	spock = 4;

var opciones = ["Piedra","Papel","Tijera","Lagarto", "Spock"];

var opcionUsuario, opcionMaquina;

opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("¿Que eliges?\nPiedra = 0\nPapel = 1\nTijera=2\nLagarto=3\nSpock=4",0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligio " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
	if(opcionUsuario == opcionMaquina) {
		alert("Empate");
	} else if(opcionMaquina == papel || opcionMaquina  == spock) {
		alert("Perdiste");
	} else if(opcionMaquina == tijera || opcionMaquina == lagarto) {
		alert("Ganaste");
	}
} else if(opcionUsuario == papel)
{
	if(opcionUsuario == opcionMaquina) {
		alert("Empate");
	} else if(opcionMaquina == tijera || opcionMaquina == lagarto) {
		alert("Perdiste");
	} else if(opcionMaquina == piedra || opcionMaquina == spock) {
		alert("Ganaste");
	}
} else if(opcionUsuario == tijera)
{
	if(opcionUsuario == opcionMaquina) {
		alert("Empate");
	} else if(opcionMaquina == piedra || opcionMaquina == spock) {
		alert("Perdiste");
	} else if(opcionMaquina == papel || opcionMaquina == lagarto){
		alert("Ganaste");
	}
}
else if(opcionUsuario == lagarto)
{
	if(opcionUsuario == opcionMaquina) {
		alert("Empate");
	} else if(opcionMaquina == tijera || opcionMaquina == piedra) {
		alert("Perdiste");
	} else if(opcionMaquina == papel || opcionMaquina == spock){
		alert("Ganaste");
	}
}
else if(opcionUsuario == spock)
{
	if(opcionUsuario == opcionMaquina) {
		alert("Empate");
	} else if(opcionMaquina == papel || opcionMaquina == lagarto) {
		alert("Perdiste");
	} else if(opcionMaquina == tijera || opcionMaquina == piedra){
		alert("Ganaste");
	}
}