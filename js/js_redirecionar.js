function redi_menu_gerente(){
    window.location = "menu-gerente.html";
}

function redi_code(){
    window.location = "recu-senha-code.html";
}

function redi_redefinir(){
    window.location = "recu-senha-redefinir.html";
}

function redi_login(){
    window.location = "login.html";
} 

function redi_estoque(){
    window.location = "estoque.html"
}

function redi_gestao_usuario(){
    window.location = "Gestao-usuario.html"
}

function redi_historico_vendas(){
    window.location = "historico-vendas.html"
}

function redi_sistema_vendas(){
    window.location = "sistema-vendas.html"
}

function verificar_login(){
    let nome = document.getElementById('nome_funcionario').value;
    let senha = document.getElementById('senha_funcionario').value;

    let erromensagem = document.getElementById('erro_mensagem');
    erromensagem.style.display = 'none';

    if(nome && senha){
        redi_menu_gerente()
    }
    else{
        erromensagem.style.display = 'block';
    }

}


