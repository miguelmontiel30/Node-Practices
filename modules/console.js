// CONSOLE PARA MENSAJES
console.log('Este es un console LOG');
console.info('Este es un console INFO');


// CONSOLE PARA ERROR
console.error('Este es un console Error');


// CONSOLE PARA WARNINGS
console.warn("Este es un console Warning")


// CONSOLE PARA MOSTRAR DATA EN TABLES
let Tabla = [{a: 1, b: 'A'},{a: 2,b: 'B'}]
console.table(Tabla)


// CONSOLE PARA MOSTRAR GRUPO DE LOGS
console.group('Conversación')
    console.log('Hola');
    console.log('bla bla bla');
    console.log('Ok Adios');
console.groupEnd('Fin de la Conversación')


// CONSOLE PARA MOSTRAR CONTADORES
console.count('Veces') // Veces: 1
console.count('Veces') // Veces: 2
console.count('Veces') // Veces: 3
console.count('Veces') // Veces: 4
console.count('Veces') // Veces: 5


// CONSOLE PARA TEMPORIZADORES
console.time('**Inicio**')
for(let i = 0; i < 5; i++){
		// Contador
    console.count('Ronda')
}
console.timeEnd('**Inicio**') // Inicio: 2.381ms