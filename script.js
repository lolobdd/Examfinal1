function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}

function ejercicio1(event) {
    event.preventDefault();
    limpiarResultado();
    let nota = parseFloat(prompt("Ingrese su nota para el ejercicio 1"));
    let mensaje = "";
    if (nota < 75) {
        mensaje = "Usted necesita mejorar.";
    } else if (nota < 80) {
        mensaje = "Bueno.";
    } else if (nota < 91) {
        mensaje = "Muy bueno.";
    } else if (nota <= 100) {
        mensaje = "Usted está en excelencia académica.";
    } else {
        mensaje = "Ingrese un valor válido.";
    }
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio2(event) {
    event.preventDefault();
    limpiarResultado();
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    let area = (base * altura) / 2;
    let mensaje = "El área del triángulo es: " + area;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio3(event) {
    event.preventDefault();
    limpiarResultado();
    const nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    const nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    const nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    const nota4 = parseFloat(prompt("Ingrese la cuarta nota:"));
    const promedio = Math.round((nota1 + nota2 + nota3 + nota4) / 4);
    let mensaje = "El promedio de las 4 notas es: " + promedio;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio4(event) {
    event.preventDefault();
    limpiarResultado();
    let precio = parseFloat(prompt("Ingrese el precio del ticket:"));
    let edad = parseFloat(prompt("Ingrese su edad para saber si tiene descuento:"));
    let mensaje = "";

    if (edad <= 12) {
        let cantidad = precio * 0.40;
        let descuento = precio - cantidad;
        mensaje = "Tiene un descuento del 40%. Solo debe pagar " + descuento + "$";
    } else if (edad <= 21) {
        let estudiante = prompt("¿Usted es estudiante? (si/no)").toLowerCase();
        if (estudiante === "si") {
            let canti = precio * 0.30;
            let des = precio - canti;
            mensaje = "Tiene un descuento del 30%. Solo debe pagar " + des + "$";
        } else {
            mensaje = "No tiene descuento. Debe pagar " + precio + "$";
        }
    } else if (edad >= 60) {
        let cantid = precio * 0.60;
        let descu = precio - cantid;
        mensaje = "Tiene un descuento del 60%. Solo debe pagar " + descu + "$";
    } else {
        mensaje = "No obtiene ningún descuento. Debe pagar " + precio + "$";
    }

    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio5(event) {
    event.preventDefault();
    limpiarResultado();
    let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
    let area = lado * lado;
    let mensaje = "El área del cuadrado es: " + area;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio6(event) {
    event.preventDefault();
    limpiarResultado();
    let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
    let perimetro = 2 * (base + altura);
    let mensaje = "El perímetro del rectángulo es: " + perimetro;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio7(event) {
    event.preventDefault();
    limpiarResultado();
    let edad = parseFloat(prompt("Ingrese su edad:"));
    let mensaje = "";
    if (edad >= 18) {
        mensaje = "Usted es mayor de edad.";
    } else if (edad < 18) {
        mensaje = "Usted es menor de edad.";
    } else {
        mensaje = "Ingrese un valor válido.";
    }
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio8(event) {
    event.preventDefault();
    limpiarResultado();
    let nombre = prompt("Ingrese su nombre:");
    let asistencia = parseFloat(prompt("Ingrese la cantidad de asistencias:"));
    let mensaje = "";
    if (asistencia >= 35) {
        mensaje = nombre + ", usted es un estudiante de categoría A.";
    } else if (asistencia >= 21 && asistencia < 35) {
        mensaje = nombre + ", usted es un estudiante de categoría B.";
    } else if (asistencia < 21) {
        mensaje = nombre + ", usted es un estudiante de categoría C.";
    } else {
        mensaje = "Unidad no válida.";
    }
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio9(event) {
    event.preventDefault();
    limpiarResultado();
    let baseMayor = parseFloat(prompt("Ingrese la base mayor del trapecio:"));
    let baseMenor = parseFloat(prompt("Ingrese la base menor del trapecio:"));
    let altura = parseFloat(prompt("Ingrese la altura del trapecio:"));
    let area = ((baseMayor + baseMenor) * altura) / 2;
    let mensaje = "El área del trapecio es: " + area;
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio10(event) {
    event.preventDefault();
    limpiarResultado();
    const tasaCambio = 24;
    const dolares = parseFloat(prompt("Ingrese la cantidad de dólares:"));
    const convertir = dolares * tasaCambio;
    const mensaje = dolares + " dólares son " + convertir + " lempiras.";
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio11(event) {
    event.preventDefault();
    limpiarResultado();
    let tasaCambio = 24;
    let lempiras = parseFloat(prompt("Ingrese la cantidad de lempiras:"));
    let convertir = lempiras / tasaCambio;
    let mensaje = lempiras + " lempiras son " + convertir.toFixed(2) + " dólares.";
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio12(event) {
    event.preventDefault();
    limpiarResultado();
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    let mensaje = celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.";
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio13(event) {
    event.preventDefault();
    limpiarResultado();
    let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    let area = Math.PI * Math.pow(radio, 2);
    let mensaje = "El área del círculo con radio " + radio + " es: " + area.toFixed(2);
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio14(event) {
    event.preventDefault();
    limpiarResultado();
    let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    let perimetro = 2 * Math.PI * radio;
    let mensaje = "El perímetro del círculo con radio " + radio + " es: " + perimetro.toFixed(2);
    document.getElementById("resultado").textContent = mensaje;
}

function ejercicio15(event) {
    event.preventDefault();
    limpiarResultado();
    let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
    let unidad = prompt("Ingrese la unidad que desea convertir (m para metros, cm para centímetros):");
    let mensaje = "";
    if (unidad === "m") {
        let cm = cantidad * 100;
        mensaje = `${cantidad} metros equivalen a ${cm} centímetros.`;
    } else if (unidad === "cm") {
        let m = cantidad / 100;
        mensaje = `${cantidad} centímetros equivalen a ${m} metros.`;
    } else {
        mensaje = "Unidad de medida no válida.";
    }
    document.getElementById("resultado").textContent = mensaje;
}