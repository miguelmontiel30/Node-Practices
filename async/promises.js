const saludo = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Saludos usuario: " + nombre);
            resolve(nombre)
        }, 1500);
    })
}

const despedida = (nombre, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hasta luego usuario: " + nombre);
            resolve(nombre);
        }, 1500);
    })
}

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('BLA BLA BLA....');
            resolve(nombre);
        }, 500);
    })
}

const conversar = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(() => {
            conversar(nombre, --veces, callback)
        })
    } else {
        despedida(nombre, callback);
    }
}

console.log("Iniciando Proceso...");

saludo('Miguel')
    .then((nombre) => {
        return hablar(nombre)
    })
    .then((nombre) => {
        return despedida(nombre)
    })
    .then(() => {
        console.log('Terminando Proceso...');
    }).catch(error => {
        console.error(new Error('Error: ' + error));
    })




// ******************* CALLBACK HELL ******************* //
// saludo('Miguel', (error, nombre) => {
//     if (error) console.log(new Error('Error: ' + error));
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 despedida(nombre, () => {
//                     if (error) console.log(new Error('Error: ' + error));
//                     console.log('Terminando Proceso....');
//                 });
//             })
//         })
//     })
// });
// ******************* CALLBACK HELL ******************* //
