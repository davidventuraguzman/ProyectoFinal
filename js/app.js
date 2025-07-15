//Cargar productos destacados, recientes y más vendidos
const productos = {
    destacados: `
        <!-- Producto 1 -->
			<div class="card-product">
				<div class="container-img">
					<img src="img/pastel1.jpg" alt="Torta Hello Kitty" />
					<span class="discount">-10%</span>
					
				</div>
				<div class="content-card-product">
					<div class="stars">
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-regular fa-star"></i>
					</div>
					<h3>Torta Hello Kitty</h3>
					<button class="btn-agregar-carrito" 
                            data-nombre="TORTA HELLO KITTY" 
                            data-precio="261.00" 
                            data-img="img/pastel1.jpg">
                            <i class="fa-solid fa-cart-plus"></i>
                            <span data-section="productos" data-value="boton">Agregar</span> 
                    </button>
					<p class="price">S/261 <span>S/290</span></p>
				</div>
			</div>
			<!-- Producto 2 -->
			<div class="card-product">
				<div class="container-img">
					<img src="img/pastel2.jpg" alt="Mini torta con flores" />
					<span class="discount">-20%</span>
					
				</div>
				<div class="content-card-product">
					<div class="stars">
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-regular fa-star"></i>
						<i class="fa-regular fa-star"></i>
					</div>
					<h3>Box Floral</h3>
					<button class="btn-agregar-carrito" 
                            data-nombre="MINI TORTA CON FLORES" 
                            data-precio="95.00" 
                            data-img="img/pastel2.jpg">
                            <i class="fa-solid fa-cart-plus"></i>
                            <span data-section="productos" data-value="boton">Agregar</span> 
                    </button>
					<p class="price">S/52 <span>S/65</span></p>
                    
				</div>
			</div>
			<!-- producto 3 -->
			<div class="card-product">
				<div class="container-img">
					<img src="img/pastel3.jpg" alt="Torta en forma de corazón" />
					
				</div>
				<div class="content-card-product">
					<div class="stars">
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
					</div>
					<h3>Torta corazón rosado</h3>
                    <button class="btn-agregar-carrito" 
                            data-nombre="TORTA CORAZÓN ROSADO" 
                            data-precio="80.00" 
                            data-img="img/pastel3.jpg">
                            <i class="fa-solid fa-cart-plus"></i>
                            <span data-section="productos" data-value="boton">Agregar</span> 
                    </button>
					<p class="price">S/80</p>
                    
				</div>
			</div>
			<!-- producto 4 -->
			<div class="card-product">
				<div class="container-img">
					<img src="img/pastel4.jpg" alt="Torta revelación de sexo" />
					
				</div>
				<div class="content-card-product">
					<div class="stars">
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-regular fa-star"></i>
					</div>
					<h3>Torta boy or girl</h3>
					<button class="btn-agregar-carrito" 
                            data-nombre="REVELACIÓN DE SEXO" 
                            data-precio="245.00" 
                            data-img="img/pastel4.jpg">
                            <i class="fa-solid fa-cart-plus"></i>
                            <span data-section="productos" data-value="boton">Agregar</span> 
                    </button>
					<p class="price">S/245</p>
				</div>
			</div>
    `,
    recientes: `
        <div class="card-product">
            <div class="container-img">
                <img src="img/pastel5.jpg" alt="Torta Unicornio" />
                <span class="discount">-15%</span>
                
            </div>
            <div class="content-card-product">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <h3>Torta Spiderman</h3>
                <button class="btn-agregar-carrito" 
                        data-nombre="UNICORNIO" 
                        data-precio="204.00" 
                        data-img="img/pastel5.jpg">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span data-section="productos" data-value="boton">Agregar</span> 
                </button>
                <p class="price">S/204 <span>S/240</span></p>
            </div>
        </div>
        <div class="card-product">
            <div class="container-img">
                <img src="img/pastel6.jpg" alt="Cupcakes de chocolate" /> 
            </div>
            <div class="content-card-product">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <h3>Box Cumpleaños Amoroso</h3>
                <button class="btn-agregar-carrito" 
                        data-nombre="Cupcake chocolate" 
                        data-precio="55.00" 
                        data-img="img/pastel6.jpg">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span data-section="productos" data-value="boton">Agregar</span> 
                </button>
                <p class="price">S/55</p>
            </div>
        </div>
        <div class="card-product">
            <div class="container-img">
                <img src="img/pastel7.jpg" alt="Torta Red Velvet" />      
            </div>
            <div class="content-card-product">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <h3>Torta Cinamonroll</h3>
                <button class="btn-agregar-carrito" 
                        data-nombre="torta red velvet" 
                        data-precio="150.00" 
                        data-img="img/pastel7.jpg">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span data-section="productos" data-value="boton">Agregar</span> 
                </button>
                <p class="price">S/150</p>
            </div>
        </div>
        <div class="card-product">
            <div class="container-img">
                <img src="img/pastel8.jpg" alt="Torta de Zanahoria" />
                <span class="discount">-10%</span>
                
            </div>
            <div class="content-card-product">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h3>Torta Cumpleaños mamá</h3>
                <button class="btn-agregar-carrito" 
                        data-nombre="torta de zanahoria" 
                        data-precio="153.00" 
                        data-img="img/pastel8.jpg">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span data-section="productos" data-value="boton">Agregar</span> 
                </button>
                <p class="price">S/153 <span>S/170</span></p>
            </div>
        </div>
    `,
    vendidos: `
        <div class="card-product">
				<div class="container-img">
					<img src="img/pastel1.jpg" alt="Torta Hello Kitty" />
					<span class="discount">-10%</span>
					
				</div>
				<div class="content-card-product">
					<div class="stars">
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-regular fa-star"></i>
					</div>
					<h3>Torta Hello Kitty</h3>
					<button class="btn-agregar-carrito" 
                            data-nombre="torta hello kitty" 
                            data-precio="261.00" 
                            data-img="img/pastel1.jpg">
                            <i class="fa-solid fa-cart-plus"></i>
                            <span data-section="productos" data-value="boton">Agregar</span> 
                    </button>
					<p class="price">S/261 <span>S/290</span></p>
				</div>
			</div>
        <div class="card-product">
            <div class="container-img">
                <img src="img/pastel10.jpg" alt="Cupcakes de chocolate" />
                
            </div>
            <div class="content-card-product">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h3>Box Sorpresa Amorosa</h3>
                <button class="btn-agregar-carrito" 
                        data-nombre="cupcake chocolate" 
                        data-precio="95.00" 
                        data-img="img/pastel10.jpg">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span data-section="productos" data-value="boton">Agregar</span> 
                </button>
                <p class="price">S/95</p>
            </div>
        </div>
        <div class="card-product">
            <div class="container-img">
                <img src="img/pastel11.jpg" alt="Torta Red Velvet" />
            </div>
            <div class="content-card-product">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <h3>Torta Blancanieves</h3>
                <button class="btn-agregar-carrito" 
                        data-nombre="torta red velvet" 
                        data-precio="310.00" 
                        data-img="img/pastel11.jpg">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span data-section="productos" data-value="boton">Agregar</span> 
                </button>
                <p class="price">S/310</p>
            </div>
        </div>
        <div class="card-product">
            <div class="container-img">
                <img src="img/pastel12.jpg" alt="Torta de Zanahoria" />
                <span class="discount">-10%</span>
                
            </div>
            <div class="content-card-product">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h3>Torta Sweet Pink</h3>
                <button class="btn-agregar-carrito" 
                        data-nombre="torta de zanahoria" 
                        data-precio="90.00" 
                        data-img="img/pastel12.jpg">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span data-section="productos" data-value="boton">Agregar</span> 
                </button>
                <p class="price">S/90 <span>S/100</span></p>
            </div>
        </div>
    `
};

