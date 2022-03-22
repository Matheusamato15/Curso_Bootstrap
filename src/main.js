var inputSubmit = document.querySelector("#inputSubmit"); //salvando botão de envio do html
var valorInputSubmit = inputSubmit.value;

inputSubmit.onclick=validarCampos; //chamando a função para validar os campos ao pressionar do botão


function validarCampos(){ //função para validar campos
    
    var inputNome = document.querySelector("#inputNome"); //salvando input nome do html
    var valorInputNome = inputNome.value;

    var inputTextArea = document.querySelector("#inputTextArea"); //salvando text area do html
    var valorInputTextArea = inputTextArea.value;

    var inputEmail = document.querySelector("#inputEmail"); //salvando input email do html
    var valorInputEmail = inputEmail.value; 

    //dividindo o email em parte do usuário e parte do domínio
    var usuario = valorInputEmail.substring(0, valorInputEmail.indexOf("@")); 
    var dominio = valorInputEmail.substring(valorInputEmail.indexOf("@")+1, valorInputEmail.length);

    if(valorInputNome == ""){ //validação do nome
        alert("Erro no envio: Insira seu nome");
        inputNome.focus();
        return false;

    }if(valorInputTextArea == ""){ //validação da mensagem
        alert("Erro no envio: Insira uma mensagem");
        inputTextArea.focus();
        return false;

    }if(valorInputEmail.indexOf("@") > -1 == false){ //validação se email possui @
        alert("Seu email não segue a estrutura básica: usuario@dominio.com");
        return false;

    }if(usuario.length + 1 <= 32 && //validação do email
        usuario.length < 1 &&
        dominio.length + 1 <= 16 &&
        dominio. length < 1){
        alert("Erro no envio: Endereço de email inválido");
        inputEmail.focus();
        return false;
        
    }else{ //exibindo mensagem na tela
        alert(`Obrigado pelo contato, ${valorInputNome}!`);
    }

}
