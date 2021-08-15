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


// Aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
	const input= document.getElementById("InputCuadrado");
	const value = input.value;

	const perimetro = perimetroCuadrado(value);
	alert(perimetro);
}

function calcularAreaCuadrado(){
	const input= document.getElementById("InputCuadrado");
	const value = input.value;

	const area = areaCuadrado(value);
	alert(area);
}
console.group("Isósceles");

function perimetroIsosceles(lado1, lado2, base){
	if(lado1 === lado2 && lado1 !== base){
		console.log("Es un triangulo isósceles");
			return lado1 + lado2 + base
	}else if (lado2 === base && lado2 !== lado1) {
		console.log("Es un triangulo Isósceles 2");
		return lado1 + lado2 + base
	}else if (lado1 === base && lado1 !== lado2){
		console.log("Es un triangulo Isósceles 3");
		return lado1 + lado2 + base
	}else {
		console.log("No es un triangulo isósceles");
	}
	
}

function areaIsosceles(lado1, lado2, lado3){
	if(lado1 === lado2 && lado1 !== lado3){
		console.log("Es un triangulo isósceles");
		console.log("El área de tu triangulo isósceles es: ")
		const alturaIsosceles = Math.sqrt((Math.pow(lado1,2))-(Math.pow(lado3 , 2)/4));
		return (lado3 * alturaIsosceles)/2
			//return ((base) * (Math.sqrt(Math.pow(lado1,2))-(Math.pow(base, 2)/4))) / 2
	}else if (lado2 === lado3 && lado2 !== lado1) {
		console.log("Es un triangulo Isósceles 2");
		console.log("El área de tu triangulo isósceles es: ")
		const alturaIsosceles = Math.sqrt((Math.pow(lado2,2))-(Math.pow(lado1 , 2)/4));
		return (lado1 * alturaIsosceles)/2
	}else if (lado1 === lado3 && lado1 !== lado2){
		console.log("Es un triangulo Isósceles 3");
		console.log("El área de tu triangulo isósceles es: ")
		const alturaIsosceles = Math.sqrt((Math.pow(lado1,2))-(Math.pow(lado2 , 2)/4));
		return (lado2 * alturaIsosceles)/2
	}else {
		console.log("No es un triangulo isósceles");
	}
	
}

console.groupEnd("Isósceles");