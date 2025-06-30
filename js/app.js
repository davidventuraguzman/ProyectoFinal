document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navegacion');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
    
    // Manejo del formulario de registro solo para mostrar éxito
    const formulario = document.querySelector('form');
    const mensaje = document.getElementById('mensaje-registro');
    if (formulario && mensaje) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();
            // Si el formulario es válido, muestra mensaje de éxito
            if (formulario.checkValidity()) {
                mensaje.textContent = '¡Registro exitoso!';
                mensaje.style.backgroundColor = 'var(--rosado-fuerte)';
                mensaje.classList.add('activo');
                formulario.reset();
                setTimeout(() => {
                    mensaje.classList.remove('activo');
                }, 3000);
            }
        });
    }
});

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
					<span class="add-cart">
						<i class="fa-solid fa-basket-shopping"></i>
					</span>
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
					<span class="add-cart">
						<i class="fa-solid fa-basket-shopping"></i>
					</span>
					<p class="price">S/52 <span>S/65</span></p>
				</div>
			</div>
			<!--3-->
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
					<span class="add-cart">
						<i class="fa-solid fa-basket-shopping"></i>
					</span>
					<p class="price">S/80</p>
				</div>
			</div>
			<!-- 4-->
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
					<span class="add-cart">
						<i class="fa-solid fa-basket-shopping"></i>
					</span>
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
                <span class="add-cart"><i class="fa-solid fa-basket-shopping"></i></span>
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
                <span class="add-cart"><i class="fa-solid fa-basket-shopping"></i></span>
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
                <span class="add-cart"><i class="fa-solid fa-basket-shopping"></i></span>
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
                <span class="add-cart"><i class="fa-solid fa-basket-shopping"></i></span>
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
					<span class="add-cart">
						<i class="fa-solid fa-basket-shopping"></i>
					</span>
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
                <span class="add-cart"><i class="fa-solid fa-basket-shopping"></i></span>
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
                <span class="add-cart"><i class="fa-solid fa-basket-shopping"></i></span>
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
                <span class="add-cart"><i class="fa-solid fa-basket-shopping"></i></span>
                <p class="price">S/90 <span>S/100</span></p>
            </div>
        </div>
    `
};

// Cambia los productos al hacer clic en las opciones
document.querySelectorAll('.container-options span').forEach(opcion => {
    opcion.addEventListener('click', function () {
        // Quitar clase active de todas
        document.querySelectorAll('.container-options span').forEach(s => s.classList.remove('active'));
        // Agregar clase active a la seleccionada
        this.classList.add('active');
        // Cambiar productos
        const tipo = this.getAttribute('data-tipo');
        document.getElementById('productos-lista').innerHTML = productos[tipo];
    });
    document.getElementById('productos-lista').innerHTML = productos.destacados;
});

//CARRITOOOOOOO
// Función para agregar producto al carrito
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-agregar-carrito')) {
            const nombre = e.target.getAttribute('data-nombre');
            const precio = e.target.getAttribute('data-precio');
            const img = e.target.getAttribute('data-img');
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

// Mostrar productos en carrito.html
if (window.location.pathname.includes('carrito.html')) {
    document.addEventListener('DOMContentLoaded', function() {
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
        //boton de WhatsApp
        // Mostrar botón de WhatsApp si hay productos
        let btnWhatsapp = document.getElementById('btn-whatsapp');
        if (btnWhatsapp) btnWhatsapp.remove(); // Elimina si ya existe

        if (carrito.length > 0) {
            btnWhatsapp = document.createElement('button');
            btnWhatsapp.id = 'btn-whatsapp';
            btnWhatsapp.className = 'btn-whatsapp';
            btnWhatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i> FINALIZAR PEDIDO POR WHATSAPP';
            btnWhatsapp.onclick = function() {
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
            btn.onclick = function() {
                let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
                const i = btn.getAttribute('data-index');
                if (carrito[i].cantidad > 1) carrito[i].cantidad--;
                localStorage.setItem('carrito', JSON.stringify(carrito));
                mostrarCarrito();
            };
        });
        contenedor.querySelectorAll('.mas').forEach(btn => {
            btn.onclick = function() {
                let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
                const i = btn.getAttribute('data-index');
                carrito[i].cantidad++;
                localStorage.setItem('carrito', JSON.stringify(carrito));
                mostrarCarrito();
            };
        });
        contenedor.querySelectorAll('.eliminar').forEach(btn => {
            btn.onclick = function() {
                let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
                const i = btn.getAttribute('data-index');
                carrito.splice(i, 1);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                mostrarCarrito();
            };
        });
    }
}