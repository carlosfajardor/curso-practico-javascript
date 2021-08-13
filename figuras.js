// Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + perimetroCuadrado + " cm2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6 ;
const ladoTriangulo2 = 6 ;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
	"Los lados del triangulo miden: " 
	+ ladoTriangulo1 
	+ " cm, "
	+ ladoTriangulo2
	+ " cm, " + baseTriangulo
	+ " cm"
);

console.log("La altura del triángulo es " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + " cm2");

console.groupEnd();

//Código del circulo

console.group("Círculo");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo: " + radioCirculo + " cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo: " + diametroCirculo + " cm");
// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Cicunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo: " + perimetroCirculo + " cm");
//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo: " + areaCirculo + " cm2");

console.groupEnd();