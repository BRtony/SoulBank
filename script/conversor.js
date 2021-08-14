
var valorInput;
var escolha01;
var input2 = document.getElementById('input2')

// Validação para usuário não digitar letras ou negativos
function validador() {
    valorInput = document.getElementById('input');
    if (isNaN(valorInput.value))
        alert("Digite apenas números!")
    else if (valorInput < 0)
        alert("Digite apenas números maiores que 0!")
}

var antes;
var depois;

// Determina qual a moeda que o usuário quer converter
function update() {
    var select1 = document.getElementById('opcoes1');
    antes = select1.options[select1.selectedIndex];
    return antes.value;
}

//Determina a moeda final
function update2() {
    var select2 = document.getElementById('opcoes2');
    depois = select2.options[select2.selectedIndex];
    return depois.value;
}

// Possibilidades de valores e seus respectivos valores na data de 13/08 , 
// fonte Google (Dados de câmbio disponibilizados pela Morningstar)
// O .toFixed(2) arredonda o resultado para cima em 2 casas decimais
    
function calcular(antes, depois) {
    if (antes == 'dolarAmericano' && depois == 'dolarAmericano') {
        input2.value = ((valorInput.value) * 1).toFixed(2);
    } else if (antes == 'dolarAmericano' && depois == 'dolarCanadense') {
        input2.value = ((valorInput.value) * 1.25).toFixed(2);
    } else if (antes == 'dolarAmericano' && depois == 'euro') {
        input2.value = ((valorInput.value) * 0.85).toFixed(2);
    } else if (antes == 'dolarAmericano' && depois == 'libra') {
        input2.value = ((valorInput.value) * 0.72).toFixed(2);
    } else if (antes == 'dolarAmericano' && depois == 'pesoAr') {
        input2.value = ((valorInput.value) * 97.10).toFixed(2);
    } else if (antes == 'dolarAmericano' && depois == 'realBr') {
        input2.value = ((valorInput.value) * 5.24).toFixed(2);

    } else if (antes == 'dolarCanadense' && depois == 'dolarAmericano') {
        input2.value = ((valorInput.value) * 0.80).toFixed(2);
    } else if (antes == 'dolarCanadense' && depois == 'dolarCanadense') {
        input2.value = ((valorInput.value) * 1).toFixed(2);
    } else if (antes == 'dolarCanadense' && depois == 'euro') {
        input2.value = ((valorInput.value) * 0.68).toFixed(2);
    } else if (antes == 'dolarCanadense' && depois == 'libra') {
        input2.value = ((valorInput.value) * 0.58).toFixed(2);
    } else if (antes == 'dolarCanadense' && depois == 'pesoAr') {
        input2.value = ((valorInput.value) * 77.61).toFixed(2);
    } else if (antes == 'dolarCanadense' && depois == 'realBr') {
        input2.value = ((valorInput.value) * 4.18).toFixed(2);

    } else if (antes == 'euro' && depois == 'dolarAmericano') {
        input2.value = ((valorInput.value) * 1.18).toFixed(2);
    } else if (antes == 'euro' && depois == 'dolarCanadense') {
        input2.value = ((valorInput.value) * 1.48).toFixed(2);
    } else if (antes == 'euro' && depois == 'euro') {
        input2.value = ((valorInput.value) * 1).toFixed(2);
    } else if (antes == 'euro' && depois == 'libra') {
        input2.value = ((valorInput.value) * 0.85).toFixed(2);
    } else if (antes == 'euro' && depois == 'pesoAr') {
        input2.value = ((valorInput.value) * 114.58).toFixed(2);
    } else if (antes == 'euro' && depois == 'realBr') {
        input2.value = ((valorInput.value) * 6.17).toFixed(2);

    } else if (antes == 'libra' && depois == 'dolarAmericano') {
        input2.value = ((valorInput.value) * 1.39).toFixed(2);
    } else if (antes == 'libra' && depois == 'dolarCanadense') {
        input2.value = ((valorInput.value) * 1.74).toFixed(2);
    } else if (antes == 'libra' && depois == 'euro') {
        input2.value = ((valorInput.value) * 1.18).toFixed(2);
    } else if (antes == 'libra' && depois == 'libra') {
        input2.value = ((valorInput.value) * 1).toFixed(2);
    } else if (antes == 'libra' && depois == 'pesoAr') {
        input2.value = ((valorInput.value) * 134.65).toFixed(2);
    } else if (antes == 'libra' && depois == 'realBr') {
        input2.value = ((valorInput.value) * 7.25).toFixed(2);

    } else if (antes == 'pesoAr' && depois == 'dolarAmericano') {
        input2.value = ((valorInput.value) * 0.010).toFixed(2);
    } else if (antes == 'pesoAr' && depois == 'dolarCanadense') {
        input2.value = ((valorInput.value) * 0.013).toFixed(2);
    } else if (antes == 'pesoAr' && depois == 'euro') {
        input2.value = ((valorInput.value) * 0.0087).toFixed(2);
    } else if (antes == 'pesoAr' && depois == 'libra') {
        input2.value = ((valorInput.value) * 0.0074).toFixed(2);
    } else if (antes == 'pesoAr' && depois == 'pesoAr') {
        input2.value = ((valorInput.value) * 1).toFixed(2);
    } else if (antes == 'pesoAr' && depois == 'realBr') {
        input2.value = ((valorInput.value) * 0.054).toFixed(2);

    } else if (antes == 'realBr' && depois == 'dolarAmericano') {
        input2.value = ((valorInput.value) * 0.19).toFixed(2);
    } else if (antes == 'realBr' && depois == 'dolarCanadense') {
        input2.value = ((valorInput.value) * 0.24).toFixed(2);
    } else if (antes == 'realBr' && depois == 'euro') {
        input2.value = ((valorInput.value) * 0.16).toFixed(2);
    } else if (antes == 'realBr' && depois == 'libra') {
        input2.value = ((valorInput.value) * 0.14).toFixed(2);
    } else if (antes == 'realBr' && depois == 'pesoAr') {
        input2.value = ((valorInput.value) * 18.59).toFixed(2);
    } else if (antes == 'realBr' && depois == 'realBr') {
        input2.value = ((valorInput.value) * 1).toFixed(2);
    }

}
