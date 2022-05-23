// codigo del cuadrado

// const ladoCuadrado = 5;
function perimetroCuadrado (ladoCuadrado) {
    return (ladoCuadrado * 4 + " cm");
}
function areaCuadrado (ladoCuadrado) {
    return (ladoCuadrado * ladoCuadrado + " cm2");
}

// console.log (areaCuadrado)


// codigo del triangulo

// const ladoTriangulo1 = 4;
// const ladoTriangulo2 = 5;
// const ladoTriangulo3 = 5;
function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, ladoTriangulo3) {
    return (ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3 + " cm");
}
function areaTriangulo (ladoTriangulo1, ladoTriangulo2, ladoTriangulo3) {
    return (((ladoTriangulo1+ladoTriangulo2) / 2) * ladoTriangulo1 / 2 + " cm2");
}

// console.log (areaTriangulo)


// codigo del circulo

// const radioCirculo = 3;
// const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
function perimetroCirculo (radioCirculo) {
    return ((radioCirculo*2) * PI + " cm");
}
function areaCirculo (radioCirculo) {
    return ((radioCirculo*radioCirculo) * PI + " cm2");
}

// console.log (areaCirculo)

function calcularPerimetroCuadrado () {
    const input = document.getElementById ("InputCuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado (value);
    alert (perimetro);
}
function calcularAreaCuadrado () {
    const input = document.getElementById ("InputCuadrado")
    const value = input.value;
    const area = areaCuadrado (value);
    alert (area);
}
function calcularPerimetroTriangulo () {
    const input1 = document.getElementById ("InputTriangulo")
    const Triangulo1 = input1.value;
    const input2 = document.getElementById ("InputTriangulo1")
    const Triangulo2 = input2.value;
    const input3 = document.getElementById ("InputTriangulo2")
    const Triangulo3 = input3.value;
    const perimetro = perimetroTriangulo (parseInt(Triangulo1), parseInt(Triangulo2), parseInt(Triangulo3));
    alert (perimetro);
}
function calcularAreaTriangulo () {
    const input1 = document.getElementById ("InputTriangulo")
    const Triangulo1 = input1.value;
    const input2 = document.getElementById ("InputTriangulo1")
    const Triangulo2 = input2.value;
    const input3 = document.getElementById ("InputTriangulo2")
    const Triangulo3 = input3.value;
    const area = areaTriangulo (parseInt(Triangulo1), parseInt(Triangulo2), parseInt(Triangulo3));
    alert (area);
}
function calcularPerimetroCirculo () {
    const input = document.getElementById ("InputCirculo")
    const value = input.value;
    const perimetro = perimetroCirculo (value);
    alert (perimetro);
}
function calcularAreaCirculo () {
    const input = document.getElementById ("InputCirculo")
    const value = input.value;
    const area = areaCirculo (value);
    alert (area);
}