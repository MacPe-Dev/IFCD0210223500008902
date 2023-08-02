// Método Fetch
// Realizar Peticiones AJAX de una manera más simple de que como se hacía antes.
// Una petición AJAX es una llamada a un servicio REST, API REST, Backend y recibir resultados externos.
// https://jsonplaceholder.typicode.com/
// https://reqres.in/
// API falsa gratuita para pruebas y prototipos.
// JSONView Extensión para el navegador y ver los datos formateados,

var div_usuarios = document.querySelector('#usuarios');
var usuarios =[];

fetch('https://reqres.in/api/users?page=2') // Realizamos la petición
    .then(data => data.json()) // Promesa para convertir en JSON 
    .then(users => { // Promesa para devolver los datos
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');

            nombre.innerHTML = (i+1) + '.- '+ user.first_name + ' ' + user.last_name;

            div_usuarios.appendChild(nombre);

            // document.querySelector('.loading').style.display = "none";
        });
    });

