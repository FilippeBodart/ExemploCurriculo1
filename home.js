const copiarEmail = document.querySelector(".sobre__botao");
const emailUsuario = "filippekb@gmail.com"

copiarEmail.addEventListener(
    'click', () => {
        copiarTexto ();
        ;
    })
;

function copiarTexto (){
    navigator.clipboard.writeText(emailUsuario)
        .then(() => {
            mensagemCopiar()
        })
        .catch((error) => {
            console.error("Deu Jazz: ", error)
        })
    }

function mensagemCopiar (){
    var popUp = document.querySelector(".popup__email");
    popUp.style.display = "block";
    
    setTimeout(() => {
        popUp.style.display = "none";
    }, 5000);
}

//mailto