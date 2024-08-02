//CRUD
//Create - Read - Update - Delet
//Crear - Leer - Actualizar - Borrar

//alert("Hola Mundo c:");

//-----------
//Texto se borra y se vuelve a escribir solo
//tipoVariable nombreVariable = ValorDeLaVariable;
//nombreVariable = ValorDeLaVariable;
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

// el . es para llamar a una propiedad o accion del objeto
//Acciones se distinguen por parentesis
typewriter
    .pauseFor(2000)
    .typeString('Alejandra Melo')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora FrontEnd JR')
    .pauseFor(1000)
    .deleteAll()
    .start();

//------------

let frase1 = document.getElementById('frase1');

let typewriter2 = new Typewriter(frase1, {
    loop: true,
    delay: 75,
});

// el . es para llamar a una propiedad o accion del objeto
//Acciones se distinguen por parentesis
typewriter2
    .pauseFor(2000)
    .typeString('"El futuro no está escrito, es lo que hacemos ahora lo que cambia nuestro destino."')
    .pauseFor(2000)
    .deleteAll()
    .typeString('-Guillermo del Toro')
    .pauseFor(1000)
    .deleteAll()
    .start();
// //------------

// let autor = document.getElementById('autor');

// let typewriter3 = new Typewriter(autor, {
//     loop: true,
//     delay: 75,
// });

// // el . es para llamar a una propiedad o accion del objeto
// //Acciones se distinguen por parentesis
// typewriter3
//     .pauseFor(7000)
//     .typeString('-Guillermo del Toro')
//     .pauseFor(7000)
//     .deleteAll()
//     .deleteAll()
//     .start();

// //------------