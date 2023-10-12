
//let nombre = prompt ('Buscar por nombre')
//let genero = prompt ('Ingresar genero')
let year= prompt ('Hola, te invitamos a que escribas una fecha para saber cual fue el mejor juego de ese año')
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


//CARRITO DE JUEGOS
let articulosCarrito = [];

const listaJuegos = document.querySelector('#catalogo-juegos')
//console.log(listaJuegos)

const contenedorCarrito = document.querySelector('#lista-carrito tbody')
console.log(contenedorCarrito)


//Vaciar todo el carrito
const vaciarCarritoBtn= document.querySelector ('#vaciar-carrito')

//Borrar item del carrito
const carrito = document.querySelector('#carrito')

document.addEventListener('DOMContentLoaded', () => {
	if(JSON.parse(localStorage.getItem('carrito')) === null ) {
		articulosCarrito=[]
	} else{
	articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
	}
	dibujarCarritoHTML();
})

listaJuegos.addEventListener('click', agregarJuego)
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
carrito.addEventListener('click', eliminarProducto)


function agregarJuego(evt) {
	evt.preventDefault()
	if(evt.target.classList.contains('agregar-carrito')){
		//console.log(evt.target.parentElement.parentElement)
		const juego = evt.target.parentElement.parentElement
		leerDatosJuego(juego)
	}
}

function leerDatosJuego(item) {
	//console.log(item.querySelector('img').src)

	const infoProducto = {
		imagen: item.querySelector('img').src,
		titulo: item.querySelector('h5').textContent,
		precio: item.querySelector('#precio').textContent,
		id: item.querySelector('.agregar-carrito').getAttribute('data-id'),
		cantidad: 1
		}

	if(articulosCarrito.some( prod => prod.id === infoProducto.id)) {
		const productos = articulosCarrito.map (producto => {
		if(producto.id === infoProducto.id) {
			let cantidad = producto.cantidad
			cantidad +=1
			producto.cantidad = cantidad
			return producto
		}else {
			return producto
		}	
		})
		articulosCarrito = productos.slice()
	} else {
		articulosCarrito.push(infoProducto)
	}
	dibujarCarritoHTML()
	console.log(articulosCarrito)
}

function dibujarCarritoHTML(){
	limpiarCarrito()
		articulosCarrito.forEach(producto => {
		const fila = document.createElement('tr')
		fila.innerHTML = `
		<td><img src="${producto.imagen}"/></td>
		<td> ${producto.titulo}" </td>
		<td> ${producto.precio}" </td>
		<td> ${producto.cantidad}" </td>
		<td>
			<a href='#' class='borrar-producto' data-id="${producto.id}">❌</a>
		</td>
		`
		contenedorCarrito.appendChild(fila)
	})
	sincronizarStorage();
}

function limpiarCarrito(){
	while (contenedorCarrito.firstChild){
		contenedorCarrito.removeChild(contenedorCarrito.firstChild)
	}
}

function vaciarCarrito(){
	while (contenedorCarrito.firstChild){
		contenedorCarrito.removeChild(contenedorCarrito.firstChild)
	}
	articulosCarrito= []
	sincronizarStorage()
}

//STORAGE
function sincronizarStorage() {
	localStorage.setItem('carrito',JSON.stringify(articulosCarrito))
}

function eliminarProducto(evt){
	evt.preventDefault();
	if(evt.target.classList.contains('borrar-producto')){
		const producto = evt.target.parentElement.parentElement
		const productoId = producto.querySelector('a').getAttribute ('data-id')
		articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId)
		dibujarCarritoHTML()
	}
}

