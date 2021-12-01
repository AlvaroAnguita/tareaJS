function cuentas(numero1, numero2){
    console.log("Numero 1: "+numero1+" Numero 2: "+numero2)
    console.log("La suma de los 2 numero es: "+(numero1+numero2));
    console.log("La resta de los 2 numero es: "+(numero1-numero2))
    console.log("La multiplicacion de los 2 numero es: "+(numero1*numero2))
    console.log("La division de los 2 numero es: "+(numero1/numero2))
    console.log("\n")
}



function area(base,altura){
    console.log("El area del triangulo con base: "+ base+" y altura: "+altura+" es: " +(base*altura)/2)
    console.log("\n")

}

function perimetro(largo,ancho){
    console.log("El perimetro del rectangulo con largo: "+ largo+" y ancho: "+ancho+" es: "+ (largo*2+ancho*2))
    console.log("\n")
}

function evaluar(empleados){
    let sueldoM=0;
    let nombre;
    console.log("Lista de empleados:")
    
    console.log("--------------------")
    for(empelado of empleados){
        console.log("Nombre: "+empelado.nombre+ " ---- "+"Sueldo: "+empelado.sueldo+"\n")
        if(empelado.sueldo>sueldoM){
            sueldoM=empelado.sueldo;
            nombre=empelado.nombre;
        }
    }
    console.log("La persona con mas sueldo es: "+ nombre+" con un sueldo de: "+sueldoM+"€")
    console.log("\n")
}

function presupuesto(presupuesto,hospital){
    console.log("Repartiendo el presupuesto con la cantidad de: "+presupuesto);
    console.log("-----------------------------------------------------------")
    for(area of hospital){
        console.log("Presupuesto destinado a: "+area.area+"---> "+ area.porcentaje*presupuesto+"€")
       
    }
    console.log("\n")
}


function horasExtra(precio,horas){
    h=40
    cont=8
    i=1
    total=0
    if(horas>h){
        h=horas-h
        while(h>0 && cont>0){
           total=total+precio*2
           h--
           cont--
        }
        while(h>0){
            total=total+precio*3
            h--
        }
        console.log("Sueldo extra por: "+(horas-40)+" trabajadas: " +total+"€")

    }else{
        console.log("El trabajador no ha trabajado horas extras")
    }
    console.log("\n")
}

function fechaNavidad(dias,mes,año){
    if(mes==12){
        console.log("ES NAVIDAD!!")
    }else{
        console.log("No es navidad :(")
    }
    console.log("\n")
}

function hombresMujeres(lista){

    contMujeres=0
    for(persona of lista){
        if (persona.sexo=="F"){
            contMujeres++
        }
    }
    console.log("De: "+lista.length+" estudiantes en total, el: "+((contMujeres*100)/lista.length)+"% han sido mujeres y el: "
    + (100-((contMujeres*100)/lista.length))+"% han sido hombres")
}


console.log("Cuentas: ")
cuentas(6,12)
console.log("Area del triangulo: ")
area(4,8)
console.log("Perimetro del rectangulo: ")
perimetro(6,9)

console.log("Calculo del sueldo mayor: ")
let empleados=[{"nombre":"juan","sueldo":12},{"nombre":"pepe","sueldo":19},{"nombre":"carlos","sueldo":17},
{"nombre":"maria","sueldo":1999},{"nombre":"laura","sueldo":1899}]
evaluar(empleados)


let hospital=[{"area":"URGENCIAS","porcentaje":0.37},{"area":"PEDRIAGRIA","porcentaje":0.19},{"area":"TRAUMATOLOGIA","porcentaje":0.17}]
presupuesto(100,hospital)


horasExtra(5,49)

fechaNavidad(12,5,2000)

let lista=[{"nombre":"Juan","sexo":"F"},{"nombre":"Pepe","sexo":"F"},{"nombre":"Maria","sexo":"F"},{"nombre":"Carlos","sexo":"F"},{"nombre":"Laura","sexo":"F"}
,{"nombre":"Rosa","sexo":"F"},{"nombre":"Pablo","sexo":"F"}]

hombresMujeres(lista)