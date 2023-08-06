function addElemto() {
    //pegamos o id da lista
    const listaAtual = document.getElementById("lista")

    //criamos o Item 0
    const novoItem0 = document.createElement("li")
    const novoConteudo = document.createTextNode("Item 0")
    novoItem0.appendChild(novoConteudo)
    listaAtual.insertAdjacentElement("afterbegin", novoItem0 )
    //beforebegin inseriou o elemento antes de todos os items do elemento pai


    //criamos o Item 5
    const novoItem5 = document.createElement("li")
    const novoConteudo5 = document.createTextNode("Item 5")
    novoItem5.appendChild(novoConteudo5)
    listaAtual.insertAdjacentElement("beforeend", novoItem5)
    //beforeend inseriou o elemento após todos os items do elemento pai
}

addElemto()