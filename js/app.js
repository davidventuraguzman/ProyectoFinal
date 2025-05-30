document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navegacion');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
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