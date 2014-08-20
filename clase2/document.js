var Pokemon, Movimiento;

Movimiento = function(nombre, ataque) {
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
		return exito;
	};

	validarParametros();

	this.nombre = nombre;
	this.ataque = ataque;
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
};

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