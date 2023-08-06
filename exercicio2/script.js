const mudarInputPassword = (event) => {
    //serve para mudar o comportamento do form, fazendo com que ele não recarregue a pag
    event.preventDefault()

    //pegando o id de qual elemento iremos mudar
    const meuInputdeSenha = document.getElementById("password")

     //Mudando o type da senha de text para password, com o setAttribute
    meuInputdeSenha.setAttribute("type", "password")

   
    
} 


//troca o estilo do site para dark
function alterarModo(event){
    event.preventDefault()
    const form1 = document.querySelector(".light")
    // form1.classList.remove("light")
    //  form1.classList.add("dark")
    form1.classList.toggle("dark")
}
