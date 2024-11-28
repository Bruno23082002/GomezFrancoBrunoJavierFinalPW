document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const mainPage = document.getElementById('main-page');
    const loginPage = document.getElementById('login-page');
    const pages = document.querySelectorAll('.page');

    // Manejar el evento de envío del formulario de inicio de sesión
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'USER' && password === 'PASS') {
            loginMessage.textContent = 'Inicio de sesión correcto.';
            switchPage('main-page');
            sendEmail(username);
        } else {
            loginMessage.textContent = 'Contraseña incorrecta.';
        }
    });

    // Manejar el evento de envío del formulario de usuario
    const userForm = document.getElementById('user-form');
    const userWelcome = document.getElementById('user-welcome');

    userForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        userWelcome.textContent = `Bienvenido, ${name}!`;
    });

    // Manejar el evento de envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        formMessage.textContent = 'Mensaje enviado correctamente.';
        contactForm.reset();
        // Aquí iría la lógica para enviar el formulario por correo
    });

    // Función para enviar correo simulado
    function sendEmail(username) {
        console.log(`Correo enviado: El usuario ${username} ha ingresado a la página.`);
        // Aquí iría la lógica para enviar el correo.
    }

    // Manejar la navegación entre páginas
    document.querySelectorAll('nav a').forEach(navLink => {
        navLink.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = navLink.getAttribute('href').substring(1);
            switchPage(targetId);
        });
    });

    // Función para cambiar de página
    function switchPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }

    // Funciones para interactuar con las APIs (simulaciones)
    window.apiInteraction = function (apiNumber) {
        const apiResult = document.getElementById('api-result');

        switch (apiNumber) {
            case 1:
                apiResult.innerHTML = 'Obteniendo datos del clima...';
                setTimeout(() => {
                    apiResult.innerHTML = 'Clima: Soleado, 25°C';
                }, 1000);
                break;
            case 2:
                apiResult.innerHTML = 'Consultando precio de criptomoneda...';
                setTimeout(() => {
                    apiResult.innerHTML = 'Precio de Bitcoin: $50,000';
                }, 1000);
                break;
            case 3:
                apiResult.innerHTML = 'Obteniendo noticias recientes...';
                setTimeout(() => {
                    apiResult.innerHTML = 'Noticias: “La tecnología AI revoluciona la industria.”';
                }, 1000);
                break;
            default:
                apiResult.innerHTML = 'Interacción no válida.';
        }
    };

    // Funciones para calcular operaciones
    window.calculateTotal = function () {
        const price = parseFloat(document.getElementById('price').value);
        const quantity = parseFloat(document.getElementById('quantity').value);
        if (!isNaN(price) && !isNaN(quantity)) {
            const total = price * quantity;
            document.getElementById('result').innerText = `Total Producto: $${total.toFixed(2)}`;
        } else {
            document.getElementById('result').innerText = 'Por favor ingrese valores válidos.';
        }
    };

    window.calculatePercentage = function () {
        const price = parseFloat(document.getElementById('percentage-price').value);
        if (!isNaN(price)) {
            const percentage = price * 0.30;
            document.getElementById('result').innerText = `30% del Precio: $${percentage.toFixed(2)}`;
        } else {
            document.getElementById('result').innerText = 'Por favor ingrese un valor válido.';
        }
    };

    window.calculateDiscount = function () {
        const price = parseFloat(document.getElementById('discount-price').value);
        const quantity = parseFloat(document.getElementById('discount-quantity').value);
        if (!isNaN(price) && !isNaN(quantity)) {
            const total = price * quantity;
            const discount = total * 0.25;
            const finalPrice = total - discount;
            document.getElementById('result').innerText = `Precio con 25% de Descuento: $${finalPrice.toFixed(2)}`;
        } else {
            document.getElementById('result').innerText = 'Por favor ingrese valores válidos.';
        }
    };

    // Inicializar la primera página visible
    document.querySelector('.page.active').classList.add('active');
});
