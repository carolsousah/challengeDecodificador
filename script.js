const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"



function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

    document.querySelector(".mensagem").style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    const regexAcentos = /[áéíóúàèìòùâêîôûãõäëïöüç]/;

    if (regexAcentos.test(stringEncriptada)) {
        alert('O texto não pode conter letras maiúsculas, acentuadas ou caracteres especiais.');
        // Limpar o texto se acentos forem encontrados
        stringEncriptada = stringEncriptada.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove acentos
        stringEncriptada = stringEncriptada.replace(/[^a-z]/g, ''); // Remove caracteres não permitidos
        // Reexibir o texto limpo 
        document.querySelector(".text-area").value = stringEncriptada;
        return ''; // Retorna uma string vazia para não continuar com a criptografia
    }



    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    
    document.querySelector(".mensagem").style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    const regexAcentos = /[áéíóúàèìòùâêîôûãõäëïöüç]/;

    if (regexAcentos.test(stringDesencriptada)) {
        alert('O texto não pode conter letras maiúsculas, acentuadas ou caracteres especiais.');
        // Limpar o texto se acentos forem encontrados
        stringDesencriptada = stringDesencriptada.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove acentos
        stringDesencriptada = stringDesencriptada.replace(/[^a-z]/g, ''); // Remove caracteres não permitidos
        // Reexibir o texto limpo 
        document.querySelector(".text-area").value = stringDesencriptada;
        return ''; // Retorna uma string vazia para não continuar com a criptografia
    }

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    mensagem.select();
    document.execCommand("copy");
    
}
