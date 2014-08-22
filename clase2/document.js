var Pokemon, Movimiento, ids = 0, idsm = 0, entrenador, oponente, todosmovimientos;

Movimiento = function(nombre, ataque, tipo) {
	var validarParametros;

	validarParametros = function() {
		var exito = true;
		if (typeof nombre !== "string")
		{
			throw "El nombre del movimiento debe ser una cadena de caracteres";
		}
		else if (nombre.length === 0)
		{
			throw "El nombre del movimiento no puede ser una cadena vacia";
		}
		else if (isNaN(parseInt(ataque)))
		{
			throw "El ataque del movimiento debe ser un dato numerico";
		}
		else if (isNaN(parseInt(tipo)))
		{
			throw "El tipo del movimiento debe ser un dato numerico";
		}
		else if (tipo < 0 && tipo > 1)
		{
			throw "El tipo del movimiento debe ser 0 (Fisico), 1 (Especial)";
		}
		return exito;
	};

	validarParametros();

	this.nombre = nombre;
	this.ataque = ataque;
	this.tipo = tipo;
	this.id = idsm;
	idsm++;
};

Pokemon = function(nombre, puntosvida, ataque, defensa, ataqueespecial, defensaespecial, velocidad, movimientos) {
	var validarParametros;

	validarParametros = function() {
		var exito = true;
		if (typeof nombre !== "string")
		{
			throw "El nombre del pokemon debe ser una cadena de caracteres";
		}
		else if (nombre.length === 0)
		{
			throw "El nombre del pokemon no puede ser una cadena vacia"
		}
		else if (isNaN(parseInt(puntosvida)) || isNaN(parseInt(ataque)) || isNaN(parseInt(defensa)) || isNaN(parseInt(ataqueespecial)) || isNaN(parseInt(defensaespecial)) || isNaN(parseInt(velocidad)))
		{
			throw "El Ataque, Ataque Especial, Defensa, Defensa Especial, Velocidad y los Puntos de Vida deben ser datos numericos"
		}
		else if (Object.prototype.toString.call(movimientos) !== "[object Array]")
		{
			throw "Los movimientos del pokemon deben estar en un arreglo";
		}
		else if (movimientos.length < 1)
		{
			throw "El pokemon debe tener al menos un movimiento";
		}
		else if (movimientos.length > 4) {
			throw "El pokemon no puede tener mas de 4 movimientos";
		}
		else
		{
			var i = 0;
			for (i; i < movimientos.length; i++)
			{
				if (!(movimientos[i] instanceof Movimiento))
				{
					throw "Los movimientos deben ser un objeto de tipo Ataque";
				}
			}
		}
		return exito;
	};

	validarParametros();

	this.nombre = nombre;
	this.puntosvida = puntosvida;
	this.movimientos = movimientos;
	this.ataque = ataque;
	this.defensa = defensa;
	this.ataqueespecial = ataqueespecial;
	this.defensaespecial = defensaespecial;
	this.velocidad = velocidad;
	this.Daño = function(movimiento, pokemonatacante) {
		var daño,variacion,ataque,self,defensa;
		self = this;
		variacion = Math.floor(Math.random() * (100 - 85 + 1) + 85);
		ataque = movimiento.tipo === 0 ? pokemonatacante.ataque : pokemonatacante.ataqueespecial;
		defensa = movimiento.tipo === 0 ? self.defensa : self.defensaespecial;
		daño = Math.floor((0.01 * 1 * 1 * variacion) * ((((0.2 * 50 + 1) * ataque * movimiento.ataque)/(25 * defensa)) + 2));
		self.puntosvida = self.puntosvida - daño;
		return daño;
	}
	this.id = ids;
	ids++;
};

Pikachu = new Pokemon("Pikachu",
						220,
						45,33,50,40,45,
						[new Movimiento("Impactrueno", 40, 1), new Movimiento("Trueno", 110, 1), new Movimiento("Cola férrea", 100, 0), new Movimiento("Placaje eléctrico", 120, 0)]);

Charizard = new Pokemon("Charizard",
						220,
						50,43,50,40,38,
						[new Movimiento("Lanzallamas", 90, 1), new Movimiento("Anillo Ígneo", 150, 1), new Movimiento("Ataque ala", 60, 0), new Movimiento("Infierno", 100, 1)]);

var pokemons = [Pikachu, Charizard];

var eleccion;

