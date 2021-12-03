let numeroSecreto = parseInt(Math.random() * 11)
let contador = 0
let numerosChutados = []
let textNumerosChutados = ""
let resultado = ""
let tentativas = ""
let marcas = ""

// Som
let soundEffect = document.getElementById("som")

let elementoResultado = document.getElementById("resultado")
let elementoTentativas = document.getElementById("tentativas")
let elementoMarcas = document.getElementById("marcas")
let elementoChutes = document.getElementById("chutes")

function Chutar(){
    // Resetar o som
    soundEffect.innerHTML = ""

    // Pega o número digitado na página e transforma em número inteiro
    let chute = parseInt(document.getElementById('valor').value)

    if(isNaN(chute)){
        // Se o valor digitado não for um número, não acontece nada
    } else if(numerosChutados.includes(chute)){
        // Verifica se o número ja foi chutado
        resultado = "Você já chutou esse número!"
    } else {
        if(chute > 10 || chute < 0){
            resultado = "Você deve digitar um número de 0 a 10"
        } else {
            // Adiciona o número digitado dentro da lista 
            numerosChutados.push(chute)

            // Ordenar os números chutados
            numerosChutados.sort(function (a, b){
                return a - b
            })

            // Lista dos números chutados
            textNumerosChutados = "Números chutados: "
            textNumerosChutados += numerosChutados[0]
            for (i = 1; i < numerosChutados.length; i++){
                textNumerosChutados += `, ${numerosChutados[i]}`
            }

            contador = contador + 1 // Contador de tentativas
            tentativas = `Você usou ${contador} tentativa(s) para acertar`

            if (chute < numeroSecreto){
                resultado = `Errou! O número secreto é <i>maior</i> que ${chute}`
                marcas += '<img src="https://i.ibb.co/D7SYKWy/330x192.png">'
                somErro()
            } else if (chute > numeroSecreto){
                resultado = `Errou! O número secreto é <i>menor</i> que ${chute}`
                marcas += '<img src="https://i.ibb.co/D7SYKWy/330x192.png">'
                somErro()
            } else if (chute == numeroSecreto){
                resultado = `Acertou! O número secreto é ${chute}`
                marcas += '<img class="headshot" src="http://i1.wp.com/www.tipify.gg/wp-content/uploads/2020/11/headshot.png?fit=240%2C240&ssl=1">'
                somAcerto()

                // Desabilitar o botão de chute
                document.getElementById("btnChutar").disabled = true
            }
        }
    }

    // Colocar os resultados de volta para o HTML e imprimir na tela, cada qual no seu local designado 
    elementoResultado.innerHTML = resultado
    elementoTentativas.innerHTML = tentativas
    elementoMarcas.innerHTML = marcas
    elementoChutes.innerHTML = textNumerosChutados

    // Resetar caixa de texto
    document.getElementById("valor").value = ""
}

// Função para reiniar o jogo
function Zerar(){
    // Sorteia novo número
    numeroSecreto = parseInt(Math.random() * 11);

    // Zera a contagem e limpa as listas e campos de resultado
    contador = 0
    numerosChutados = []
    textNumerosChutados = ""
    resultado = ""
    tentativas = ""
    marcas = ""

    // Limpa os campos de texto da tela
    elementoResultado.innerHTML = resultado;
    elementoTentativas.innerHTML = tentativas;
    elementoMarcas.innerHTML = marcas;
    elementoChutes.innerHTML = textNumerosChutados;

    // Habilita novemente o botão para chutar
    document.getElementById("btnChutar").disabled = false

    // Limpa a caixa de texto
    document.getElementById("valor").value = ""
}

// Códigos dos Sons
function somAcerto() {
    let somHTML = '<source id="som1" src="https://www.myinstants.com/media/sounds/que-ota_-17.mp3">'

    soundEffect.innerHTML = somHTML
    document.getElementById("som").load()
}

function somErro() {
    let somHTML = '<source src="https://www.myinstants.com/media/sounds/negative_1.mp3">'

    soundEffect.innerHTML = somHTML
    document.getElementById("som").load()
}