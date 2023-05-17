
function vaciarCarrito() {
    localStorage.removeItem('carrito');
}

function calcularTotal(products) {
    return products.reduce(
        (acum, product) => (acum += product.price * product.cantidad),
        0
    ).toFixed(3);
}

let contenedorCarrito = document.querySelector('.cartRows');
let products = [];

if (localStorage.carrito){
    let carrito = JSON.parse(localStorage.carrito);
    //console.log(carrito);
    carrito.forEach((item,index) => {
        fetch(`/api/product/${item.id}`)
        .then((res) => res.json())
        .then((product) =>{
            if (product) {
                contenedorCarrito.innerHTML += `
                <tr id="row${index}">
                <th scope="row">${index + 1}</th>
                    <td class="p">${product.title}</td>
                    <td class="p">${product.price}</td>
                    <td class="text-center">${item.cantidad}</td>
                    <td class="text-center">$ ${parseFloat(
                        product.price * item.cantidad,
                        2
                    ).toFixed(3)}</td>
                    <td class="close">X</td>
                </tr>
                `;
                products.push({
                    producId: product.id,
                    title: product.title,
                    price: product.price,
                    cantidad: item.cantidad,
                });
            } else { //lo borro de local storage
                carrito.splice(index, 1);
                localStorage.setItem('carrito', JSON.stringify(carrito))
            }
        }).then(() => { 
            document.querySelector('.totalAmount').innerText = 
            `$ ${calcularTotal(products
            )}`;
        });
    }); 
    /* let eliminar = contenedorCarrito.querySelector('.close');
    
    eliminar.addEventListener('click', vaciarCarrito); */
    
}

/* const eliminarProducto = () => {
    const foundId = products.find((element) => element.id);

    products = products.filter((productId) => {
        return productId !== foundId;
    })
} */