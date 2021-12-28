let saludo = "Holaa Mundo ";

// ACCEDEMOS A UNA VARIBALE DE ENTORNO
// ADEMAS DEFINIMOS UN VALOR POR DEFECTO
let technologie = process.env.TECH || 'No Tecnologies defined';

console.log(saludo + technologie);