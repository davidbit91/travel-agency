let noches;
let ciudad ;
let alquiler;

function recogerDatos(){
    noches = document.forms["formulario"]["noches"].value;
    ciudad = document.forms["formulario"]["ciudad"].value;
    alquiler = document.forms["formulario"]["alquiler"].value;

    /*numeroNoches(noches);
    calcularCosteAvion(ciudad);
    calcularCosteCoche(alquiler);
*/
    calcularPrecioFinal(numeroNoches(noches),calcularCosteAvion(ciudad),calcularCosteCoche(alquiler));

}

function numeroNoches(noches){
    document.getElementById("div1").innerHTML = `Número de noches ${noches}, precio a pagar: ${60*noches}`;

    return 60*noches;
}

function calcularCosteAvion(ciudad){
    let precioAvion;
    ciudad = ciudad.toLowerCase();
    
    switch (ciudad){
        case 'londres':
            precioAvion = 120;
            break;
        case 'paris':
            precioAvion = 180;
            break;
        case 'boston':
            precioAvion = 600;
            break;
    }
    document.getElementById("div2").innerHTML = `Viaje a ${ciudad}, precio a pagar: ${precioAvion}`;

    return precioAvion;
}

function calcularCosteCoche(alquiler){
    let precio = 40 * alquiler;
    let precioDescuento = 0;
    if(alquiler >=3 && alquiler < 7){
        precioDescuento = precio - 20;
        
    }else if(alquiler >7){
        precioDescuento = precio - 50;
    }else{
        precioDescuento = precio;
    }

    document.getElementById("div3").innerHTML = `Días de alquiler ${alquiler}, el precio es de: ${precioDescuento}`;

    return precioDescuento;
}

function calcularPrecioFinal(n,c,a){
    document.getElementById("div4").innerHTML = `El precio total a pagar es de: ${n+c+a}`;
}




