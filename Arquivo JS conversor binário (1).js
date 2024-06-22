    function converterDecimalParaBinario(){
        let decimal = document.getElementById("decimalInput").value;
        let binario = "";
    
        while(decimal > 0){
            binario = (decimal % 2) + binario;
            decimal = Math.floor(decimal / 2);
        }
        document.getElementById("binarioOutput").innerHTML = binario;
    }
//Funções para converter decimal para binário e vice-versa.

function converterBinarioParaDecimal(){
    let binario = document.getElementById("binarioInput").value;
    let decimal = 0;
    let potencia = 0;

    for(let i = binario.length - 1; i >= 0; i--){
        if(binario[i] === '1'){
            decimal += Math.pow(2, potencia);
        }
        potencia++;
    }
    document.getElementById("decimalOutput").innerHTML = decimal;
}
//Funções para converter binário para decimal e vice-versa.