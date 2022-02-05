var nombre = Math.floor(Math.random() * 20) + 1;

var num = 15;
// for (let i = 0; i <= 10; i++) {
//   console.log(`${nombre} * ${i} =  ${i *nombre}`)
// }

console.log(nombre)
console.log(`Le nombre est divisible par : `)
for (let i = 1; i <= nombre; i++) {
  if (nombre % i == 0) {
    console.log(i);
  }
}
