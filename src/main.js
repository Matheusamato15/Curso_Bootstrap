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
    var dominio = valorInputEmail.substring(valorInputEmail.indexOf("@")+1, valorInputEmail.length);

    console.log(dominio);

    if(valorInputNome == ""){
        alert("Erro no envio: Insira seu nome");
        inputNome.focus();
        return false;

    }if(valorInputTextArea == ""){
        alert("Erro no envio: Insira uma mensagem");
        inputTextArea.focus();
        return false;

    }if(valorInputEmail.indexOf("@") > -1 == false){
        alert("Seu email não segue a estrutura básica: usuario@dominio.com");
        return false;

    }if(usuario.length + 1 <= 32 &&
        usuario.length < 1 &&
        dominio.length + 1 <= 16 &&
        dominio. length < 1){
        alert("Erro no envio: Endereço de email inválido");
        inputEmail.focus();
        return false;
        
    }else{
        alert(`Obrigado pelo contato, ${valorInputNome}!`);
    }

}
