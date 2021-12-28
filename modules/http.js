// INSTANCE TO CREATE HTTP SERVER
const http = require('http');

// PORT TO ASSIGN THE SERVER
const PORT = 3000;

// FUNCION PARA CREAR UN ROUTER BASICO DE URL
const router = (req, res) => {
    // EVALUAMOS EL REQUEST DEL SERVIDOR
    switch (req.url) {
        case '/': //SI ES LA RAIZ
            res.end('<h1>Bienvenido al Sitio web.</h1>');
            break;
        default: //SI NO EXISTE LA URL QUE QUIERE CONSULTAR
            res.write('404! La URL solicitada no existe.'); //ENVIAMOS MENSAJE
            res.end(); //FINALIZAMOS LA RESPUESTA
            break;
    }
}

// CREACION DEL SERVER
const server = http.createServer(router);

// 
server.listen(PORT, (err) => {

    // SI OCURRE UN ERROR CORTA EL FLUJO Y ENVIA EL ERROR POR CONSOLA
    if (err) {
        console.info('No se pudo establecer conexion con el servidor');
        console.error(new Error(err.message));
    }

    // ENVIAMOS INFORMACION PARA ABRIR EL SERVER
    console.info(`> Ready On http://localhost:${PORT}`);
})