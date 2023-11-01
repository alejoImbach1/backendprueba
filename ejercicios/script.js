const display = document.getElementById("display");

function invertir(){
    let arrInicial = [];
    let arrInvertido = [];
    let cadena = prompt("Ingrese su nombre");
    
    arrInicial = cadena.split("");
    alert("Arreglo inicial: "+arrInicial);

    arrInvertido = arrInicial.reverse();

    alert("Arreglo invertido: "+arrInvertido);
}

function vocales(){
    let nombre = prompt("Ingrese su nombre");
    let arr = nombre.toLocaleLowerCase().split("");
    let contVocales = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u"){
            contVocales++;
        }
    }
    alert(nombre+" tiene "+contVocales+" vocales");
}

function calcular(){
    display.value = eval(display.value);
}

function presionar(simbolo){
    display.value += simbolo;
}

function borrarTodo(){
    display.value = "";
}