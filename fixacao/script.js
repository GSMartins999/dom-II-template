const insereItem = () => {
    ///criei o elemento dentro da lista
    const listaAtual = document.getElementById("lista")
    const novoConteudo = document.createElement("li")
    ///aqui disse que o elemento que seria jogado dentro da lista seria o do meu-input
    const digitarConteudo = document.getElementById("meu-input")
    ///Aqui disse que o elemento(novo conteudo) criado seria o filho da lista
    listaAtual.appendChild(novoConteudo)
    //Aqui joguei o elemento criado para o fim da lista
    novoConteudo.innerHTML = digitarConteudo.value
    ///Aqui atribui um valor 0 para o input para que ao enviar o elemento, não fique o nome na barra do input
    digitarConteudo.value = ""
}