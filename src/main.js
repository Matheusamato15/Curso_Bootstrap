var inputSubmit = document.querySelector("#inputSubmit");
var valorInputSubmit = inputSubmit.value;

inputSubmit.onclick=validarCampos;


function validarCampos(){
    
    var inputNome = document.querySelector("#inputNome");
    var valorInputNome = inputNome.value;

    var inputTextArea = document.querySelector("#inputTextArea");
    var valorInputTextArea = inputTextArea.value;

    var inputEmail = document.querySelector("#inputEmail");
    var valorInputEmail = inputEmail.value; 

    var usuario = valorInputEmail.substring(0, valorInputEmail.indexOf("@"));
    var dominio = valorInputEmail.substring(valorInputEmail.indexOf("@")+1, valorInputEmail.lenght);

    if(valorInputNome == ""){
        alert("Erro no envio: Insira seu nome");
        inputNome.focus();
        return false;
    } if(valorInputTextArea == ""){
        alert("Erro no envio: Insira uma mensagem");
        inputTextArea.focus();
        return false;
    } if(usuario.lenght < 3){
        alert("Erro no envio: Endereço de mail inválido");
    }

}
