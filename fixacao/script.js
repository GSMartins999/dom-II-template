const insereItem = () => {
    const listaAtual = document.getElementById("lista")
    const novoConteudo = document.createElement("li")
    const digitarConteudo = document.getElementById("meu-input")
    listaAtual.appendChild(novoConteudo)

    novoConteudo.innerHTML = digitarConteudo.value
}