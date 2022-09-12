

var numero = parseInt(prompt("Ingrese una numero mayor a 0 para calcular su factorial"));
let repetir = "";
debugger;

while(repetir!= "ESC"){
    if(numero > 0){
        let resultado = numero;
        for(i=numero-1;i>0;i--){
            resultado *= i;
        }
        alert("El factorial del numero " + numero + " es " + resultado);
    }
    else{
        alert("Por favor, ingrese u numero mayor a 0");
    }
    repetir = prompt("Si deseea realizar otro calculo oprima en Aceptar, de lo contrario, presione ESC o Cancelar");
    if(repetir == null)
    {
        break;
    }
    else{
        numero = parseInt(prompt("Ingrese una numero mayor a 0 para calcular su factorial"));
    }
}


