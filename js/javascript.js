//let nombre = prompt ('Buscar por nombre')
//let genero = prompt ('Ingresar genero')
 let year = prompt ('Seleccionar año')
 //let empresa = prompt ('Ingresar empresa')


const datasearch = {
	//nombre: nombre,
	//genero: genero,
 	year: Number(year),
 	//empresa: empresa,
}

function mostrarjuegos(juegos) {
	juegos.forEach( juego => console.log (juego.nombre + ' - Genero: ' + juego.genero +  ' - Año: ' + juego.year +  ' - Empresa: ' + juego.empresa))
}

function filtrarjuegos() {
	const resultado = juegos.filter(filtrarnombre).filter(filtrargenero).filter(filtraryear).filter(filtrarempresa)
	if(resultado.length>0) {
		mostrarjuegos(resultado)
	}else{
		console.error('No se encontraron resultados')
	}	
	}


function filtrarnombre(juego) {
	if(datasearch.nombre) {
		return juego.nombre === datasearch.nombre
	}
	return(juego)
}

function filtrargenero(juego) {
	if(datasearch.genero) {
		return juego.genero === datasearch.genero
	}
	return juego;
}

function filtraryear(juego) {
	if(datasearch.year) {
		return juego.year=== datasearch.year
	}
	return juego;
}

function filtrarempresa(juego) {
	if(datasearch.empresa) {
		return juego.empresa === datasearch.empresa
	}
	return juego;
}

filtrarjuegos()