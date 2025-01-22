const tiendas = [
    {
        id: 1,
        nombre: "San Juan",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 1599.99, stock: 10, estado: true },
                    { nombre: "Radio", precio: 49.99, stock: 25, estado: true },
                    { nombre: "Teléfono", precio: 699.99, stock: 15, estado: false },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 19.99, stock: 50, estado: true },
                    { nombre: "Pantalón", precio: 39.99, stock: 30, estado: true },
                    { nombre: "Zapatos", precio: 89.99, stock: 20, estado: false },
                ],
            },
        ],
    },
    {
        id: 2,
        nombre: "Santa Marta",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 1699.99, stock: 8, estado: true },
                    { nombre: "Radio", precio: 59.99, stock: 20, estado: true },
                    { nombre: "Teléfono", precio: 799.99, stock: 12, estado: true },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 14.99, stock: 60, estado: true },
                    { nombre: "Pantalón", precio: 49.99, stock: 25, estado: false },
                    { nombre: "Zapatos", precio: 99.99, stock: 15, estado: true },
                ],
            },
        ],
    },
];

// Recorrer y mostrar la información
tiendas.forEach(function (tienda) {
    console.log(`Tienda: ${tienda.nombre} (ID: ${tienda.id})`);
    tienda.categorias.forEach(function (categoria) {
        console.log(`  Categoría: ${categoria.nombre}`);
        categoria.productos.forEach(function (producto) {
            console.log(`    Producto: ${producto.nombre}`);
            console.log(`      Precio: ${producto.precio.toFixed(2)} Pesos`);
            console.log(`      Stock: ${producto.stock}`);
            console.log(`      Estado: ${producto.estado ? "Activo" : "Inactivo"}`);
        });
    });
});

// Función para buscar un producto por nombre
function buscarProducto(nombreProducto: string): void {
    let encontrado = false;

    tiendas.forEach((tienda) => {
        tienda.categorias.forEach((categoria) => {
            categoria.productos.forEach((producto) => {
                if (
                    producto.nombre.toLowerCase() === nombreProducto.toLowerCase() &&
                    producto.estado 
                ) {
                    encontrado = true;
                    console.log(`Producto encontrado: ${producto.nombre}`);
                    console.log(`  Tienda: ${tienda.nombre}`);
                    console.log(`  Precio: ${producto.precio.toFixed(2)} Pesos`);
                    console.log(`  Stock: ${producto.stock}`);
                }
            });
        });
    });

    if (!encontrado) {
        console.log(`El producto "${nombreProducto}" no se encuentra disponible o no está activo.`);
    }
}

buscarProducto("TV");
