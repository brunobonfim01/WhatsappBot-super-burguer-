const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user,msg){
    //return ["Digite o código do seu pedido"];
    if (msg === "*"){
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }
    if (msg === "#"){
        banco.db[user].stage = 2;
        return ["Estamos fechando seu pedido, ok?"];
    }
    if (!cardapio.menu[msg]){
        return ["Código inválido, digite o código novamente","```Digite # para finalizar ou * para cancelar```",];
    }
    
    banco.db[user].itens.push(cardapio.menu[msg]);

    return [`Item(${cardapio.menu[msg].descricao}) adicionado com sucesso`,"```Digite # para finalizar ou * para cancelar```",];
}

exports.execute = execute;