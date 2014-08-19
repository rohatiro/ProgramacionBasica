// var menu = ["Productos","Ventas","Contactos"];
// document.write(menu[2]);

// var dofa = [["Fuerza", "Oportunidad"],["Debilidades","Amenazas"]];
// document.write(dofa[0][1]);

function boom () {
	alert("BOOM!!");
	document.write("<h1>BOOM! Elegiste un area minada :(</h1>");
}

function ganaste () {
	document.write("Eres un ganador :)");
}

// 1 = Bomba. 0 = No hay Bomba
var campo =[[1,0,0],
			[0,1,0],
			[1,1,1]];

var textos = [ganaste, boom];

var x,y;

alert("Estas en un campo minado\nElije una posición entre el 0 y el 2 para X y para Y");
x = prompt("Posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");

if(x < 3 && y < 3){
	var posicion = campo[x][y];
	textos[posicion]();
} else {
	document.write("Te saliste del campo");
	boom();
}