// Menú responsive
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navegacion');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
    // Mostrar productos destacados por defecto
    document.getElementById('productos-lista').innerHTML = productos.destacados;
    // Esperar a insertar productos y luego traducir
    setTimeout(() => {
        const idioma = localStorage.getItem('idioma') || 'es';
        if (typeof cambiarIdioma === 'function') cambiarIdioma(idioma);
    }, 0);
    // Mensaje de éxito del formulario
    const formulario = document.querySelector('form');
    const mensaje = document.getElementById('mensaje-registro');
    if (formulario && mensaje) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();
            if (formulario.checkValidity()) {
                mensaje.textContent = '¡Registro exitoso!';
                mensaje.style.backgroundColor = 'var(--rosado-fuerte)';
                mensaje.classList.add('activo');
                formulario.reset();
                setTimeout(() => mensaje.classList.remove('activo'), 3000);
            }
        });
    }
});

// Cambio de categoría de productos (destacados, recientes, vendidos)
document.querySelectorAll('.container-options span').forEach(opcion => {
    opcion.addEventListener('click', function () {
        document.querySelectorAll('.container-options span').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
        const tipo = this.getAttribute('data-tipo');
        document.getElementById('productos-lista').innerHTML = productos[tipo];
        // Reaplicar traducción luego de insertar nuevos productos
        requestAnimationFrame(() => {
            const idioma = localStorage.getItem('idioma') || 'es';
            if (typeof cambiarIdioma === 'function') cambiarIdioma(idioma);
        });
    });
});

