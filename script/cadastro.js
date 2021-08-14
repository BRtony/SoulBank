function validar() {
  var nome2 = document.getElementById("nome_frase");
  var verifica = true;
  var resultado_nome = aumentar_Nome(); //chamando a function passando verifica
  var resultado_cpf = verifica_Cpf(); // chamando a function de verificaçao do cpf
  var resultado_idade = verifica_Idade(); // chamando a function de verificaçao do idade
  var resultado_email = verifica_Email(); // chamando a function de verificaçao do email
  var resultado_sexo = document.getElementById("sexo").value; // variavel recebe valor do select sexo
  //se os retornos forem diferentes de falso , envia para a function os valores
  if (
    resultado_nome != false &&
    resultado_cpf != false &&
    resultado_idade != false &&
    resultado_email != false
  ) {
    escrever_tela(
      resultado_cpf,
      resultado_email,
      resultado_idade,
      resultado_nome,
      resultado_sexo
    );
  }
}

function aumentar_Nome(verifica) {
  var nome = document.getElementById("nome"); //pega o que foi digitado //pega o que foi digitado
  //verifica se está vazio
  if (nome.value.length == 0) {
    nome.style.borderColor = "red"; // pinta a borda de vermelho
    return false;
  } else {
    nome.style.borderColor = ""; // tendo nome ele reseta a cor da border
    nome.value = nome.value.toUpperCase(); //aumenta a letra
    //nome2.value = nome.value.toUpperCase(); //aumenta a letra
    //alert(nome.value);
    return nome.value;
  }
}

function verifica_Cpf(numCPF) {
  var numCPF = document.getElementById("cpf").value; // pega o valor do cpf
  var campo_cpf = document.getElementById("cpf"); // campo para tratar o input
  var soma;
  var resto;
  Soma = 0;
  if (numCPF == "00000000000") {
    // verifica se foi digitado so 0
    campo_cpf.style.borderColor = "red"; //borda do campo fica vermelho
    return false;
  }

  for (i = 1; i <= 9; i++) {
    // for para verificar os 9 primeiros digitos
    soma = soma + parseInt(numCPF.substring(i - 1, i)) * (11 - i);
  } // pega a primeira posiçao  e multiplica por 10, add a soma.. a 2º * 9 e assim até a ultima posição
  resto = (soma * 10) % 11; // multiplica a soma por 10 e verifica o mod de 11

  if (resto == 10 || resto == 11) {
    // se mod  igual 10 ou 11
    resto = 0;

    if (resto != parseInt(numCPF.substring(9, 10))) {
      //compara o resto da soma com o 1º digito verificado
      campo_cpf.style.borderColor = "red"; //borda do campo fica vermelho
      return false;
    }
  }
  soma = 0;
  //o 1º digito sendo verdadeiro é feito o mesmo procedimento lendo agora os 10 digitos
  for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(numCPF.substring(i - 1, i)) * (12 - i); //soma o resultado da multiplicação | 1º pos X 10 ... 2ºpos X 9 ... |
  }
  resto = (soma * 10) % 11; // multiplica a soma por 10 e verifica o mod de 11

  if (resto == 10 || resto == 11) {
    // se mod  igual 10 ou 11
    resto = 0;
  }
  if (resto != parseInt(numCPF.substring(10, 11))) {
    //compara o resto da soma com o 2º digito verificado
    campo_cpf.style.borderColor = "red"; //borda do campo fica vermelho
    return false;
  }
  campo_cpf.style.borderColor = ""; //borda do campo volta ao default

  return numCPF; //retorna cpf
}
//function para verificar dia / mes / ano / idade
function verifica_Idade(idade) {
  var data = new Date(); // data recebendo o objeto new Date()
  var ano_atual = data.getFullYear(); // variavel recebendo o ano formato YYYY do ano atual
  var mes = data.getMonth(); // variavel recebendo o mes atual
  var ano_nascimento = document.getElementById("ano").value; //variavel recebe o ano do input
  var dia_nascimento = document.getElementById("dia").value; //variavel recebe o dia do input
  var mes_nascimento = document.getElementById("mes").value - 1; //variavel recebe o valor do mes do select
  var campo_ano = document.getElementById("ano");
  var campo_mes = document.getElementById("mes");
  var idade = ano_atual - ano_nascimento; // calculo da idade ano atual - ano nascimento
  if (mes_nascimento > mes && ano_nascimento >= ano_atual) { // mes nasc . mes atual e ano nasc >= ano atual
    campo_ano.style.borderColor = "red"; //borda do campo fica vermelho
    campo_mes.style.borderColor = "red"; //borda do campo fica vermelho
    alert("Data Inválida!! Verifique Mês/Ano !!");
    return false;
  }
  if ( //se
    ano_nascimento.value == "" || // ano vazio
    dia_nascimento.value == "" ||// ou dia vazio
    isNaN(ano_nascimento) || // ou ano não é numero
    isNaN(dia_nascimento) ||// ou dia não é numero
    parseInt(dia_nascimento) < 1 || // ou dia < 1
    parseInt(idade) < 0 ||// ou idade < 0
    parseInt(dia_nascimento) > 31 ||//ou dia > 31
    parseInt(idade) > 130 // ou idade > 130
  ) {
    ano.style.borderColor = "red"; //borda do campo fica vermelho
    dia.style.borderColor = "red"; //borda do campo fica vermelho
    alert("Data Inválida!! Verifique Dia/Ano!!");
    return false;
  } else {
    ano.style.borderColor = ""; //borda do campo volta a cor default
    dia.style.borderColor = ""; //borda do campo volta a cor default
    return idade;
  }
}

//function verificaEmail {
function verifica_Email(field) {
  var field = document.getElementById("email");// field recebe email
  usuario = field.value.substring(0, field.value.indexOf("@")); //usuario recebe o valor digitado da posicao 0 ate a @
  dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );//dominio recebe apartir do @ ate a ultima posicao
  if (
    usuario.length >= 1 && // tamanho do usuario não vazio
    dominio.length >= 3 && // dominio com no minimo 3 posiçoes
    usuario.search("@") == -1 && // usuario sem arroba
    dominio.search("@") == -1 && // dominio sem arroba 
    usuario.search(" ") == -1 && // usuario sem espaço vazio
    dominio.search(" ") == -1 && // dominio sem espaço vazio
    dominio.search(".") != -1 && // dominio com ponto
    dominio.indexOf(".") >= 1 && // dominio com mais posiçao apartir do ponto
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    document.getElementById("email").innerHTML = "E-mail válido";
    //alert("email valido");
    return field.value;
  } else {
    document.getElementById("email").style.borderColor = "red"; //borda do campo fica vermelho
    //alert("email invalido");
    return false;
  }
}
// function para a div que tem as informaações do usuario
function escrever_tela(cpf, email, idade, nome, sexo) { // recebe todas as infos coletadas
  var paragrafo_resultado = document.getElementById("nome_frase"); // 
  paragrafo_resultado.innerHTML =
    "<h3>Olá,</h3>" +
    nome +
    "<br>" +
    "seu login é " +
    email +
    ",<br>" +
    "você tem " +
    idade +
    ",<br>" +
    "se define como uma pessoa do sexo " +
    sexo +
    ",<br>" +
    "e pode usar " +
    cpf +
    " como senha."; // formato a ser impresso na tela
}
