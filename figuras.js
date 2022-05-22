// codigo del cuadrado

const ladoCuadrado = 5;
const perimetroCuadrado = (ladoCuadrado * 4 + " cm");
const areaCuadrado = (ladoCuadrado * ladoCuadrado + " cm2");

console.log (areaCuadrado)


// codigo del triangulo

const ladoTriangulo1 = 4;
const ladoTriangulo2 = 5;
const ladoTriangulo3 = 5;
const perimetroTriangulo = (ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3 + " cm");
const areaTriangulo = ((Math.sqrt(Math.trunc(Math.pow(ladoTriangulo2) - Math.pow(ladoTriangulo1 / 2))) * ladoTriangulo1) / 2 + " cm2");

console.log (areaTriangulo)
