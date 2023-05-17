//para todos los productos
function productosEnElCarrito() {
    return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0;
}

window.addEventListener('load', function () {
    let botonComprar = document.querySelectorAll('.comprar3');
    let cartNumber = document.querySelector('.cart-number');
    cartNumber.innerText = productosEnElCarrito();

    botonComprar.forEach((boton) => {
        //escuchar el click
        boton.addEventListener('click', (e) => {
            //console.log(e.target.dataset.id);
            //crear carrito
            if (localStorage.carrito) {
                let carrito = JSON.parse(localStorage.carrito);
                //si esta le +1 sino se agrega con push
                let index = carrito.findIndex((producto) => producto.id == e.target.dataset.id);
                if (index = ! -1) {
                    carrito[index].cantidad++
                } else {
                    carrito.push({ id: e.target.dataset.id, cantidad: 1 })
                }
                localStorage.setItem('carrito', JSON.stringify(carrito));
            } else {
                localStorage.setItem(
                    'carrito',
                    JSON.stringify([{ id: e.target.dataset.id, cantidad: 1 }])
                );
            }
            toastr.success('Se agregó este producto al carrito')
            cartNumber.innerText = productosEnElCarrito();
        });
    });
})


//formulario-login





//formulario-registro

/* const formRegistro = document.querySelector('#login-formulario');

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()
    const fullname = document.querySelector('#fullname').value;
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const avatar = document.querySelector('#avatar').value;

    //checkear si mail existe

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registrado!')
    }

    Users.push({fullname: fullname, username: username, email: email, password: password, avatar: avatar})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Existoso!')
    //redireccion a login
    window.location.href.replace('user/login')

}) */