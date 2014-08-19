function Pokemon (n,v,a)
{
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.grito = "Pika!";
	this.gritar = function() {
		alert(this.grito);
	};
}

var pikachu = new Pokemon("Pikachu",100,55);

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