
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

