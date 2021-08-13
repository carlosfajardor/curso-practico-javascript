// Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
	return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
	return lado * lado
}
//console.log("El área del cuadrado es: " + perimetroCuadrado + " cm2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6 ;
// const ladoTriangulo2 = 6 ;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
// 	"Los lados del triangulo miden: " 
// 	+ ladoTriangulo1 
// 	+ " cm, "
// 	+ ladoTriangulo2
// 	+ " cm, " + baseTriangulo
// 	+ " cm"
// );

// console.log("La altura del triángulo es " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base){
	return lado1 + lado2 + base;
}

function areaTriangulo(base , altura) {
	return (base * altura)/2 ;
}

// console.log("El área del triángulo es: " + areaTriangulo + " cm2");

console.groupEnd();

// //Código del circulo

console.group("Círculo");

// // Radio
// const radioCirculo = 4;
// console.log("El radio del círculo: " + radioCirculo + " cm");

// Diámetro
function diametroCirculo(radio){
	return radio * 2;
}

//console.log("El diámetro del círculo: " + diametroCirculo + " cm");
// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Cicunferencia
function perimetroCirculo(radio){
	const diametro = diametroCirculo(radio);
	return diametro * PI; 
}

//Área
function areaCirculo(radio){
	return (radio * radio) * PI

}

console.groupEnd();