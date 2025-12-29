(function () {
    const qtdNumAleatorio = document.getElementById("qtdNumAleatorio")
    const qtdNumJogo = document.getElementById("qtdNumJogo")
    const botao = document.getElementById("botao")
    const resultado = document.getElementById("resultado")
  
    function gerarNumerosMegaSena(qtdNumAleatorio) {
        const numeros = []
        while (numeros.length < qtdNumAleatorio) {
            const numero = Math.floor(Math.random() * 60) + 1
            if (!numeros.includes(numero)) {
                numeros.push(numero)
            }
        }
        return numeros.sort((a, b) => a - b).join("-")
    }

    botao.addEventListener("click", () => {
        const jogosMegaSena = []

        for (let i = 0; i < qtdNumJogo.value; i++) {
            jogosMegaSena.push(gerarNumerosMegaSena(+qtdNumAleatorio.value))

        }
        resultado.innerText = jogosMegaSena.join("\n")
    })

})()



