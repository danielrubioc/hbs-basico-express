const pintarCarrito = document.querySelector("#pintarCarrito");
const count = document.querySelector("#count");
let productos = JSON.parse(localStorage.getItem("productosMercado"));

const agregarCarrito = (e) => {
    const product = e.target.dataset.name;
    e.target.classList.add("disabled");
    if (productos === null) {
        localStorage.setItem("productosMercado", JSON.stringify([product]));
        return;
    }
    const exist = productos.find((p) => p === product);
    if (!exist) {
        productos.push(product);
        localStorage.setItem("productosMercado", JSON.stringify(productos));
    }
    pintar();
};

const eliminarCarrito = (e) => {
    const product = e.target.dataset.name;
    productos = productos.filter((e) => e !== product);
    localStorage.setItem("productosMercado", JSON.stringify(productos));
    document
        .querySelector(`[data-name="${product}"]`)
        .classList.remove("disabled");
    pintar();
};

const pintar = (e) => {
    pintarCarrito.innerHTML = "";
    count.innerHTML = "";
    if (productos) {
        productos.forEach((e) => {
            pintarCarrito.innerHTML += `
            <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                <img src="img/${e}.png" alt="${e}" />
                asdasdsad
                <button type="button" class="btn btn-danger" data-btn="eliminar" data-name="${e}">
                    <i class="bi bi-x-circle-fill"></i>
                    Eliminar</button>
            </div>
            `;
            document
                .querySelector(`[data-name="${e}"]`)
                .classList.add("disabled");
        });
        count.innerHTML = productos.length;
    }
};

document.addEventListener("click", (e) => {
    if (e.target.dataset.btn === "agregar") {
        agregarCarrito(e);
    }
    if (e.target.dataset.btn === "eliminar") {
        eliminarCarrito(e);
    }
});

window.addEventListener("DOMContentLoaded", (e) => {
    pintar();
});