function Inicio () 
{
	var i;
	eleccion = document.getElementById("Eleccion");

	for (i = 0; i < pokemons.length; i++)
	{
		eleccion.innerHTML += "<button class=\"pokemon\" data-id=\""+pokemons[i].id+"\">"+pokemons[i].nombre+"</button>";
	}

	var botones = document.getElementsByClassName("pokemon");

	function Seleccion(e)
	{
		var pokemonOponente, pokemonEntrenador;

		for (i = 0; i < pokemons.length; i++)
		{
			if (pokemons[i].id == e.target.dataset.id)
			{
				pokemonEntrenador = pokemons[i];
			} 
			else
			{
				pokemonOponente = pokemons[i];
			}
		}

		entrenador = pokemonEntrenador;
		oponente = pokemonOponente;

		eleccion.innerHTML = "<div id=\"Oponente\"><h2>"+ pokemonOponente.nombre +"</h2><h3 class=\"puntosvida\">"+ pokemonOponente.puntosvida +"</h3></div><div id=\"Entrenador\"><h2>"+ pokemonEntrenador.nombre+"</h2><h3 class=\"puntosvida\">"+ pokemonEntrenador.puntosvida +"</h3><div>";

		var movimientoshtml = pokemonEntrenador.movimientos;
		for (i = 0; i < movimientoshtml.length; i++) {

			eleccion.innerHTML += "<button class=\"movimiento\" data-index=\""+ i +"\">"+ movimientoshtml[i].nombre +"</button>";
		}

		eleccion.innerHTML += "</div></div>";

		var movimientos = document.getElementsByClassName("movimiento");

		for (i = 0; i < movimientos.length; i++) {
			movimientos[i].addEventListener("click", Batalla);
		}
	}

	for(i = 0; i < botones.length; i++)
	{
		botones[i].addEventListener("click", Seleccion);
	}
}
function Batalla (e) {
	// var primerpokemon = entrenador.velocidad > oponente.velocidad ? entrenador : entrenador.velocidad < oponente.velocidad ? oponente : Math.floor(Math.random() * 2) === 1 ? oponente : entrenador;
	var primerpokemon = entrenador.velocidad > oponente.velocidad ? 0 : entrenador.velocidad < oponente.velocidad ? 1 : Math.floor(Math.random() * 2);
	var movimientoindex = Number(e.target.dataset.index);
	var i,movimientooponente,daño;
	movimientooponente = Math.floor(Math.random() * (3 - 0 + 1) + 0);
	if (primerpokemon == 0)
	{
		alert(entrenador.nombre + " utiliza " + entrenador.movimientos[movimientoindex].nombre);
		daño = oponente.Daño(entrenador.movimientos[movimientoindex], entrenador);
		alert(entrenador.nombre + " le a causado " + daño + " de daño");
		document.querySelector("#Oponente .puntosvida").innerHTML = oponente.puntosvida;

		if(Resultado()) return false;

		alert(oponente.nombre + " utiliza " + oponente.movimientos[movimientooponente].nombre);
		daño = entrenador.Daño(oponente.movimientos[movimientooponente], oponente);
		alert(oponente.nombre + " le a causado " + daño + " de daño");
		document.querySelector("#Entrenador .puntosvida").innerHTML = entrenador.puntosvida;
		if(Resultado()) return false;
	}
	else
	{
		alert(oponente.nombre + " utiliza " + oponente.movimientos[movimientooponente].nombre);
		daño = entrenador.Daño(oponente.movimientos[movimientooponente], oponente);
		alert(oponente.nombre + " le a causado " + daño + " de daño");
		document.querySelector("#Entrenador .puntosvida").innerHTML = entrenador.puntosvida;
		if(Resultado()) return false;
		
		alert(entrenador.nombre + " utiliza " + entrenador.movimientos[movimientoindex].nombre);
		daño = oponente.Daño(entrenador.movimientos[movimientoindex], entrenador);
		alert(entrenador.nombre + " le a causado " + daño + " de daño");
		document.querySelector("#Oponente .puntosvida").innerHTML = oponente.puntosvida;
		if(Resultado()) return false;
	}
}

function Resultado () {
	if (entrenador.puntosvida <= 0)
	{
		eleccion.innerHTML = "<h1>"+oponente.nombre+" Gana!!!</h1>"
		return true;
	}
	else if (oponente.puntosvida <= 0)
	{
		eleccion.innerHTML = "<h1>"+entrenador.nombre+" Gana!!!</h1>"
		return true;
	}
	return false;
}
// function Pokemon (n,v,a)
// {
// 	this.nombre = n;
// 	this.vida = v;
// 	this.ataque = a;
// 	this.grito = "Pika!";
// 	this.gritar = function() {
// 		alert(this.grito);
// 	};
// }

// var pikachu = new Pokemon("Pikachu",100,55);

// function Pokemon (nombrePokemon, vidaPokemon, ataquePokemon) {
// 	var estructuraPokemon = {
// 		nombre: nombrePokemon,
// 		vida: vidaPokemon,
// 		ataque: ataquePokemon,
// 		datos: {tipo:"Tierra",debilidad:"Fuego"}
// 	};
// 	return estructuraPokemon;
// }

// var pikachu = Pokemon("Pikachu",100,55);
// var bulbasaur = Pokemon("Bulbasaur",90,50);

// bulbasaur.nombre = "Bulbasaur";
// bulbasaur.tipo = "Planta";
// bulbasaur.vida = 90;
// bulbasaur.ataque = 50;

// console.log(bulbasaur);

// // alert("funciona?");
// document.write("Hola mamá!!");
// var pi = 3.141592654;
// // pi = Math.floor(pi);
// pi = Math.ceil(pi);
// document.write(pi);

// var maximo;
// maximo = Math.max(1,3,423,3,12,43332432);
// document.write(maximo);