// Función para traducir
function cambiarIdioma(idioma) {
    fetch(`./idiomas/${idioma}.json`)
        .then(res => res.json())
        .then(data => {
            const elementos = document.querySelectorAll('[data-section][data-value]');
            elementos.forEach(el => {
                const seccion = el.getAttribute('data-section');
                const valor = el.getAttribute('data-value');
                if (data[seccion] && data[seccion][valor]) {
                    el.textContent = data[seccion][valor];
                }
            });
        })
        .catch(error => console.error('Error al cargar el idioma:', error));
};

// Carrito - Agregar producto
document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn-agregar-carrito') || e.target.closest('.btn-agregar-carrito')) {
            const btn = e.target.closest('.btn-agregar-carrito');
            const nombre = btn.getAttribute('data-nombre');
            const precio = btn.getAttribute('data-precio');
            const img = btn.getAttribute('data-img');
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const index = carrito.findIndex(item => item.nombre === nombre);
            if (index > -1) {
                carrito[index].cantidad += 1;
            } else {
                carrito.push({ nombre, precio, img, cantidad: 1 });
            }
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    });
});

// Mostrar carrito en carrito.html
if (window.location.pathname.includes('carrito.html')) {
    document.addEventListener('DOMContentLoaded', function () {
        mostrarCarrito();
    });

    function mostrarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const contenedor = document.querySelector('.carrito-contenido');
        if (carrito.length === 0) {
            contenedor.innerHTML = '<p>El carrito está vacío.</p>';
            return;
        }
        let html = '<table><tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Total</th><th></th></tr>';
        carrito.forEach((item, i) => {
            html += `
                <tr>
                    <td><img src="${item.img}" width="60"> ${item.nombre}</td>
                    <td>S/. ${item.precio}</td>
                    <td>
                        <button class="menos" data-index="${i}">-</button>
                        ${item.cantidad}
                        <button class="mas" data-index="${i}">+</button>
                    </td>
                    <td>S/. ${(item.precio * item.cantidad).toFixed(2)}</td>
                    <td><button class="eliminar" data-index="${i}">Eliminar</button></td>
                </tr>
            `;
        });
        html += '</table>';
        contenedor.innerHTML = html;

        // Botón WhatsApp
        let btnWhatsapp = document.getElementById('btn-whatsapp');
        if (btnWhatsapp) btnWhatsapp.remove();
        if (carrito.length > 0) {
            btnWhatsapp = document.createElement('button');
            btnWhatsapp.id = 'btn-whatsapp';
            btnWhatsapp.className = 'btn-whatsapp';
            btnWhatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i> FINALIZAR PEDIDO POR WHATSAPP';
            btnWhatsapp.onclick = function () {
                let mensaje = '¡Hola! Quiero hacer un pedido:%0A';
                let total = 0;
                carrito.forEach(item => {
                    mensaje += `• ${item.nombre} x${item.cantidad} - S/.${item.precio} c/u%0A`;
                    total += item.precio * item.cantidad;
                });
                mensaje += `%0ATotal: S/.${total.toFixed(2)}`;
                window.open(`https://api.whatsapp.com/send?phone=51991741373&text=${mensaje}`, '_blank');
            };
            document.body.appendChild(btnWhatsapp);
        }

        // Botones de cantidad y eliminar
        contenedor.querySelectorAll('.menos').forEach(btn => {
            btn.onclick = function () {
                let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
                const i = btn.getAttribute('data-index');
                if (carrito[i].cantidad > 1) carrito[i].cantidad--;
                localStorage.setItem('carrito', JSON.stringify(carrito));
                mostrarCarrito();
            };
        });
        contenedor.querySelectorAll('.mas').forEach(btn => {
            btn.onclick = function () {
                let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
                const i = btn.getAttribute('data-index');
                carrito[i].cantidad++;
                localStorage.setItem('carrito', JSON.stringify(carrito));
                mostrarCarrito();
            };
        });
        contenedor.querySelectorAll('.eliminar').forEach(btn => {
            btn.onclick = function () {
                let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
                const i = btn.getAttribute('data-index');
                carrito.splice(i, 1);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                mostrarCarrito();
            };
        });
    }
}
